import { TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const InputField = ({ style, placeholder, icon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3, // Android shadow
        backgroundColor: "white", // Required for elevation to work
        borderRadius: 0, // Ensures rounded corners match
      }}
      className={`w-[95%] h-12 rounded-lg px-4 mb-4 ${style}`}
    >
      <Feather name={icon} size={24} color="black" />
      <TextInput placeholder={placeholder} placeholderTextColor="#C4C4C4" style = {{paddingLeft: 10, width: "90%"}} />
    </View>
  );
};

export default InputField;
