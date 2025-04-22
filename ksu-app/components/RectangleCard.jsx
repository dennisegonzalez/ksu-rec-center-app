import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const RectangleCard = ({ title, price, sourceRectangle }) => {
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
      <Image source={sourceRectangle} style={styles.box} />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 14 }}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFC629", fontWeight: "semibold" }}>$</Text>
          <Text style={{ color: "black", fontWeight: "semibold" }}> {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default RectangleCard;
const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 120,
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    margin: 10,
  },
});
