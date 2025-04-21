import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ShoppingCard = ({ title, subtitle, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => console.log("Delete item")}>
            <Feather name="trash" size={22} color="#CCC5C2" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>{subtitle}</Text>

        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

export default ShoppingCard;

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
  box: {
    width: width * 0.25,
    height: width * 0.25 * 0.8, // keep consistent ratio
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "BeVietnam",
    fontSize: 16,
    flexShrink: 1, // prevent long titles from pushing icon
  },
  subtitle: {
    fontFamily: "BeVietnam",
    color: "#98918F",
    fontSize: 14,
    marginTop: 4,
  },
  price: {
    fontFamily: "BeVietnam",
    color: "#868686",
    fontSize: 18,
    textAlign: "right",
    marginTop: 8,
  },
});
