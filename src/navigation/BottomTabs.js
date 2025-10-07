import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

// Import de tes écrans
import DashboardScreen from "../screens/DashboardScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#2b7a78",     // couleur active
        inactiveTintColor: "#7a7a7a",   // couleur inactive
        labelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        style: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 5,
        },
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
         tabBarActiveTintColor: "#2b7a78",
        tabBarInactiveTintColor: "#7a7a7a",
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = "home";
          if (route.name === "Accueil") iconName = "home";
          else if (route.name === "Messages") iconName = "chat-bubble-outline";
          else if (route.name === "Profil") iconName = "person-outline";
          else if (route.name === "Paramètres") iconName = "settings";
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={DashboardScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
