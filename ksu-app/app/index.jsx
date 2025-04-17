import { Redirect } from "expo-router";

const signedIn = false;
export default function Index() {
  if (signedIn) {
    return <Redirect href="/screens/today" />;
  } else {
    return <Redirect href="/screens/(auth)/sign-in" />;
  }
}
