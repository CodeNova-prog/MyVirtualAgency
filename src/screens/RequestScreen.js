import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function RequestScreen() {
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faire une demande</Text>

      <TextInput
        style={styles.input}
        placeholder="Sujet de la demande"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Détails..."
        multiline
        value={details}
        onChangeText={setDetails}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Envoyer la demande</Text>
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
