import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
import React from "react";

const ExerciseCard = ({
  Cardtitle,
  descriptionTitle,
  description,
  videolink, // this should be a YouTube URL like "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}) => {
  // Extract video ID and get the thumbnail
  const getYouTubeThumbnail = (link) => {
    const videoIdMatch = link.match(
      /(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (!videoIdMatch) return null;
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg`;
  };

  const handlePress = () => {
    Linking.openURL(videolink);
  };

  const thumbnailUrl = getYouTubeThumbnail(videolink);

  return (
    <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>
      <View style={{ paddingTop: 20 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600", // semi-bold
            width: "100%",
            textAlign: "center",
            paddingBottom: 50,
            paddingTop: 20,
          }}
        >
          {Cardtitle}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 200,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 60,
        }}
      >
        <Pressable
          onPress={handlePress}
          style={{
            width: "auto",
            height: 200,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 60,
          }}
        >
          <Image
            source={require("../assets/images/ksu_splash.png")}
            style={{
              width: 200,
              height: "100%",
              borderRadius: 10,
              borderColor: "black",
              borderWidth: 1,
              shadowColor: "#000",
            }}
          />
        </Pressable>
      </View>
      <View style={{ paddingLeft: 10, width: "95%", paddingBottom: 20 }}>
        <Text style={{ color: "black", paddingBottom: 10, fontSize: 20 }}>
          {descriptionTitle}:
        </Text>
        <Text style={{ color: "black", fontSize: 15, paddingLeft: 10 }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({});
