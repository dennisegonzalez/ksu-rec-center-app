import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const ShoppingCard = ({ title, subtitle, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "77%",
          }}
        >
          <Text style={{ fontFamily: "BeVietnam" }}>{title}</Text>
          <TouchableOpacity onPress={() => console.log("Delete item")}>
            <Feather name="trash" size={22} color="#CCC5C2" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: "BeVietnam", color: "#98918F" }}>
          {subtitle}
        </Text>
        <View style={{ width: "70%" }}>
          <Text
            style={{
              fontFamily: "BeVietnam",
              color: "#868686",
              textAlign: "right",
              fontSize: 20,
            }}
          >
            $<Text>{price}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCard;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
    alignContent: "center",
    marginLeft: 7,
    marginRight: 5,
    marginBottom: 20,
  },
  box: {
    width: 110,
    height: 90,
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    margin: 10,
  },
});
