import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Svg, { Path, Circle, LinearGradient, Stop, Defs } from 'react-native-svg';

const ActivityGraph = ({ onCountUpdate }) => {
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
  const [isGymOpen, setIsGymOpen] = useState(true);
  
  // Check if current time is within operating hours (7AM-11PM)
  const checkGymHours = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 7 && hour < 23; // 7AM to 11PM
  };

  // Convert time string to minutes since 7AM
  const timeToMinutes = (timeStr) => {
    const [hour, period] = timeStr.match(/(\d+)([AP]M)/).slice(1);
    let minutes = parseInt(hour) * 60;
    if (period === 'PM' && hour !== '12') minutes += 12 * 60;
    if (period === 'AM' && hour === '12') minutes = 0;
    return minutes - 7 * 60;
  };

  // Data points represent actual student counts through the day
  const dataPoints = [15, 120, 85, 130, 95, 125, 130, 90, 40];
  const timeLabels = ['7AM', '9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM', '11PM'];

  // Function to get hour from time label
  const getHourFromLabel = (label) => {
    const match = label.match(/(\d+)([AP]M)/);
    if (!match) return -1;
    let hour = parseInt(match[1]);
    if (match[2] === 'PM' && hour !== 12) hour += 12;
    if (match[2] === 'AM' && hour === 12) hour = 0;
    return hour;
  };

  // Calculate which label should be highlighted based on current time
  const getCurrentLabelIndex = () => {
    const now = new Date();
    const currentHour = now.getHours();
    for (let i = 0; i < timeLabels.length; i++) {
      const labelHour = getHourFromLabel(timeLabels[i]);
      const nextLabel = timeLabels[i + 1];
      const nextHour = nextLabel ? getHourFromLabel(nextLabel) : 23;
      if (currentHour >= labelHour && currentHour < nextHour) {
        return i;
      }
    }
    return 0;
  };

  const activeLabelIndex = getCurrentLabelIndex();

  // Get current time position and check gym hours
  useEffect(() => {
    const updateTimePosition = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const totalMinutes = (currentHour * 60 + currentMinute) - (7 * 60);

      const isOpen = totalMinutes >= 0 && totalMinutes < 960;
      setIsGymOpen(isOpen);
      
      if (!isOpen) {
        onCountUpdate && onCountUpdate(0);
        return;
      }

      const position = totalMinutes / 960 * (dataPoints.length - 1);
      setCurrentTimeIndex(position);

      // Calculate current student count
      const leftIndex = Math.floor(position);
      const rightIndex = Math.min(leftIndex + 1, dataPoints.length - 1);
      const progress = position - leftIndex;
      const leftCount = dataPoints[leftIndex];
      const rightCount = dataPoints[rightIndex];
      const interpolatedCount = Math.round(leftCount + (rightCount - leftCount) * progress);
      
      // Update parent component with current count
      onCountUpdate && onCountUpdate(interpolatedCount);
    };

    updateTimePosition();
    const interval = setInterval(updateTimePosition, 60000);
    return () => clearInterval(interval);
  }, [onCountUpdate]);

  // Graph dimensions
  const width = Dimensions.get('window').width - 82;
  const height = 98;
  
  // Calculate text width approximation
  const textWidth = 30;
  const startX = textWidth / 2;
  const endX = width - textWidth / 2;
  const graphWidth = endX - startX;

  // Function to normalize student count to graph height (25-130 range to 0-1)
  const normalizeStudentCount = (count) => (count - 25) / (130 - 25);

  // Create the curved line path with area for gradient
  const points = dataPoints.map((point, index) => {
    const x = startX + (index / (dataPoints.length - 1)) * graphWidth;
    const y = 10 + ((1 - normalizeStudentCount(point)) * (height - 20));
    return `${x},${y}`;
  });

  // Create path for both line and fill
  const linePath = `M ${points[0]} ${points.slice(1).map((point, i) => {
    const x1 = startX + (i * graphWidth / (dataPoints.length - 1)) + (graphWidth / (dataPoints.length - 1)) / 2;
    const x2 = startX + ((i + 1) * graphWidth / (dataPoints.length - 1)) - (graphWidth / (dataPoints.length - 1)) / 2;
    const y1 = 10 + ((1 - normalizeStudentCount(dataPoints[i])) * (height - 20));
    const y2 = 10 + ((1 - normalizeStudentCount(dataPoints[i + 1])) * (height - 20));
    return `C ${x1},${y1} ${x2},${y2} ${point}`;
  }).join(' ')}`;

  // Add bottom line to create closed path for gradient
  const fillPath = `${linePath} L ${endX},${height - 10} L ${startX},${height - 10} Z`;

  // Calculate exact position and interpolated Y value
  const exactX = startX + (currentTimeIndex / (dataPoints.length - 1)) * graphWidth;
  
  // Find surrounding data points for Y interpolation
  const leftIndex = Math.floor(currentTimeIndex);
  const rightIndex = Math.min(leftIndex + 1, dataPoints.length - 1);
  const progress = currentTimeIndex - leftIndex;
  
  // Interpolate Y value between data points
  const leftY = dataPoints[leftIndex];
  const rightY = dataPoints[rightIndex];
  const interpolatedCount = leftY + (rightY - leftY) * progress;
  const currentY = 10 + ((1 - normalizeStudentCount(interpolatedCount)) * (height - 20));

  // If gym is closed, show message
  if (!isGymOpen) {
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
            index === activeLabelIndex && styles.activeTimeLabel
          ]}>
            <Text style={[
              styles.timeNumber,
              index === activeLabelIndex && styles.activeTimeNumber
            ]}>{label.replace(/[APM]/g, '')}</Text>
            <Text style={[
              styles.timePeriod,
              index === activeLabelIndex && styles.activeTimePeriod
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
