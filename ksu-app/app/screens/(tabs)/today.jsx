/*
  Who is working on it: Hernan & Coki
*/
import ActivityGraph from "../ActivityGraph";
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
import { LinearGradient } from 'expo-linear-gradient';
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
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Today</Text>
        <Link href="/screens/notifications" asChild>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="#000" />
          </TouchableOpacity>
        </Link>
      </View>

      <ScrollView 
        style={styles.scrollContent}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Greeting */}
          <Text style={styles.greeting}>Good Morning, {firstName || 'SHPE'} 👋</Text>

          {/* Events Section */}
          <View style={styles.eventsSection}>
            <Text style={styles.sectionTitle}>Events For You</Text>
            <Image 
              source={require('../../../assets/images/EventsToday.png')}
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
              <Text style={styles.placeholderText}>*Insert Calendar*</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      {/*<View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={require('../../assets/images/Today.png')} 
            style={styles.navIcon} 
          />
          <Text style={styles.navText}>Today</Text>
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={require('../../assets/images/Map.png')} 
            style={styles.navIcon} 
          />
          <Text style={styles.navText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={require('../../assets/images/Services.png')} 
            style={styles.navIcon} 
          />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={require('../../assets/images/Profile.png')} 
            style={styles.navIcon} 
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>*/}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  navIcon: {
    width: 22,
    height: 22,
    marginBottom: 5,
    tintColor: '#000000',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#9E9E9E',
    marginBottom: 3,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -5,
    width: 45,
    height: 3,
    backgroundColor: '#999999',
    borderRadius: 1.5,
  },
  calendarSection: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  calendarBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#666666',
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
    paddingBottom: 20,
  },
});