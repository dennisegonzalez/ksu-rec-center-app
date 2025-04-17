/*
  Who is working on it: Dante & ??
*/

import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Owl Profile</Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/dumbell.png")} // Corrected path for bell icon
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={require("../../assets/images/dumbell.png")} // Ensure this path is correct
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>John Doe</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/dumbell.png")} // Corrected path for edit icon
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Streaks */}
      <View style={styles.streaks}>
        <View style={styles.streakItem}>
          <Text style={styles.streakValue}>0</Text>
          <Text style={styles.streakLabel}>Current Streak</Text>
        </View>
        <View style={styles.streakItem}>
          <Text style={styles.streakValue}>0</Text>
          <Text style={styles.streakLabel}>Best Streak</Text>
        </View>
      </View>

      {/* Weekly Log */}
      <View style={styles.weeklyLog}>
        {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayCircle,
              index === 3 || index === 4 ? styles.activeDay : null, // Highlight active days
            ]}
          >
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>My Appointment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>PLACEHOLDER</Text>
        </TouchableOpacity>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionText}>Dark Mode</Text>
          <Switch />
        </View>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={[styles.sectionText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>PLACEHOLDER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>PLACEHOLDER</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Report Equipment Issue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  streaks: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  streakItem: {
    alignItems: "center",
  },
  streakValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  streakLabel: {
    fontSize: 14,
    color: "#888",
  },
  weeklyLog: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  dayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  activeDay: {
    backgroundColor: "#FFC629",
  },
  dayText: {
    fontSize: 12,
    color: "#FFF",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  sectionText: {
    fontSize: 14,
  },
  logoutText: {
    color: "red",
  },
});
