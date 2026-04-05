import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  calculatePowerIndex,
  EventName,
  interpretScore,
  parseTimeString,
} from "../utils/PowerIndex";
import type { Gender } from "../utils/dataManager";

export type PowerIndexViewProps = {
  gender: Gender;
  powerIndexEvent: EventName;
  time: string;
};

const CATEGORY_STYLES: Record<
  string,
  {
    bg: string;
    text: string;
    border: string;
    icon: string;
    iconLib: "Ionicons" | "MaterialCommunityIcons";
  }
> = {
  elite: {
    bg: "#fffbeb",
    text: "#b45309",
    border: "#f59e0b",
    icon: "medal",
    iconLib: "Ionicons",
  },
  top: {
    bg: "#eff6ff",
    text: "#1d4ed8",
    border: "#3b82f6",
    icon: "flash",
    iconLib: "Ionicons",
  },
  competitive: {
    bg: "#ffffff",
    text: "#059669",
    border: "#10b981",
    icon: "swim",
    iconLib: "MaterialCommunityIcons",
  },
  developing: {
    bg: "#ffffff",
    text: "#d97706",
    border: "#fbbf24",
    icon: "trending-up",
    iconLib: "Ionicons",
  },
  base: {
    bg: "#ffffff",
    text: "#4b5563",
    border: "#9ca3af",
    icon: "water",
    iconLib: "Ionicons",
  },
  offchart: {
    bg: "#fff1f2",
    text: "#be123c",
    border: "#f43f5e",
    icon: "alert-circle",
    iconLib: "Ionicons",
  },
};

export default function PowerIndexView({
  gender,
  powerIndexEvent,
  time,
}: PowerIndexViewProps) {
  const piGender = gender === "Boy" ? "Boy" : "Girl";

  const parsedSeconds = useMemo(() => parseTimeString(time), [time]);

  const result = useMemo(() => {
    if (parsedSeconds === null) return null;
    return calculatePowerIndex(piGender, powerIndexEvent, parsedSeconds);
  }, [piGender, powerIndexEvent, parsedSeconds]);

  const interpretation = useMemo(() => {
    if (!result) return null;
    return interpretScore(result.score);
  }, [result]);

  const style =
    result && interpretation
      ? (CATEGORY_STYLES[interpretation.category] ?? CATEGORY_STYLES.base)
      : CATEGORY_STYLES.base;

  const barPercent = result
    ? Math.max(0, Math.min(100, 100 - result.score))
    : 0;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: style.bg, borderColor: style.border },
      ]}
    >
      {/* Title row */}
      <View style={styles.headerRow}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          <Text style={styles.label}>SwimCloud POWER INDEX</Text>
          <Text style={styles.subLabel}> (1 = elite, 100 = base) </Text>
        </View>
        <View style={styles.iconContainer}>
          {style.iconLib === "Ionicons" ? (
            <Ionicons name={style.icon as any} size={24} color={style.border} />
          ) : (
            <MaterialCommunityIcons
              name={style.icon as any}
              size={24}
              color={style.border}
            />
          )}
        </View>
      </View>

      {/* Score and Label */}
      <View style={styles.scoreRow}>
        <Text style={[styles.score, { color: style.text }]}>
          {result ? result.score.toFixed(1) : "— —"}
        </Text>
        <Text style={[styles.scoreLabel, { color: style.text }]}>
          {interpretation ? interpretation.label : "Enter time to see score"}
        </Text>
      </View>

      {/* Progress bar (Subtle) */}
      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${barPercent}%`,
              backgroundColor: style.border,
              opacity: 0.1,
            },
          ]}
        />
        <View
          style={[
            styles.progressFill,
            {
              position: "absolute",
              width: `${barPercent}%`,
              backgroundColor: style.border,
              height: 4,
              bottom: 0,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 20,
    borderWidth: 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 0.5,
  },
  subLabel: {
    fontSize: 11,
    color: "#9ca3af",
    marginTop: 2,
    fontWeight: "500",
  },
  iconContainer: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 12,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: -20,
    marginBottom: 8,
  },
  score: {
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: -1,
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },
  progressBg: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    marginTop: 8,
    position: "relative",
  },
  progressFill: {
    height: "100%",
  },
  empty: {
    backgroundColor: "#f9fafb",
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  emptyText: {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 14,
    fontWeight: "500",
  },
});
