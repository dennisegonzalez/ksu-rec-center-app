import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
} from "react-native";
import React from "react";
import { Pressable } from "react-native";
import InputField from "../../../components/InputField";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Redirect } from "expo-router";
import { router } from "expo-router";
const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Dismiss Keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // Offset to avoid elements being pushed
          className="flex-1"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex-1 items-start justify-center px-10 relative">
              {/* Top Right Image */}
              <Image
                source={require("../../../assets/images/dumbell.png")}
                className="absolute top-0 right-0 h-[180px] w-[180px]"
              />

              <View className="px-4 py-3">
                <Text
                  className="text-5xl pb-2"
                  style={{ fontFamily: "BeVietnamBold" }}
                >
                  Login
                </Text>
                <Text
                  className="text-xl text-gray-400 pb-5"
                  style={{ fontFamily: "BeVietnam" }}
                >
                  Please sign in to continue.
                </Text>
              </View>

              {/* Input Fields */}
              <InputField style="mb-5" placeholder="Email" icon={"mail"} />
              <InputField style="mb-7" placeholder="Password" icon={"lock"} />

              {/* Login Button */}
              <Pressable
                className="bg-[rgba(255,198,41,0.75)] px-4 w-[95%] py-3 rounded-xl"
                onPress={() => {
                  router.push("/screens/today");
                  console.log("Login Button Pressed");
                }}
              >
                <Text
                  className="text-center text-white"
                  style={{ fontFamily: "BeVietnam" }}
                >
                  Student / Staff Login
                </Text>
              </Pressable>
              <Image
                source={require("../../../assets/images/dumbell.png")}
                className="absolute -bottom-20 left-[-10%] h-[150px] w-[150px] z-[-1]"
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      {/* Bottom Left Image */}
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
