/*
  Who is working on it: Hernan & Coki
*/

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

const Today = () => {
  const [selectedLocation, setSelectedLocation] = useState('Kennesaw');

  const renderActivityBox = () => (
    <View style={styles.activityBox}>
      <View style={styles.activityHeader}>
        <Text style={styles.activityTitle}>Current Activity</Text>
        <View style={styles.activityCountContainer}>
          <Text style={styles.activityCount}>
            {selectedLocation === 'Kennesaw' ? '130' : '85'}
          </Text>
          <Text style={styles.activityLabel}>students</Text>
        </View>
      </View>
      <View style={styles.activityGraph} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Today</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollContent}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {/* Greeting */}
        <Text style={styles.greeting}>Good Morning, Dennise 👋</Text>

        {/* Events Section */}
        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>Events For You</Text>
          <View style={styles.eventCard} />
        </View>

        {/* Location Tabs */}
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
        
        {/* Add padding at bottom to account for fixed navigation */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNav}>
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
      </View>
    </SafeAreaView>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'BeVietnamSemiBold',
    color: '#414348',
  },
  menuIcon: {
    fontSize: 24,
  },
  notificationIcon: {
    fontSize: 24,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'BeVietnamBold',
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 15,
    color: '#414348',
    marginLeft: 10,
  },
  eventsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'BeVietnamSemiBold',
    marginLeft: 15,
  },
  eventCard: {
    height: 160,
    backgroundColor: '#FFBF00',
    borderRadius: 15,
    marginBottom: 15,
  },
  locationTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 15,
  },
  locationTab: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  activeLocationTab: {
    backgroundColor: '#FFBF00',
  },
  locationText: {
    color: '#4C4C4C',
    fontFamily: 'BeVietnamMedium',
    fontSize: 16,
  },
  activitySection: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  activityBox: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
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
    fontFamily: 'BeVietnamSemiBold',
    color: '#666666',
    marginBottom: 5,
  },
  activityCountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  activityCount: {
    fontSize: 32,
    fontFamily: 'BeVietnamBold',
    color: '#414348',
    marginRight: 5,
  },
  activityLabel: {
    fontSize: 16,
    color: '#999999',
    fontFamily: 'BeVietnam',
  },
  activityGraph: {
    height: 100,
    backgroundColor: '#ffffff00',
    borderRadius: 15,
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
    tintColor: '#666666',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'BeVietnamMedium',
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
    fontFamily: 'BeVietnam',
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingTop: 60, // Accounts for header height
  },
});