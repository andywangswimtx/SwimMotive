import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>COMING SOON</Text>
      <View style={styles.bubblesContainer}>
        <View style={styles.comingSoon}>
          <Ionicons name="time-outline" size={18} color="#94a3b8" />
          <Text style={styles.comingSoonText}>
            More standards being added...
          </Text>
        </View>

        <View style={styles.comingSoon}>
          <Ionicons name="location-outline" size={18} color="#94a3b8" />
          <Text style={styles.comingSoonText}>
            Texas only for now, more states will be added...
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  bubblesContainer: {
    gap: 10,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: 1.2,
    marginBottom: 10,
    marginLeft: 4,
  },
  comingSoon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderStyle: "dashed",
  },
  comingSoonText: {
    fontSize: 13,
    color: "#94a3b8",
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
});
