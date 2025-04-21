import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const sampleData = [
  {
    title: "Special Events",
    available: "6 Available",
  },
  {
    title: "OwlFit",
    available: "2 Available",
  },
  {
    title: "5k Fun Run",
    available: "1 Available",
  },
];

const savedData = [
  {
    title: "Fitness Found.",
    price: "$30",
  },
  {
    title: "Virtual Guts & B.",
    price: "$30",
  },
];

const EventCard = ({ title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.imagePlaceholder} />
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </TouchableOpacity>
);

const Events = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Services</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {sampleData.map((item, index) => (
            <EventCard
              key={index}
              title={item.title}
              subtitle={item.available}
              onPress={() => router.push("/event-details")}
            />
          ))}
        </ScrollView>

        <Text style={styles.subHeader}>Saved / For You</Text>
        <View style={styles.cardRow}>
          {savedData.map((item, index) => (
            <EventCard
              key={index}
              title={item.title}
              subtitle={item.price}
              onPress={() => {}}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subscribe to Newsletter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Activity Registration</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.barButton}
          onPress={() => router.push("/today")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/24" }} // Replace with image path
            style={styles.barButtonImage}
          />
          <Text style={styles.barButtonText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barButton}
          onPress={() => router.push("/map")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/24" }} // Replace with image path
            style={styles.barButtonImage}
          />
          <Text style={styles.barButtonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barButton}
          onPress={() => router.push("/services")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/24" }} // Replace with image path
            style={styles.barButtonImage}
          />
          <Text style={styles.barButtonText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barButton}
          onPress={() => router.push("/profile")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/24" }} // Replace with image path
            style={styles.barButtonImage}
          />
          <Text style={styles.barButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 28,
    fontWeight: "600",
    margin: -2,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 22,
    fontWeight: "600",
    marginHorizontal: 16,
    marginTop: 30,
  },
  horizontalScroll: {
    paddingHorizontal: 8,
    marginTop: 30,
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 10,
    margin: 8,
    width: 150,
    alignItems: "center",
    elevation: 2,
  },
  imagePlaceholder: {
    width: 100,
    height: 80,
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f4b400",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 24,
    marginVertical: 4,
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 110,
    backgroundColor: "#fff",
    borderTopWidth: 0.25,
    borderTopColor: "#000",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  barButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  barButtonImage: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  barButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
});
