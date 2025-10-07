import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}> 
      {/* Titre */}
      <Text style={styles.title}>Bienvenue sur ChezMoi</Text>
      <Text style={styles.subtitle}>Votre agence immobilière virtuelle</Text>
 {/* Logo */}
      <Image source={require("../../assets/checkhand.png")} style={styles.logo} />
      {/* Boutons */}
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("Sign in")}
      >
        <Text style={styles.buttonPrimaryText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Sign up")}
      >
        <Text style={styles.buttonSecondaryText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2b7a78",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 40,
  },
  buttonPrimary: {
    backgroundColor: "#2b7a78",
    paddingVertical: 15,
    borderRadius: 12,
    width: "85%",
    alignItems: "center",
    marginBottom: 15,
    elevation: 3, // ombre Android
    shadowColor: "#000", // ombre iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  buttonPrimaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: "#2b7a78",
    paddingVertical: 15,
    borderRadius: 12,
    width: "85%",
    alignItems: "center",
  },
  buttonSecondaryText: {
    color: "#2b7a78",
    fontWeight: "bold",
    fontSize: 16,
  },
});
