import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export default function ComingSoon({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.divider} />
      <View style={styles.infoRow}>
        <Ionicons name="location-outline" size={14} color="#94a3b8" />
        <Text style={styles.infoText}>
          Texas only for now, more states will be added...
        </Text>
      </View>
      <View style={[styles.infoRow, { marginTop: 8 }]}>
        <Ionicons name="alert-circle-outline" size={14} color="#94a3b8" />
        <Text style={styles.infoText}>
          please report issues to andywang.swimtx@gmail.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#cbd5e1",
    opacity: 0.5,
    marginBottom: 16,
    marginHorizontal: -4,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 10,
    color: "#94a3b8",
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    flex: 1,
  },
});
