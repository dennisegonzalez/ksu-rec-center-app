import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const OnboardingScreen3 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.pageNumber}>03/05</Text>
        <Text style={styles.header}>Interactive Rec Center Map</Text>
        <Text style={styles.subheader}>
          Find your way to any room, facility, or amenity—fast and hassle-free.
        </Text>
      </View>

      {/* Image Section */}
      <View style={styles.middleSection}>
        <Image
          source={require("../assets/images/mapiconimproved.png")} // replace with actual map icon
          style={styles.logo}
        />
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.button, styles.skipButton]}
          onPress={() => router.replace("/today")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={() => router.push("onboardingscreen4")}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default OnboardingScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffbc2c",
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
    width: width * 1.2,
    height: width * 1.2,
    resizeMode: "contain",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 60,
  },
  button: {
    width: "48%",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  skipButton: {
    backgroundColor: "#FFF",
  },
  nextButton: {
    backgroundColor: "#000",
  },
  skipText: {
    color: "#888",
    fontWeight: "bold",
    fontSize: 16,
  },
  nextText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
