import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const CalendarCard = ({ title, time, duration, location }) => {
  const squares = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView
      style={{
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        width: "90%",

        alignSelf: "center",
      }}
    >

      <View style = {{paddingHorizontal: 15, paddingVertical: 10}}>
        <Text style={{ fontSize: 20, fontFamily: "BeVietnamMedium" }}>
        {title}
      </Text>
      <Text
        style={{
          color: "#DBA31D",
          fontFamily: "BeVietnam",
          textAlign: "right",
          paddingRight: 10,
          paddingTop: 10,
          fontSize: 16,
        }}
      >
        {time}
      </Text>

      <View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            alignItems: "center",
          }}
        >
          <Feather
            name="clock"
            size={15}
            color="#FF5C00"
            style={{ paddingRight: 5 }}
          />
          <Text
            style={{
              fontFamily: "BeVietnam",
              fontSize: 16,
            }}
          >
            {duration}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 5,
          }}
        >
          <SimpleLineIcons
            name="location-pin"
            size={15}
            color="#35B8E1"
            style={{ paddingRight: 5 }}
          />
          <Text
            style={{
              fontFamily: "BeVietnam",
              fontSize: 16,
            }}
          >
            {location}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#333333",
        }}
      />
      <View style={{ flexDirection: "row", paddingTop: 20 }}>
        {squares.map(() => {
          return (
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: "#C4C4C4",
                borderRadius: 6,
                margin: 3,
              }}
            ></View>
          );
        })}
      </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarCard;

const styles = StyleSheet.create({});
