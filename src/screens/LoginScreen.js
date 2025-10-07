import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate("Dashboard");
    } else {
      alert("Veuillez entrer vos identifiants.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Connexion</Text>
        <Text style={styles.subtitle}>Accédez à votre espace personnel</Text>

        {/* Champ Email */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Adresse e-mail"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Champ Mot de passe */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Bouton connexion */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        {/* Lien mot de passe oublié */}
        <TouchableOpacity>
          <Text style={styles.link}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        {/* Séparateur */}
        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>ou</Text>
          <View style={styles.line} />
        </View>

        {/* Bouton Google */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
             source={require('../../assets/google.jpg')}
            
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Continuer avec Google</Text>
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
    borderRadius: 12,
    padding: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1d3a35",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fafafa",
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#2b7a78",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
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
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 10,
    color: "#888",
    fontSize: 14,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 12,
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#444",
    fontWeight: "500",
  },
});
