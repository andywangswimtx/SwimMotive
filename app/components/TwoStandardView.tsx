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
  bonusStandard: string;
  meetName: string;
  standardLabel: string;
  bonusLabel: string;
  userTime: string;
  event: string;
  gender: string;
  ageGroup: string;
  poolType: "SCY" | "LCM";
  colorClass: string;
  onBack: () => void;
}

export default function TwoStandardView({
  standard,
  bonusStandard,
  meetName,
  standardLabel,
  bonusLabel,
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
  const bonusTime = timeToSeconds(bonusStandard)!;

  const allTimes = [userSeconds, standardTime, bonusTime];
  const rawMax = Math.max(...allTimes);
  const rawMin = Math.min(...allTimes);
  const padding = (rawMax - rawMin) * 0.15 || 1;

  const maxTime = rawMax + padding;
  const minTime = rawMin - padding;
  const totalRange = maxTime - minTime;

  const getPosition = (time: number) => {
    return ((maxTime - time) / totalRange) * 100;
  };

  const eventDistance = getEventDistance(event);

  const standardImprovement = calculateImprovement(
    userSeconds,
    standardTime,
    eventDistance,
    poolType,
  );

  const bonusImprovement = calculateImprovement(
    userSeconds,
    bonusTime,
    eventDistance,
    poolType,
  );

  const bonusPos = getPosition(bonusTime);
  const standardPos = getPosition(standardTime);
  const userPos = getPosition(userSeconds);

  // Color mapping
  const isPurple = colorClass === "purple";

  const colors = {
    header: isPurple ? "#7c3aed" : "#e11d48",
    primary: isPurple ? "#7c3aed" : "#e11d48",
    midZone: isPurple ? "#c084fc" : "#fb7185",
    user: isPurple ? "#7c3aed" : "#e11d48",
    bonusCard: "#ffedd5",
    standardCard: isPurple ? "#f3e8ff" : "#ffe4e6",
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

          {standardImprovement.achieved ? (
            <Text style={styles.green}>✓ {standardLabel} cut achieved!</Text>
          ) : bonusImprovement.achieved ? (
            <Text style={styles.blue}>✓ {bonusLabel} cut achieved</Text>
          ) : (
            <Text style={styles.orange}>Working toward {bonusLabel} cut</Text>
          )}

          {/* Chart */}
          <Pressable style={styles.chart} onPress={() => setShowPopup(true)}>
            {/* Slower zone */}
            <View
              style={{
                position: "absolute",
                left: 0,
                width: `${bonusPos}%`,
                top: 0,
                bottom: 0,
                backgroundColor: "#e5e7eb",
              }}
            />

            {/* Mid zone */}
            <View
              style={{
                position: "absolute",
                left: `${bonusPos}%`,
                width: `${standardPos - bonusPos}%`,
                top: 0,
                bottom: 0,
                backgroundColor: colors.midZone,
                opacity: 0.5,
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
                backgroundColor: "#86efac",
                opacity: 0.4,
              }}
            />

            {/* Bonus marker */}
            <View
              style={{
                position: "absolute",
                left: `${bonusPos}%`,
                width: 2,
                top: 0,
                bottom: 0,
                backgroundColor: "#6b7280",
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
                backgroundColor: colors.user,
              }}
            />
          </Pressable>

          <Text style={styles.hint}>Tap chart for improvement details</Text>

          {/* Summary */}
          <View style={{ marginTop: 12 }}>
            {/* Bonus */}
            <View
              style={[
                styles.summaryCard,
                { backgroundColor: colors.bonusCard },
              ]}
            >
              <View style={styles.row}>
                <Text style={styles.bold}>{bonusLabel} Cut</Text>
                <Text style={styles.mono}>{bonusStandard}</Text>
              </View>

              {bonusImprovement.achieved ? (
                <Text style={styles.green}>✓ Achieved</Text>
              ) : (
                <View style={styles.grid}>
                  <Stat
                    label="% Improve"
                    value={`${bonusImprovement.percentage.toFixed(2)}%`}
                  />
                  <Stat
                    label="Seconds"
                    value={`${bonusImprovement.totalSeconds.toFixed(2)}s`}
                  />
                  <Stat
                    label="Per 50"
                    value={`${bonusImprovement.per50.toFixed(2)}s`}
                  />
                </View>
              )}
            </View>

            {/* Standard */}
            <View
              style={[
                styles.summaryCard,
                { backgroundColor: colors.standardCard },
              ]}
            >
              <View style={styles.row}>
                <Text style={styles.bold}>{standardLabel} Cut</Text>
                <Text style={styles.mono}>{standard}</Text>
              </View>

              {standardImprovement.achieved ? (
                <Text style={styles.green}>✓ Achieved</Text>
              ) : (
                <View style={styles.grid}>
                  <Stat
                    label="% Improve"
                    value={`${standardImprovement.percentage.toFixed(2)}%`}
                  />
                  <Stat
                    label="Seconds"
                    value={`${standardImprovement.totalSeconds.toFixed(2)}s`}
                  />
                  <Stat
                    label="Per 50"
                    value={`${standardImprovement.per50.toFixed(2)}s`}
                  />
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
                Improvement Details
              </Text>
              <Pressable onPress={() => setShowPopup(false)}>
                <Text style={{ color: "white" }}>✕</Text>
              </Pressable>
            </View>

            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={styles.smallLabel}>{bonusLabel}</Text>
                <Text style={styles.modalTime}>{bonusStandard}</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.smallLabel}>{standardLabel}</Text>
                <Text style={styles.modalTime}>{standard}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 12, color: "#6b7280" }}>{label}</Text>
      <Text style={{ fontWeight: "bold", fontFamily: "monospace" }}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef2ff" },

  header: { padding: 16 },
  back: { color: "white", marginBottom: 6 },
  title: { color: "white", fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "#e0e7ff", fontSize: 12 },

  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
  },

  smallLabel: { fontSize: 12, color: "#6b7280" },
  time: { fontSize: 28, fontWeight: "bold" },

  green: { color: "green", marginTop: 4 },
  blue: { color: "#2563eb", marginTop: 4 },
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
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bold: { fontWeight: "600" },

  mono: { fontFamily: "monospace" },

  grid: {
    flexDirection: "row",
    marginTop: 10,
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
    fontSize: 18,
    fontWeight: "bold",
  },
});
