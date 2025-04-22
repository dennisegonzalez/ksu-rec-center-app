/*
  Who is working on it: Dustin & ??
*/

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
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
import { Image } from "react-native";

const Calendar = () => {
  const data = [
    {
      id: 1,
      eventName: "OwlFit",
      quantity: 2,
      title: "Virtual Pilates",
      price: "Free",
      sourceSquare: require("../../assets/images/owlfit.png"),
      sourceRectangle: require("../../assets/images/pilates.png"),
    },
    {
      id: 2,
      eventName: "Aquatics",
      quantity: 6,
      title: "Restorative Yoga",
      price: "Free",
      sourceSquare: require("../../assets/images/aquatics.png"),
      sourceRectangle: require("../../assets/images/yoga.png"),
    },
    {
      id: 3,
      eventName: "Outdoor Recreation",
      quantity: 1,
      title: "Zumba",
      price: "Free",
      sourceSquare: require("../../assets/images/outdoors.png"),
      sourceRectangle: require("../../assets/images/zumba.png"),
    },

  ];
  return (
    <SafeAreaView style={{ backgroundColor: "#FAFAFA", flex: 1 }}>
      <NavBar 
        title="Events" 
        rightIconComponent={FontAwesome6}
        rightIcon="cart-shopping"
        rightRouteOrAction="/cart"
      />
      <ScrollView>
      <Text style={{ fontSize: 25, fontWeight: "bold", margin: 10, marginTop: 20, marginLeft: 25 }}>
        KSU Services
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => router.push("../service-category")}>
              <SquareCard eventName={item.eventName} quantity={item.quantity} sourceSquare={item.sourceSquare} />
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20, marginLeft: 25 }}>
        Saved/For You
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RectangleCard title={item.title} price={item.price} sourceRectangle={item.sourceRectangle} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "black", fontSize: 15 }}>
          Subscribe to Newsletter
        </Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
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
