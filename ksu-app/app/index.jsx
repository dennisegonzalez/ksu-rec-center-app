import { Redirect } from "expo-router";

const signedIn = false;
export default function Index() {
  if (signedIn) {
    return <Redirect href="/today" />;
  } else {
    return <Redirect href="/(auth)/sign-in" />;
  }
}
