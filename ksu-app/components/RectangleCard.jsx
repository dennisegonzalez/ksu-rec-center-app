import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RectangleCard = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 30,
        marginLeft: 8,
        marginRight: 0,
        paddingBottom: 30,
        paddingTop: 25,
      }}
    >
      <View style={styles.box}></View>
      <View style={{ paddingRight: 50 }}>
        <Text style={{ fontSize: 14 }}>Special Events</Text>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <Text
            style={{
              color: "#FFC629",
              fontWeight: "semibold",
            }}
          >
            $
          </Text>
          <Text style={{ color: "black", fontWeight: "semibold" }}> 30</Text>
        </View>
      </View>
    </View>
  );
};

export default RectangleCard;
const styles = StyleSheet.create({
  box: {
    width: 140,
    height: 90,
    backgroundColor: "grey",
    borderRadius: 20,
    margin: 10,
  },
});
