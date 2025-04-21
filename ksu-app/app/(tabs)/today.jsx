/*
  Who is working on it: Hernan & Coki
*/
import ActivityGraph from "../../components/ActivityGraph";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const Today = () => {
  const { firstName } = useLocalSearchParams();
  const [selectedLocation, setSelectedLocation] = useState('Kennesaw');
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  );
  const [studentCounts, setStudentCounts] = useState({
    Kennesaw: 0,
    Marietta: 0
  });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() || 7; // Convert Sunday (0) to 7 for Monday start

    const previousMonth = new Date(year, month, 0);
    const daysInPreviousMonth = previousMonth.getDate();

    const days = [];
    
    // Add days from previous month
    for (let i = startingDay - 1; i > 0; i--) {
      days.push({
        day: daysInPreviousMonth - i + 1,
        disabled: true,
      });
    }

    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i);
      days.push({
        day: i,
        active: dayDate.toDateString() === currentDate.toDateString(),
      });
    }

    // Add only enough days to complete the last week that contains current month days
    const totalDays = days.length;
    const remainingDays = 7 - (totalDays % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push({
          day: i,
          disabled: true,
        });
      }
    }

    return days;
  };

  const handlePreviousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  const handleCountUpdate = (count) => {
    setStudentCounts(prev => ({
      ...prev,
      [selectedLocation]: count
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentDayName = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const currentDay = currentDate.getDay();
    return days[currentDay];
  };

  const renderActivityBox = () => (
    <View style={styles.activityBox}>
      <View style={styles.activityHeader}>
        <Text style={styles.activityTitle}>Current Activity</Text>
        <View style={styles.activityCountContainer}>
          <Text style={styles.activityCount}>
            {studentCounts[selectedLocation]}
          </Text>
          <Text style={styles.activityLabel}>students</Text>
          <Text style={styles.currentTime}>
            Current time: {currentTime}
          </Text>
        </View>
      </View>
      <View style={styles.activityGraphContainer}>
        <ActivityGraph onCountUpdate={handleCountUpdate} location={selectedLocation} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Today</Text>
          <Link href="//notifications" asChild>
            <TouchableOpacity>
              <Ionicons name="notifications" size={24} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollContent}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContent}>
          {/* Greeting */}
          <Text style={styles.greeting}>Good Morning, {firstName || 'SHPE'} 👋</Text>

          {/* Events Section */}
          <View style={styles.eventsSection}>
            <Text style={styles.sectionTitle}>Events For You</Text>
            <Image 
              source={require('../../assets/images/EventsToday.png')}
              style={styles.eventCard}
              resizeMode="cover"
            />
          </View>

          {/* Location Tabs */}
          <View style={styles.tabContainer}>
            <View style={styles.locationTabs}>
              <TouchableOpacity 
                style={[
                  styles.locationTab,
                  selectedLocation === 'Kennesaw' && styles.activeLocationTab
                ]}
                onPress={() => setSelectedLocation('Kennesaw')}
              >
                <Text style={styles.locationText}>Kennesaw</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[
                  styles.locationTab,
                  selectedLocation === 'Marietta' && styles.activeLocationTab
                ]}
                onPress={() => setSelectedLocation('Marietta')}
              >
                <Text style={styles.locationText}>Marietta</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Current Activity */}
          <View style={styles.activitySection}>
            {renderActivityBox()}
          </View>

          {/* Calendar Section */}
          <View style={styles.calendarSection}>
            <Text style={styles.sectionTitle}>Scrappy Fit Calendar</Text>
            <View style={styles.calendarBox}>
              <View style={styles.calendarHeader}>
                <TouchableOpacity onPress={handlePreviousMonth}>
                  <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.calendarTitle}>
                  {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </Text>
                <TouchableOpacity onPress={handleNextMonth}>
                  <Ionicons name="chevron-forward" size={24} color="#000" />
                </TouchableOpacity>
              </View>
              
              <View style={styles.weekDaysHeader}>
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                  <Text 
                    key={day} 
                    style={[
                      styles.weekDayText,
                      day !== getCurrentDayName() && styles.inactiveWeekDayText
                    ]}
                  >
                    {day}
                  </Text>
                ))}
              </View>

              <View style={styles.calendarGrid}>
                {getDaysInMonth(selectedDate).map((item, index) => (
                  <View key={index} style={styles.calendarDay}>
                    {item.active && <View style={styles.activeDay} />}
                    <Text style={[
                      styles.calendarDayText,
                      item.active && styles.activeDayText,
                      item.disabled && styles.disabledDayText
                    ]}>{item.day}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 0,
  },
  headerContainer: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'BeVietnamMedium',
    color: '#000',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 25,
    color: '#414348',
    marginLeft: 10,
  },
  eventsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 12.5,
  },
  eventCard: {
    height: 170,
    width: '100%',
    margin: 2,
    borderRadius: 20,
    marginBottom: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  locationTabs: {
    flexDirection: 'row',
    flex: 1,
  },
  locationTab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  activeLocationTab: {
    backgroundColor: '#FFBF00',
  },
  locationText: {
    color: '#4C4C4C',
    fontSize: 18,
    fontFamily: 'BeVietnamRegular',
  },
  activeLocationText: {
    color: '#FFFFFF',
  },
  activitySection: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  activityBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    paddingTop: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 2,
  },
  activityHeader: {
    marginBottom: 15,
  },
  activityTitle: {
    fontSize: 18,
    fontFamily: 'BeVietnamLight',
    color: '#666666',
    marginBottom: 0,
  },
  activityCountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  activityCount: {
    fontSize: 24,
    color: '#414348',
    marginRight: 5,
  },
  activityLabel: {
    fontSize: 16,
    color: '#999999',
    fontFamily: 'BeVietnamRegular',
  },
  currentTime: {
    fontSize: 14,
    color: '#FFBF00',
    marginLeft: 10,
    fontFamily: 'BeVietnamRegular',
  },
  activityGraphContainer: {
    height: 120,
    backgroundColor: '#ffffff00',
  },
  bottomPadding: {
    height: 80,
  },
  calendarSection: {
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 0,
  },
  calendarBox: {
    padding: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  calendarTitle: {
    fontSize: 18,
    fontFamily: 'BeVietnamThin',
    color: '#262626',
  },
  weekDaysHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDayText: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'BeVietnamThin',
    color: '#262626',
  },
  inactiveWeekDayText: {
    opacity: 0.5,
    color: '#A3A3A3',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    position: 'relative',
  },
  calendarDayText: {
    fontSize: 16,
    fontFamily: 'BeVietnamRegular',
    color: '#000',
    textAlign: 'center',
    zIndex: 1,
  },
  activeDay: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFC629',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -18 },
      { translateY: -18 }
    ],
  },
  activeDayText: {
    color: '#FFF',
    fontFamily: 'BeVietnamMedium',
    zIndex: 1,
  },
  disabledDay: {
    opacity: 0.3,
  },
  disabledDayText: {
    color: '#999',
  },
  invisibleDay: {
    opacity: 0,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingTop: 20,
  },
  gradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0, 
  },
  mainContent: {
    flex: 1,
    paddingBottom: 10,
  },
});