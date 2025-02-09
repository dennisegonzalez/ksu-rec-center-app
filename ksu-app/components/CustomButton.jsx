import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ onPress, title, IconLeft, IconRight, className }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full p-3 flex-flex`}
    ></TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
