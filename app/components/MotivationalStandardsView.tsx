import React, { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import type { Gender } from "../utils/dataManager";
import {
    MotivationalStandards,
    getEventDisplayName,
} from "../utils/dataManager";
import {
    calculateImprovement,
    getEventDistance,
    normalizeTimeDisplay,
    timeToSeconds,
} from "../utils/timeConverter";

interface Props {
  standards: MotivationalStandards;
  userTime: string;
  event: string;
  gender: Gender;
  ageGroup: string;
  poolType: "SCY" | "LCM";
  onBack: () => void;
}

export default function MotivationalStandardsView({
  standards,
  userTime,
  event,
  gender,
  ageGroup,
  poolType,
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

  const cuts = ["B", "BB", "A", "AA", "AAA", "AAAA"] as const;

  const cutTimes: Record<string, number> = {};
  for (const cut of cuts) {
    const t = timeToSeconds(standards[cut]);
    if (t) cutTimes[cut] = t;
  }

  const allTimes = [
    userSeconds,
    ...cuts.map((c) => cutTimes[c]).filter(Boolean),
  ];
  const rawMax = Math.max(...allTimes);
  const rawMin = Math.min(...allTimes);
  const padding = (rawMax - rawMin) * 0.1 || 1;

  const maxTime = rawMax + padding;
  const minTime = rawMin - padding;
  const totalRange = maxTime - minTime;

  const getPosition = (time: number) => {
    return ((maxTime - time) / totalRange) * 100;
  };

  const eventDistance = getEventDistance(event);

  const userCutLabel = (() => {
    for (let i = cuts.length - 1; i >= 0; i--) {
      if (userSeconds <= cutTimes[cuts[i]]) return cuts[i];
    }
    return null;
  })();

  const improvements = cuts.map((cut) => {
    const improvement = calculateImprovement(
      userSeconds,
      cutTimes[cut],
      eventDistance,
      poolType,
    );
    return { cut, standardTime: standards[cut], ...improvement };
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={onBack}>
          <Text style={styles.back}>← Back</Text>
        </Pressable>

        <Text style={styles.headerTitle}>AG Motivational</Text>
        <Text style={styles.headerSub}>
          {gender} · {ageGroup} · {poolType} · {getEventDisplayName(event)}
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          {/* User Time */}
          <Text style={styles.smallLabel}>Your Time</Text>
          <Text style={styles.time}>{normalizeTimeDisplay(userTime)}</Text>

          {userCutLabel ? (
            <Text style={styles.green}>✓ {userCutLabel} cut</Text>
          ) : (
            <Text style={styles.orange}>Working toward B</Text>
          )}

          {/* Chart */}
          <Pressable style={styles.chart} onPress={() => setShowPopup(true)}>
            {/* Zones */}
            {cuts.map((cut, i) => {
              if (i === cuts.length - 1) return null;
              const next = cuts[i + 1];
              const left = getPosition(cutTimes[cut]);
              const right = getPosition(cutTimes[next]);

              return (
                <View
                  key={cut}
                  style={{
                    position: "absolute",
                    left: `${left}%`,
                    width: `${right - left}%`,
                    top: 0,
                    bottom: 0,
                    backgroundColor: "#93c5fd",
                    opacity: 0.5,
                  }}
                />
              );
            })}

            {/* User marker */}
            <View
              style={{
                position: "absolute",
                left: `${getPosition(userSeconds)}%`,
                top: 0,
                bottom: 0,
                width: 3,
                backgroundColor: "red",
              }}
            />
          </Pressable>

          <Text style={styles.hint}>Tap chart for details</Text>

          {/* Simple table */}
          {improvements.map((row) => (
            <View key={row.cut} style={styles.row}>
              <Text style={styles.cell}>{row.cut}</Text>
              <Text style={styles.cell}>{row.standardTime}</Text>
              <Text style={styles.cell}>
                {row.achieved ? "✓" : `-${row.totalSeconds.toFixed(2)}s`}
              </Text>
              <Text style={styles.cell}>
                {row.achieved ? "" : row.per50.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal visible={showPopup} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Improvement Details
              </Text>
              <Pressable onPress={() => setShowPopup(false)}>
                <Text style={{ color: "white" }}>✕</Text>
              </Pressable>
            </View>

            <ScrollView style={{ padding: 12 }}>
              {improvements.map((row) => (
                <View key={row.cut} style={styles.row}>
                  <Text style={styles.cell}>{row.cut}</Text>
                  <Text style={styles.cell}>{row.standardTime}</Text>
                  <Text style={styles.cell}>
                    {row.achieved ? "✓" : `${row.percentage.toFixed(2)}%`}
                  </Text>
                  <Text style={styles.cell}>
                    {row.achieved ? "--" : row.totalSeconds.toFixed(2)}
                  </Text>
                  <Text style={styles.cell}>
                    {row.achieved ? "--" : row.per50.toFixed(2)}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef6ff" },
  header: {
    backgroundColor: "#2563eb",
    padding: 16,
  },
  back: { color: "white", marginBottom: 6 },
  headerTitle: { color: "white", fontWeight: "bold", fontSize: 18 },
  headerSub: { color: "#bfdbfe", fontSize: 12 },

  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
  },

  smallLabel: { fontSize: 12, color: "#6b7280" },
  time: { fontSize: 28, fontWeight: "bold", color: "#2563eb" },
  green: { color: "green", marginTop: 4 },
  orange: { color: "orange", marginTop: 4 },

  chart: {
    height: 50,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
  },

  hint: {
    textAlign: "center",
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  cell: {
    fontSize: 12,
    flex: 1,
    textAlign: "right",
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
    maxHeight: "80%",
  },

  modalHeader: {
    backgroundColor: "#2563eb",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
