import { Stack } from "expo-router";
import { LogBox } from "react-native";
import {StatusBar} from "expo-status-bar"
LogBox.ignoreAllLogs(true);
export default function RootLayout() {
  return (
    <>
  <Stack>
<StatusBar style="light"/>
<Stack.Screen name="(tabs)" options={{headerShown:false,headerLeft:()=><></>}} />
<Stack.Screen name="+not-found" options={{}}/>
  </Stack>
</>
  );
}
