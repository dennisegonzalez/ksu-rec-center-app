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
} from "react-native";
import React, { useState } from "react";

const Today = () => {
  const [selectedLocation, setSelectedLocation] = useState('Kennesaw');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Today</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

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
          <View style={styles.activityBox}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityTitle}>Current Activity</Text>
              <View style={styles.activityCountContainer}>
                <Text style={styles.activityCount}>130</Text>
                <Text style={styles.activityLabel}>students</Text>
              </View>
            </View>
            <View style={styles.activityGraph} />
          </View>
        </View>
        
        {/* Add padding at bottom to account for fixed navigation */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavItem]}>📅</Text>
          <Text style={[styles.navText, styles.activeNavItem]}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📍</Text>
          <Text style={styles.navText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>≡</Text>
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
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
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'BeVietnamSemiBold',
  },
  menuIcon: {
    fontSize: 24,
  },
  notificationIcon: {
    fontSize: 24,
  },
  greeting: {
    fontSize: 28,
    fontFamily: 'BeVietnamBold',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    color: '#414348',
  },
  eventsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    fontFamily: 'BeVietnamSemiBold',
  },
  eventCard: {
    height: 200,
    backgroundColor: '#FFBF00',
    borderRadius: 15,
    marginBottom: 20,
  },
  locationTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  locationTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
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
    paddingVertical: 10,
  },
  activityBox: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
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
    marginBottom: 20,
  },
  activityTitle: {
    fontSize: 20,
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
    height: 120,
    backgroundColor: '#ffffff00',
    borderRadius: 15,
  },
  bottomPadding: {
    height: 80,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
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
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'BeVietnamMedium',
  },
  activeNavItem: {
    color: '#FFBF00',
  },
});