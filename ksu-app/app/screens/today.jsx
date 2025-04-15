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
import React from "react";

const Today = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <TouchableOpacity style={styles.activeLocationTab}>
            <Text style={styles.activeLocationText}>Kennesaw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.locationTab}>
            <Text style={styles.locationText}>Marietta</Text>
          </TouchableOpacity>
        </View>

        {/* Current Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Current Activity</Text>
          <Text style={styles.activityCount}>130 <Text style={styles.activityLabel}>students</Text></Text>
          <View style={styles.activityGraph} />
        </View>

        {/* Bottom Navigation */}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  },
  menuIcon: {
    fontSize: 24,
  },
  notificationIcon: {
    fontSize: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  eventsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
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
  activeLocationTab: {
    backgroundColor: '#FFBF00',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  locationTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  activeLocationText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  locationText: {
    color: '#000000',
  },
  activitySection: {
    paddingHorizontal: 20,
  },
  activityCount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityLabel: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#666666',
  },
  activityGraph: {
    height: 180,
    backgroundColor: '#FFBF00',
    borderRadius: 15,
    marginVertical: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    backgroundColor: '#ffffff',
    marginTop: 20,
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
  },
  activeNavItem: {
    color: '#FFBF00',
  },
});