import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenue</Text>
        <Text style={styles.subtitle}>Que souhaitez-vous faire aujourd’hui ?</Text>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("CreateRequest")}
        >
          <Icon name="add-circle-outline" size={22} color="#1b4d3e" style={styles.icon} />
          <Text style={styles.optionText}>Faire une demande</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("MyRequests")}
        >
          <Icon name="list-alt" size={22} color="#1b4d3e" style={styles.icon} />
          <Text style={styles.optionText}>Consulter mes demandes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Message")}
        >
          <Icon name="chat-bubble-outline" size={22} color="#1b4d3e" style={styles.icon} />
          <Text style={styles.optionText}>Envoyer un message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Appointments")}
        >
          <Icon name="event-available" size={22} color="#1b4d3e" style={styles.icon} />
          <Text style={styles.optionText}>Prendre un rendez-vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9f9",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1b4d3e",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#1b4d3e",
    fontWeight: "600",
  },
});
