import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 5, // for Android shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          height: 80,
          paddingBottom: 5,
          paddingTop: 20,
        },
      }}
    >
      <Tabs.Screen
        name="today"
        options={{
          title: "Today",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="calendar-today"
                size={size}
                color={color}
              />
              <Text style={{ fontSize: 12, color }}>{"Today"}</Text>
              {focused && (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: "#007AFF", // or any highlight color
                    borderRadius: 2,
                    marginTop: 1,
                  }}
                />
              )}
            </View>
          ),
          tabBarLabel: () => null, // hide default label since we added custom one above
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center" }}>
              <FontAwesome5 name="map-marker-alt" size={size} color={color} />
              <Text style={{ fontSize: 12, color }}>{"Map"}</Text>
              {focused && (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: "#007AFF", // or any highlight color
                    borderRadius: 2,
                    marginTop: 1,
                  }}
                />
              )}
            </View>
          ),
          tabBarLabel: () => null, // hide default label since we added custom one above
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Services",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center" }}>
              <AntDesign name="bars" size={size} color={color} />
              <Text style={{ fontSize: 12, color }}>{"Services"}</Text>
              {focused && (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: "#007AFF", // or any highlight color
                    borderRadius: 2,
                    marginTop: 1,
                  }}
                />
              )}
            </View>
          ),
          tabBarLabel: () => null, // hide default label since we added custom one above
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center" }}>
              <FontAwesome6 name="user" size={size} color={color} />
              <Text style={{ fontSize: 12, color }}>{"Profile"}</Text>
              {focused && (
                <View
                  style={{
                    width: 40,
                    height: 3,
                    backgroundColor: "#007AFF", // or any highlight color
                    borderRadius: 2,
                    marginTop: 1,
                  }}
                />
              )}
            </View>
          ),
          tabBarLabel: () => null, // hide default label since we added custom one above
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
