import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../theme/colors";

interface ComingSoonProps {
  style?: StyleProp<ViewStyle>;
}

export default function ComingSoon({ style }: ComingSoonProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.iconWrap}>
        <Ionicons name="warning-outline" size={20} color="#FFD700" />
      </View>
      <View style={{ flex: 1 }}>     
        <Text style={styles.subtitle}>
          Report issues to andywang.swimtx@gmail.com, thank you!
        </Text>
      </View>
    </View>
  );}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 4,
    marginTop: 24,
  },
  iconWrap: {
    width: 6,
    height: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text,
    fontFamily: "PublicSans-SemiBold",
  },
  subtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
    fontFamily: "PublicSans-Regular",
  },
});
