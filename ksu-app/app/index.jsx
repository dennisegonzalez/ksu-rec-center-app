import { Redirect } from "expo-router";

const signedIn = true;
export default function Index() {
  if (signedIn) {
    return <Redirect href="/screens/today" />;
  } else {
    return <Redirect href="/screens/(auth)/sign-in" />;
  }
}
