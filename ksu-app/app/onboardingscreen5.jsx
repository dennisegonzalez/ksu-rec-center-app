import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const OnboardingScreen5 = () => {
  return (
    <View style={styles.container}>
      
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.pageNumber}>05/05</Text>
        <Text style={styles.header}>Personalize Your Rec Journey</Text>
        <Text style={styles.subheader}>
          Create a profile, track your bookings, and set your fitness goals.
        </Text>
      </View>

      {/* Image Section */}
      <View style={styles.middleSection}>
        <Image
          source={require("../assets/images/ksuprofilepic.png")} // Replace with your settings/profile icon
          style={styles.logo}
        />
      </View>

      {/* Single Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => router.replace("/today")}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
};

export default OnboardingScreen5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7b41e",
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  topSection: {
    marginBottom: 30,
  },
  pageNumber: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "BeVietnam-Bold",
  },
  header: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#111",
    textAlign: "left",
    marginBottom: 8,
    fontFamily: "BeVietnam-ExtraBold",
  },
  subheader: {
    fontSize: 15,
    color: "#333",
    textAlign: "left",
    paddingRight: 30,
    fontFamily: "BeVietnam-Regular",
  },
  middleSection: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: width * 1,
    height: width * 1,
    resizeMode: "contain",
  },
  getStartedButton: {
    backgroundColor: "#000",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  getStartedText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
