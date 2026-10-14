import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#001F3F",
        tabBarInactiveTintColor: "#5A6E82",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#001F3F",
        },
        headerShadowVisible: false,
        headerTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#B5BBC8",
        },
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
