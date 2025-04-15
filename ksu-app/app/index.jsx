import { Redirect } from "expo-router";

const signedIn = false;
export default function Index() {
  if (signedIn) {
    return;
  } else {
    return <Redirect href="/screens/calendar" />; // change based on what app you want displayed on the app
  }
}
