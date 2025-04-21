/*
  Who is working on it: Dustin & ??
*/

import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import NavBar from "../../components/NavBar";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import SquareCard from "../../components/SquareCard";
import RectangleCard from "../../components/RectangleCard";
const Calendar = () => {
  const data = [
    {
      id: 1,
      eventName: "Yoga Class",
      quantity: 2,
      title: "Yoga Class",
      price: 20,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 19,
    },
    {
      id: 20,
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "#FAFAFA", flex: 1 }}>
      <NavBar
        leftIconComponent={Ionicons}
        leftIcon="menu"
        leftRouteOrAction={() => router.back()}
        rightIconComponent={FontAwesome6}
        rightIcon="cart-shopping"
        rightRouteOrAction={() => router.push("./cart")}
        title="Services"
      />
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push("../service-category")}>
            <SquareCard eventName={item.eventName} quantity={item.quantity} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={{ fontSize: 22, fontWeight: "bold", margin: 10 }}>
        Saved/For You
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RectangleCard title={item.title} price={item.price} />
        )}
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "black", fontSize: 15 }}>
          Subscribe to Newsletter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.smbutton}>
        <Text style={{ color: "black", fontSize: 15 }}>
          Activity Registration
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFC629",
    padding: 15,
    borderRadius: 40,
    marginBottom: 20,
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
  },
  smbutton: {
    backgroundColor: "#FFC629",
    padding: 15,
    borderRadius: 40,
    marginBottom: 20,
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
});
