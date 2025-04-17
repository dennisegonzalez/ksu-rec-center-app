import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    BeVietnam: require("../assets/fonts/BeVietnam-Regular.ttf"),
    BeVietnamBold: require("../assets/fonts/BeVietnam-Bold.ttf"),

    BeVietnamLight: require("../assets/fonts/BeVietnam-Light.ttf"),

    BeVietnamMedium: require("../assets/fonts/BeVietnam-Medium.ttf"),

    BeVietnamSemiBold: require("../assets/fonts/BeVietnam-SemiBold.ttf"),

    BeVietnamExtraBold: require("../assets/fonts/BeVietnam-ExtraBold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
