import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    // Ici, tu mets ta logique d'inscription
    navigation.navigate("Dashboard");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Rejoignez notre agence virtuelle</Text>

        {/* Champ Nom */}
        <TextInput
          style={styles.input}
          placeholder="Nom complet"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        {/* Champ Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Champ Mot de passe */}
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Champ Confirmation Mot de passe */}
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Bouton inscription */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S’inscrire</Text>
        </TouchableOpacity>

        {/* Lien vers connexion */}
        <TouchableOpacity onPress={() => navigation.navigate("Sign in")}>
          <Text style={styles.link}>Déjà un compte ? Connectez-vous</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2b7a78",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#2b7a78",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#2b7a78",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },
});
