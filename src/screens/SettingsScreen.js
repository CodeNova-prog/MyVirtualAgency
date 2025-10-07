import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Paramètres</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Mode sombre</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: "#ccc", true: "#2b7a78" }}
          thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
        />
      </View>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9f9",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2b7a78",
    textAlign: "center",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  info: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 13,
    color: "#777",
  },
});
