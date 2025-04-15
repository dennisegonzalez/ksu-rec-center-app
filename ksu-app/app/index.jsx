import { Redirect } from "expo-router";

const signedIn = false;
export default function Index() {
  if (signedIn) {
    return;
  } else {
    return <Redirect href="/screens/events" />;
  }
}
