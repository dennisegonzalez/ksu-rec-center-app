import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SquareCard = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 45,
        paddingTop: 35,
        height: "auto",
      }}
    >
      <View style={styles.box}></View>
      <View style={{ paddingRight: 15 }}>
        <Text style={{ fontSize: 14 }}>Special Events</Text>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <Text style={{ color: "black", fontWeight: "semibold" }}>6</Text>
          <Text style={{ color: "#FFC629", fontWeight: "semibold" }}>
            {" "}
            Available
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SquareCard;

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: "grey",
    borderRadius: 15,
    margin: 10,
  },
});
