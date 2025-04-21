/*
  Who is working on it: ?? & ??
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
import React from "react";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const NotificationItem = ({ title, message }) => (
  <View style={styles.notificationItem}>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationMessage}>{message}</Text>
    </View>
  </View>
);

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: '🏋️ Time to hit the gym, Owls!',
      message: 'Your reserved workout slot at the KSU Gym starts in 30 minutes. Check in on time to secure your spot!'
    },
    {
      id: 2,
      title: '🚴 New Group Classes Available!',
      message: 'Spin, yoga, HIIT, and more—register now before spots fill up! View the schedule in the app.'
    },
    {
      id: 3,
      title: '💪 Keep up the momentum!',
      message: "You've completed 3 workouts this week! Set a new goal and keep pushing toward your fitness success."
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={28} color="#414348" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView style={styles.notificationsList}>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            title={notification.title}
            message={notification.message}
          />
        ))}
      </ScrollView>

      {/* Add padding at bottom to account for fixed navigation */}
      <View style={styles.bottomPadding} />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#414348',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  notificationsList: {
    flex: 1,
    padding: 20,
  },
  notificationItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#262626',
    flex: 1,
    marginBottom: 10,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '300',
    lineHeight: 18,
  },
  bottomPadding: {
    height: 80,
  },
});