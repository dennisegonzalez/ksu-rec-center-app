import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const NavBar = ({
  leftIconComponent: LeftIcon,
  leftIcon,
  leftRouteOrAction,
  rightIconComponent: RightIcon,
  rightIcon,
  rightRouteOrAction,
  title,
}) => {
  const handlePress = (routeOrAction) => {
    if (typeof routeOrAction === "string") {
      router.push(routeOrAction);
    } else if (typeof routeOrAction === "function") {
      routeOrAction();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress(leftRouteOrAction)}>
        {LeftIcon && <LeftIcon name={leftIcon} size={24} color="black" />}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={() => handlePress(rightRouteOrAction)}>
        {RightIcon && <RightIcon name={rightIcon} size={24} color="black" />}
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "BeVietnam",
  },
});
