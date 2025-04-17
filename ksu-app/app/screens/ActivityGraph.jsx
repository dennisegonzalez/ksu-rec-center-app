import React, { useMemo, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Svg, { Path, Circle, LinearGradient, Stop, Defs } from 'react-native-svg';

// Location data outside component to prevent recreation
const locationData = {
  Kennesaw: {
    dataPoints: [15, 120, 85, 130, 95, 125, 130, 90, 40],
    timeLabels: ['7AM', '9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM', '11PM']
  },
  Marietta: {
    dataPoints: [5, 60, 45, 80, 55, 75, 85, 50, 20],
    timeLabels: ['7AM', '9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM', '11PM']
  }
};

const ActivityGraph = ({ onCountUpdate, location = 'Kennesaw' }) => {
  // Get location data
  const { dataPoints, timeLabels } = locationData[location];
  const lastCountRef = useRef(null);

  // Function to convert time label to 24-hour format
  const getHourFromLabel = useCallback((label) => {
    const match = label.match(/(\d+)([AP]M)/);
    if (!match) return -1;
    let hour = parseInt(match[1]);
    const period = match[2];
    
    if (period === 'PM' && hour !== 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    return hour;
  }, []);

  // Calculate current data
  const currentData = useMemo(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const totalMinutes = (currentHour * 60 + currentMinute) - (7 * 60);

    const isOpen = totalMinutes >= 0 && totalMinutes < 960;
    if (!isOpen) return { isOpen, count: 0, position: 0, activeLabelIndex: 0 };

    const position = totalMinutes / 960 * (dataPoints.length - 1);
    
    // Calculate student count
    const leftIndex = Math.floor(position);
    const rightIndex = Math.min(leftIndex + 1, dataPoints.length - 1);
    const progress = position - leftIndex;
    const leftCount = dataPoints[leftIndex];
    const rightCount = dataPoints[rightIndex];
    const count = Math.round(leftCount + (rightCount - leftCount) * progress);

    // Find active label
    let activeLabelIndex = 0;
    for (let i = 0; i < timeLabels.length; i++) {
      const labelHour = getHourFromLabel(timeLabels[i]);
      const nextLabel = timeLabels[i + 1];
      const nextHour = nextLabel ? getHourFromLabel(nextLabel) : 23;
      
      if (currentHour >= labelHour && currentHour < nextHour) {
        activeLabelIndex = i;
        break;
      }
    }

    return { isOpen, count, position, activeLabelIndex };
  }, [dataPoints, timeLabels, getHourFromLabel]);

  // Update count callback only when count actually changes
  useEffect(() => {
    if (onCountUpdate && currentData.count !== lastCountRef.current) {
      lastCountRef.current = currentData.count;
      onCountUpdate(currentData.count);
    }
  }, [currentData.count, onCountUpdate]);

  // Calculate min and max for normalization
  const { minCount, maxCount } = useMemo(() => ({
    minCount: Math.min(...dataPoints),
    maxCount: Math.max(...dataPoints)
  }), [dataPoints]);

  // If gym is closed, show message
  if (!currentData.isOpen) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.graphContainer, styles.closedContainer]}>
          <View style={styles.blurContainer}>
            <Text style={styles.closedText}>The Gym is currently closed</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Graph dimensions
  const width = Dimensions.get('window').width - 82;
  const height = 98;
  const textWidth = 30;
  const startX = textWidth / 2;
  const endX = width - textWidth / 2;
  const graphWidth = endX - startX;

  // Create the curved line path with area for gradient
  const points = dataPoints.map((point, index) => {
    const x = startX + (index / (dataPoints.length - 1)) * graphWidth;
    const y = 10 + ((1 - (point - minCount) / (maxCount - minCount)) * (height - 20));
    return `${x},${y}`;
  });

  // Create path for both line and fill
  const linePath = `M ${points[0]} ${points.slice(1).map((point, i) => {
    const x1 = startX + (i * graphWidth / (dataPoints.length - 1)) + (graphWidth / (dataPoints.length - 1)) / 2;
    const x2 = startX + ((i + 1) * graphWidth / (dataPoints.length - 1)) - (graphWidth / (dataPoints.length - 1)) / 2;
    const y1 = 10 + ((1 - (dataPoints[i] - minCount) / (maxCount - minCount)) * (height - 20));
    const y2 = 10 + ((1 - (dataPoints[i + 1] - minCount) / (maxCount - minCount)) * (height - 20));
    return `C ${x1},${y1} ${x2},${y2} ${point}`;
  }).join(' ')}`;

  // Add bottom line to create closed path for gradient
  const fillPath = `${linePath} L ${endX},${height - 10} L ${startX},${height - 10} Z`;

  // Calculate exact position and interpolated Y value
  const exactX = startX + (currentData.position / (dataPoints.length - 1)) * graphWidth;
  const currentY = 10 + ((1 - (currentData.count - minCount) / (maxCount - minCount)) * (height - 20));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.graphContainer}>
        <Svg width={width} height={height}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#FFC629" stopOpacity="0.5" />
              <Stop offset="1" stopColor="#FFC629" stopOpacity="0.0" />
            </LinearGradient>
          </Defs>
          <Path
            d={fillPath}
            fill="url(#grad)"
          />
          <Path
            d={linePath}
            fill="none"
            stroke="#FFC629"
            strokeWidth="3"
          />
          <Circle
            cx={exactX}
            cy={currentY}
            r="6"
            fill="#FFFFFF"
            stroke="#DBA31D"
            strokeWidth="2"
          />
        </Svg>
      </View>
      <View style={styles.xAxisContainer}>
        {timeLabels.map((label, index) => (
          <Text key={index} style={[
            styles.timeLabel,
            index === currentData.activeLabelIndex && styles.activeTimeLabel
          ]}>
            <Text style={[
              styles.timeNumber,
              index === currentData.activeLabelIndex && styles.activeTimeNumber
            ]}>{label.replace(/[APM]/g, '')}</Text>
            <Text style={[
              styles.timePeriod,
              index === currentData.activeLabelIndex && styles.activeTimePeriod
            ]}>{label.match(/[APM]+/)[0]}</Text>
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  graphContainer: {
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  closedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  closedText: {
    fontSize: 16,
    color: '#939598',
    fontFamily: 'BeVietnamRegular',
  },
  xAxisContainer: {
    height: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timeLabel: {
    color: '#939598',
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeTimeLabel: {
    color: '#FFBF00',
  },
  timeNumber: {
    fontSize: 14,
    color: '#939598',
  },
  activeTimeNumber: {
    color: '#FFBF00',
  },
  timePeriod: {
    fontSize: 11,
    color: '#939598',
    marginTop: 2,
  },
  activeTimePeriod: {
    color: '#FFBF00',
  },
});

export default ActivityGraph;
