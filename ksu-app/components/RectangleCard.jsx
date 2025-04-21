import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RectangleCard = ({ title, price }) => {
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
        <Text style={{ fontSize: 14 }}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 5,
            paddingBottom: 5,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#FFC629",
              fontWeight: "semibold",
            }}
          >
            $
          </Text>
          <Text style={{ color: "black", fontWeight: "semibold" }}>
            {" "}
            {price}
          </Text>
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
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    margin: 10,
  },
});
