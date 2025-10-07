// App.js
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import BottomTabs from "./src/navigation/BottomTabs"; // ✅ Import ici
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import RequestScreen from "./src/screens/RequestScreen";
import MyRequestsScreen from "./src/screens/MyRequestsScreen";
import AppointmentScreen from "./src/screens/AppointmentScreen";
import MessageScreen from "./src/screens/MessageScreen";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

const Stack = createStackNavigator();

function Footer() {
  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-5190092512253381/2550651806";

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Version 1.0.0 - CodeNova ©2025</Text>
    {/*   <View style={styles.bannerContainer}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View> */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2b7a78" />
        <View style={styles.content}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#2b7a78" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Welcome"
              component={HomeScreen}
              options={{ title: "Bienvenue" }}
            />
            {/* ✅ On remplace DashboardScreen par BottomTabs */}
            <Stack.Screen
              name="Dashboard"
              component={BottomTabs}
              options={{ title: "Tableau de bord" }}
            />
            <Stack.Screen
              name="Sign in"
              component={LoginScreen}
              options={{ title: "Authentification" }}
            />
            <Stack.Screen
              name="Sign up"
              component={RegisterScreen}
              options={{ title: "Création de compte" }}
            />
            <Stack.Screen
              name="CreateRequest"
              component={RequestScreen}
              options={{ title: "Faire une demande" }}
            />
            <Stack.Screen
              name="MyRequests"
              component={MyRequestsScreen}
              options={{ title: "Mes demandes" }}
            />
            <Stack.Screen
              name="Message"
              component={MessageScreen}
              options={{ title: "Envoyer un message" }}
            />
            <Stack.Screen
              name="Appointments"
              component={AppointmentScreen}
              options={{ title: "Prendre un RDV" }}
            />
          </Stack.Navigator>
        </View>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  footer: {
    height: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContainer: { position: "absolute", bottom: 0 },
  footerText: {
    fontSize: 12,
    color: "#888",
    position: "absolute",
    bottom: 65,
  },
});
