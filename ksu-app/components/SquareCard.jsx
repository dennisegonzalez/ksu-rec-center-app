import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const SquareCard = ({ eventName, quantity, sourceSquare }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 15,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,

      }}
    >
      <Image source={sourceSquare} style={styles.box} />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 14, textAlign: "left" }}>{eventName}</Text>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <Text style={{ color: "black", fontWeight: "semibold" }}>
            {quantity}
          </Text>
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
    width: 149,
    height: 140,
    backgroundColor: "#C4C4C4",
    borderRadius: 15,
    margin: 10,
  },
});
