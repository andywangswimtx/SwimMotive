import React, { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { getEventDisplayName } from "../utils/dataManager";
import {
    calculateImprovement,
    getEventDistance,
    normalizeTimeDisplay,
    timeToSeconds,
} from "../utils/timeConverter";

interface Props {
  standard: string;
  meetName: string;
  standardLabel: string;
  userTime: string;
  event: string;
  gender: string;
  ageGroup: string;
  poolType: "SCY" | "LCM";
  colorClass: string;
  onBack: () => void;
}

export default function SingleStandardView({
  standard,
  meetName,
  standardLabel,
  userTime,
  event,
  gender,
  ageGroup,
  poolType,
  colorClass,
  onBack,
}: Props) {
  const [showPopup, setShowPopup] = useState(false);

  const userSeconds = timeToSeconds(userTime);

  if (!userSeconds) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Invalid time format</Text>
        <Pressable onPress={onBack}>
          <Text style={{ color: "#2563eb", marginTop: 10 }}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const standardTime = timeToSeconds(standard)!;

  const allTimes = [userSeconds, standardTime];
  const rawMax = Math.max(...allTimes);
  const rawMin = Math.min(...allTimes);
  const padding = (rawMax - rawMin) * 0.25 || 1;

  const maxTime = rawMax + padding;
  const minTime = rawMin - padding;
  const totalRange = maxTime - minTime;

  const getPosition = (time: number) => {
    return ((maxTime - time) / totalRange) * 100;
  };

  const eventDistance = getEventDistance(event);
  const improvement = calculateImprovement(
    userSeconds,
    standardTime,
    eventDistance,
    poolType,
  );

  const standardPos = getPosition(standardTime);
  const userPos = getPosition(userSeconds);

  // Color mapping
  const isEmerald = colorClass === "emerald";

  const colors = {
    header: isEmerald ? "#059669" : "#0284c7",
    primary: isEmerald ? "#059669" : "#0284c7",
    zone: isEmerald ? "#6ee7b7" : "#7dd3fc",
    marker: isEmerald ? "#059669" : "#0284c7",
    cardBorder: isEmerald ? "#a7f3d0" : "#bae6fd",
    cardBg: isEmerald ? "#ecfdf5" : "#f0f9ff",
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.header }]}>
        <Pressable onPress={onBack}>
          <Text style={styles.back}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>{meetName}</Text>
        <Text style={styles.subtitle}>
          {gender} · {ageGroup} · {poolType} · {getEventDisplayName(event)}
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          {/* User time */}
          <Text style={styles.smallLabel}>Your Time</Text>
          <Text style={[styles.time, { color: colors.primary }]}>
            {normalizeTimeDisplay(userTime)}
          </Text>

          {improvement.achieved ? (
            <Text style={styles.green}>✓ Qualified for {standardLabel}!</Text>
          ) : (
            <Text style={styles.orange}>Working toward {standardLabel}</Text>
          )}

          {/* Chart */}
          <Pressable style={styles.chart} onPress={() => setShowPopup(true)}>
            {/* Slower zone */}
            <View
              style={{
                position: "absolute",
                left: 0,
                width: `${standardPos}%`,
                top: 0,
                bottom: 0,
                backgroundColor: "#e5e7eb",
              }}
            />

            {/* Faster zone */}
            <View
              style={{
                position: "absolute",
                left: `${standardPos}%`,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: colors.zone,
                opacity: 0.5,
              }}
            />

            {/* Standard marker */}
            <View
              style={{
                position: "absolute",
                left: `${standardPos}%`,
                width: 2,
                top: 0,
                bottom: 0,
                backgroundColor: "#6b7280",
              }}
            />

            {/* User marker */}
            <View
              style={{
                position: "absolute",
                left: `${userPos}%`,
                width: 3,
                top: 0,
                bottom: 0,
                backgroundColor: colors.marker,
              }}
            />
          </Pressable>

          <Text style={styles.hint}>Tap chart for qualifying details</Text>

          {/* Summary */}
          <View style={{ marginTop: 12 }}>
            <View
              style={[
                styles.summaryCard,
                {
                  borderColor: improvement.achieved
                    ? "#86efac"
                    : colors.cardBorder,
                  backgroundColor: improvement.achieved
                    ? "#f0fdf4"
                    : colors.cardBg,
                },
              ]}
            >
              <View style={styles.row}>
                <Text style={{ fontWeight: "600" }}>{standardLabel} Time</Text>
                <Text style={styles.mono}>{standard}</Text>
              </View>

              {improvement.achieved ? (
                <Text style={styles.green}>✓ Achieved</Text>
              ) : (
                <View style={styles.grid}>
                  <View style={styles.gridItem}>
                    <Text style={styles.smallLabel}>% Improve</Text>
                    <Text style={styles.mono}>
                      {improvement.percentage.toFixed(2)}%
                    </Text>
                  </View>
                  <View style={styles.gridItem}>
                    <Text style={styles.smallLabel}>Seconds</Text>
                    <Text style={styles.mono}>
                      {improvement.totalSeconds.toFixed(2)}s
                    </Text>
                  </View>
                  <View style={styles.gridItem}>
                    <Text style={styles.smallLabel}>Per 50</Text>
                    <Text style={styles.mono}>
                      {improvement.per50.toFixed(2)}s
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal visible={showPopup} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <View
              style={[styles.modalHeader, { backgroundColor: colors.header }]}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Qualifying Details
              </Text>
              <Pressable onPress={() => setShowPopup(false)}>
                <Text style={{ color: "white" }}>✕</Text>
              </Pressable>
            </View>

            <View style={{ padding: 20 }}>
              <Text style={styles.smallLabel}>{standardLabel} Time</Text>
              <Text style={styles.modalTime}>{standard}</Text>
              <Text style={styles.note}>
                Seed times may vary by competition.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef6ff" },

  header: { padding: 16 },
  back: { color: "white", marginBottom: 6 },
  title: { color: "white", fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "#e0f2fe", fontSize: 12 },

  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
  },

  smallLabel: { fontSize: 12, color: "#6b7280" },
  time: { fontSize: 28, fontWeight: "bold" },

  green: { color: "green", marginTop: 4 },
  orange: { color: "orange", marginTop: 4 },

  chart: {
    height: 50,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    marginTop: 20,
  },

  hint: {
    textAlign: "center",
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 8,
  },

  summaryCard: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mono: {
    fontFamily: "monospace",
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    marginTop: 10,
  },

  gridItem: {
    flex: 1,
    alignItems: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 16,
  },

  modal: {
    backgroundColor: "white",
    borderRadius: 16,
  },

  modalHeader: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  modalTime: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 6,
  },

  note: {
    marginTop: 10,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
});
