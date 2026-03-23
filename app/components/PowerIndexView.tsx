import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    calculatePowerIndex,
    EventName,
    interpretScore,
    parseTimeString,
} from "../powerIndex";
import type { Gender } from "../utils/dataManager";

export type PowerIndexViewProps = {
  gender: Gender;
  powerIndexEvent: EventName;
  time: string;
};

const CATEGORY_STYLES: Record<
  string,
  { bg: string; text: string; bar: string; emoji: string }
> = {
  elite: { bg: "#fffbeb", text: "#b45309", bar: "#f59e0b", emoji: "🥇" },
  top: { bg: "#eff6ff", text: "#1d4ed8", bar: "#3b82f6", emoji: "⚡" },
  competitive: { bg: "#ecfdf5", text: "#047857", bar: "#10b981", emoji: "🏊" },
  developing: { bg: "#fefce8", text: "#a16207", bar: "#eab308", emoji: "📈" },
  base: { bg: "#f9fafb", text: "#4b5563", bar: "#9ca3af", emoji: "🌊" },
  offchart: { bg: "#fff1f2", text: "#be123c", bar: "#f43f5e", emoji: "📊" },
};

export default function PowerIndexView({
  gender,
  powerIndexEvent,
  time,
}: PowerIndexViewProps) {
  const piGender = gender === "Boy" ? "Boys" : "Girls";

  const parsedSeconds = useMemo(() => parseTimeString(time), [time]);

  const result = useMemo(() => {
    if (parsedSeconds === null) return null;
    return calculatePowerIndex(piGender, powerIndexEvent, parsedSeconds);
  }, [piGender, powerIndexEvent, parsedSeconds]);

  const interpretation = useMemo(() => {
    if (!result) return null;
    return interpretScore(result.score);
  }, [result]);

  if (!result || !interpretation) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>
          Could not calculate Power Index for this time.
        </Text>
      </View>
    );
  }

  const style =
    CATEGORY_STYLES[interpretation.category] ?? CATEGORY_STYLES.base;

  const barPercent = Math.max(0, Math.min(100, 100 - result.score));

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: style.bg, borderColor: style.bar },
      ]}
    >
      {/* Title row */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.label}>Power Index</Text>
          <Text style={styles.subLabel}>
            SwimCloud benchmark (1 = elite, 100 = base)
          </Text>
        </View>
        <Text style={styles.emoji}>{style.emoji}</Text>
      </View>

      {/* Score */}
      <View style={styles.scoreRow}>
        <Text style={[styles.score, { color: style.text }]}>
          {result.score.toFixed(1)}
        </Text>
        <Text style={[styles.scoreLabel, { color: style.text }]}>
          {interpretation.label}
        </Text>
      </View>

      {/* Progress bar */}
      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${barPercent}%`,
              backgroundColor: style.bar,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6b7280",
    textTransform: "uppercase",
  },

  subLabel: {
    fontSize: 10,
    color: "#9ca3af",
    marginTop: 2,
  },

  emoji: {
    fontSize: 24,
  },

  scoreRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },

  score: {
    fontSize: 40,
    fontWeight: "900",
  },

  scoreLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
    marginBottom: 4,
  },

  progressBg: {
    height: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.6)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 999,
  },

  empty: {
    backgroundColor: "#f9fafb",
    padding: 16,
    borderRadius: 16,
  },

  emptyText: {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 12,
  },
});
