import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
    tabBarActiveTintColor: "#ffd33d",
    tabBarInactiveTintColor: "#ffffff",
      headerTitleAlign: "center",

    headerStyle: {
    backgroundColor: "#15192e",
   
    },
    headerShadowVisible: false, 
    headerTintColor: "#fff",
    tabBarStyle: {
    backgroundColor: "#080808",
    
    }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Primera App Movil",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
