import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function MessageScreen() {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envoyer un message</Text>
      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Votre message..."
        multiline
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📩 Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#2b7a78" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 15 },
  button: { backgroundColor: "#2b7a78", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
