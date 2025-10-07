import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

export default function MyRequestsScreen() {
  const requests = [
    { id: "1", subject: "💧 Fuite d’eau dans la salle de bain", status: "⏳ En attente" },
    { id: "2", subject: "🔥 Chauffage en panne", status: "✅ Acceptée - Intervention prévue" },
    { id: "3", subject: "📜 Demande de quittance de loyer", status: "⏳ En cours" },
    { id: "4", subject: "🔑 Serrure cassée entrée principale", status: "❌ Refusée (hors contrat)" },
    { id: "5", subject: "🧹 Ménage des parties communes", status: "⏳ En cours" },
    { id: "6", subject: "🛠 Réparation volet roulant", status: "✅ Acceptée" },
  ];

  // ID de test (Google fournit ça, ne jamais mettre ton vrai ID en dev)
  const adUnitId =  __DEV__ ? TestIds.BANNER : "ca-app-pub-5190092512253381/8380393092";

  const renderItem = ({ item, index }) => {
    const card = (
      <View style={styles.card}>
        <Text style={styles.subject}>{item.subject}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    );

    // Insérer une pub toutes les 3 demandes
   /*  if ((index + 1) % 3 === 0) {
      return (
        <View>
          {card}
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.INLINE_ADAPTIVE_BANNER} 
          />
        </View>
      );
    } */

    return card;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Mes demandes</Text>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#2b7a78" },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  subject: { fontSize: 16, fontWeight: "600", color: "#333" },
  status: { fontSize: 14, color: "#666", marginTop: 5 },
});
