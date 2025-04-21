/*
  Who is working on it: Soledad & Michelle
*/

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import NavBar from "../../components/NavBar";
import { AntDesign, Feather, Octicons } from "@expo/vector-icons";
import CalendarCard from "../../components/CalendarCard";
import { router } from "expo-router";
const Calendar = () => {
  const calendarCards = [
    {
      title: "Yoga Class",
      time: "10:00 AM - 11:00 AM",
      duration: "1 hour",
      location: "Room 101",
    },
    {
      title: "Zumba Class",
      time: "11:30 AM - 12:30 PM",
      duration: "1 hour",
      location: "Room 102",
    },
    {
      title: "Pilates Class",
      time: "1:00 PM - 2:00 PM",
      duration: "1 hour",
      location: "Room 103",
    },
    {
      title: "Spin Class",
      time: "2:30 PM - 3:30 PM",
      duration: "1 hour",
      location: "Room 104",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <NavBar
        title="Calendar"
        leftIconComponent={AntDesign}
        leftIcon="left"
        leftRouteOrAction={() => router.back()}
        rightIconComponent={Octicons}
        rightIcon={"bell-fill"}
        rightRouteOrAction={() => router.push("/notifications")}
      />
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: "row",
              width: "88%",
              height: 50,
              borderRadius: 8,
              alignSelf: "center",
              marginTop: 20,
              backgroundColor: "#FFFFFF",
            }}
          >
            <View>
              <Feather
                name="search"
                size={22}
                color="black"
                style={{ marginLeft: 10, marginTop: 13 }}
              />
            </View>
            <TextInput
              placeholder="Search events"
              style={{
                paddingLeft: 10,
                fontSize: 18,
                fontFamily: "BeVietnam",
                color: "rgb(153,153,153)",
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          {calendarCards.map((card, index) => (
            <CalendarCard key={index} {...card} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
