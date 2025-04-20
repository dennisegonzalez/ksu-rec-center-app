import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../../../components/NavBar";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ShoppingCard from "../../../components/ShoppingCard";

const Cart = () => {
  const numberOfItems = 3; // Replace with actual number of items in the cart
  const cartItems = [
    {
      id: 1,
      title: "Yoga Class",
      subtitle: "Yoga Class",
      price: 20,
    },
    {
      id: 2,
      title: "Yoga Class",
      subtitle: "Yoga Class",
      price: 20,
    },
    {
      id: 3,
      title: "Yoga Class",
      subtitle: "Yoga Class",
      price: 20,
    },
  ];
  const paidEvents = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Replace with actual paid events data
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <NavBar
        title="Your Cart"
        leftIconComponent={AntDesign}
        leftIcon={"left"}
        leftRouteOrAction={() => router.back()}
        rightIcon={"bell-fill"}
        rightIconComponent={Octicons}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Free Events</Text>
          <Text style={styles.subtext}>{numberOfItems} items</Text>
        </View>

        <View>
          {cartItems.map((item) => (
            <ShoppingCard
              key={item}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
            />
          ))}
        </View>

        <View style={{ paddingLeft: 20, paddingTop: 20 }}>
          <Text style={styles.headerTitle}>Paid Events</Text>
          <Text style={styles.subtext}>{paidEvents.length} items</Text>
        </View>
        <View>
          {paidEvents.map((item) => (
            <ShoppingCard key={item} />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: "75%",
          backgroundColor: "#FFC629",
          alignSelf: "center",
          height: 50,
          borderRadius: 25,
          position: "absolute",
          bottom: 30,
          justifyContent: "center",
        }}
      >
        <Text
          style={{ textAlign: "center", fontFamily: "BeVietnam", fontSize: 16 }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  headerTitle: {
    fontFamily: "BeVietnam",
    color: "#46413F",
    fontSize: 20,
  },
  subtext: {
    fontFamily: "BeVietnam",
    color: "#98918F",
    fontSize: 14,
  },
  registerButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },

  registerButton: {
    backgroundColor: "Red",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Android shadow
    width: "100%",
  },

  registerButtonText: {
    color: "#fff",
    fontFamily: "BeVietnam",
    fontSize: 16,
  },
});
