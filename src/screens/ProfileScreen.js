import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
        style={styles.avatar}
      />
      <Text style={styles.title}>👤 Mon Profil</Text>
      <Text style={styles.text}>Nom : xxxxxt</Text>
      <Text style={styles.text}>Email : xx.xx@email.com</Text>
      <Text style={styles.text}>Membre depuis : Janvier 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9f9",
    padding: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2b7a78",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: "#444",
    textAlign: "center",
    marginVertical: 2,
  },
});
