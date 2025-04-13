import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

// Screens
import HomeScreen from "./home";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: "home" | "user" = "home";
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return (
            <AntDesign name={iconName} size={size} className="text-success" />
          );
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 10 },
        tabBarStyle: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
