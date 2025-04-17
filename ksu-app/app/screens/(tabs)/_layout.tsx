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
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="today"
        options={{
          title: "Today",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabItem}>
              <MaterialCommunityIcons
                name="calendar-today"
                size={size}
                color={color}
              />
              <Text style={styles.tabText}>Today</Text>
              {focused && <View style={styles.indicator} />}
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
            <View style={styles.tabItem}>
              <FontAwesome5 name="map-marker-alt" size={size} color={color} />
              <Text style={styles.tabText}>Map</Text>
              {focused && <View style={styles.indicator} />}
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
            <View style={styles.tabItem}>
              <AntDesign name="bars" size={size} color={color} />
              <Text style={styles.tabText}>Services</Text>
              {focused && <View style={styles.indicator} />}
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
            <View style={styles.tabItem}>
              <FontAwesome6 name="user" size={size} color={color} />
              <Text style={styles.tabText}>Profile</Text>
              {focused && <View style={styles.indicator} />}
            </View>
          ),
          tabBarLabel: () => null, // hide default label since we added custom one above
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    width: "100%",
  },
  indicator: {
    width: 50,
    height: 2,
    backgroundColor: "grey",
    borderRadius: 2,
    marginTop: 3,
  },
});

export default TabsLayout;
