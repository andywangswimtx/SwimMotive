import React, { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import type { Gender } from "../utils/dataManager";
import {
    getEventDisplayName,
    MotivationalStandards,
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
  const insets = useSafeAreaInsets();
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
    ...Object.values(cutTimes),
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
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 24) }]}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Time Standards List Page</Text>
        </Pressable>

        <Text style={styles.title}>AG Motivational (2024-28)</Text>
        <Text style={styles.subtitle}>
          {gender} · {ageGroup} · {poolType} · {getEventDisplayName(event)}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.achievementContainer}>
            <Text style={styles.smallLabel}>Your Time</Text>
            <Text style={styles.time}>{normalizeTimeDisplay(userTime)}</Text>

            {userCutLabel ? (
                <Text style={styles.greenAchievement}>✓ Achieved {userCutLabel} cut</Text>
            ) : (
                <Text style={styles.orangeAchievement}>Working toward B</Text>
            )}
          </View>

          {/* Chart Section */}
          <Pressable style={styles.chartWrapper} onPress={() => setShowPopup(true)}>
            <View style={styles.chartArea}>
              {/* Colored Segments */}
              <View style={styles.segmentsRow}>
                {cuts.map((cut, i) => {
                  const cutColors: Record<string, string> = {
                    B: "#f3f4f6", // Light gray
                    BB: "#bfdbfe", // Blue
                    A: "#bbf7d0", // Green
                    AA: "#fef08a", // Yellow
                    AAA: "#fed7aa", // Orange
                    AAAA: "#fecaca", // Red
                  };
                  
                  const currentPos = getPosition(cutTimes[cut]);
                  const nextCut = cuts[i + 1];
                  const nextPos = nextCut ? getPosition(cutTimes[nextCut]) : 100;
                  
                  return (
                    <View
                        key={cut}
                        style={{
                            position: 'absolute',
                            left: `${currentPos}%`,
                            width: `${nextPos - currentPos}%`,
                            height: '100%',
                            backgroundColor: cutColors[cut] || "#e5e7eb",
                        }}
                    />
                  );
                })}
              </View>

              {/* Cut Lines and Labels */}
              {cuts.map((cut) => (
                <View key={`line-${cut}`} style={[styles.cutLineWrapper, { left: `${getPosition(cutTimes[cut])}%` }]}>
                  <View style={styles.cutLine} />
                  <Text style={styles.cutNameLabel}>{cut}</Text>
                  <Text style={styles.cutTimeLabel}>{standards[cut]}</Text>
                </View>
              ))}

              {/* YOU marker */}
              <View
                style={[
                  styles.userMarkerLine,
                  { left: `${getPosition(userSeconds)}%` },
                ]}
              >
                <View style={styles.userMarkerBadge}>
                    <Text style={styles.userMarkerText}>YOU</Text>
                </View>
              </View>
            </View>

            {/* Axis Labels */}
            <View style={styles.axisLabels}>
                <Text style={styles.axisText}>← Slower</Text>
                <Text style={styles.axisText}>Faster →</Text>
            </View>

            <Text style={styles.hint}>Tap chart to see improvement details</Text>
          </Pressable>

          <View style={styles.divider} />

          {/* Table Section */}
          <View style={styles.tableSection}>
            <Text style={styles.sectionTitle}>How much to improve</Text>
            
            <View style={styles.tableHeader}>
                <Text style={[styles.tableHeaderCell, { textAlign: 'left', flex: 0.8 }]}>Cut</Text>
                <Text style={styles.tableHeaderCell}>Standard</Text>
                <Text style={styles.tableHeaderCell}>Need</Text>
                <Text style={styles.tableHeaderCell}>Per 50</Text>
            </View>

            {improvements.map((row) => (
                <View key={row.cut} style={[styles.tableRow, row.achieved && styles.rowAchieved]}>
                  <Text style={[styles.tableCell, { textAlign: 'left', flex: 0.8, fontWeight: '800' }]}>{row.cut}</Text>
                  <Text style={styles.tableCell}>{row.standardTime}</Text>
                  <View style={styles.tableCell}>
                    {row.achieved ? (
                      <Ionicons name="checkmark" size={18} color="#059669" style={{ alignSelf: 'flex-end' }} />
                    ) : (
                      <Text style={styles.redText}>-{row.totalSeconds.toFixed(2)}s</Text>
                    )}
                  </View>
                  <View style={styles.tableCell}>
                    {!row.achieved && (
                      <Text style={styles.orangeText}>{row.per50.toFixed(2)}s</Text>
                    )}
                  </View>
                </View>
            ))}
          </View>
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
                <Ionicons name="close" size={24} color="white" />
              </Pressable>
            </View>

            <ScrollView style={{ padding: 12 }}>
              <View style={styles.modalTableHeader}>
                <Text style={[styles.modalHeaderCell, { textAlign: 'left', flex: 0.6 }]}>Cut</Text>
                <Text style={styles.modalHeaderCell}>Standard</Text>
                <Text style={styles.modalHeaderCell}>% to Improve</Text>
                <Text style={styles.modalHeaderCell}>Secs</Text>
                <Text style={styles.modalHeaderCell}>Per 50</Text>
              </View>

              {improvements.map((row) => (
                <View key={row.cut} style={[styles.modalRow, row.achieved && styles.modalRowAchieved]}>
                  <Text style={[styles.modalCell, { textAlign: "left", flex: 0.6, fontWeight: '800' }]}>{row.cut}</Text>
                  <Text style={[styles.modalCell, { fontWeight: '700' }]}>{row.standardTime}</Text>
                  <View style={styles.modalCell}>
                    {row.achieved ? (
                      <Ionicons name="checkmark" size={16} color="#059669" />
                    ) : (
                      <Text style={styles.modalValueText}>{row.percentage.toFixed(2)}%</Text>
                    )}
                  </View>
                  <Text style={styles.modalCell}>
                    {row.achieved ? "--" : row.totalSeconds.toFixed(2)}
                  </Text>
                  <Text style={styles.modalCell}>
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
  container: { flex: 1, backgroundColor: "#f0f7ff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    backgroundColor: "#2563eb",
    padding: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  backButton: { marginBottom: 16 },
  backText: { color: "#bfdbfe", fontSize: 14, fontWeight: "600" },
  title: { color: "white", fontWeight: "900", fontSize: 24, letterSpacing: -0.5 },
  subtitle: { color: "#bfdbfe", fontSize: 13, marginTop: 4, fontWeight: "500" },

  scrollContent: { padding: 16, paddingBottom: 40 },

  card: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },

  achievementContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  smallLabel: { fontSize: 14, color: "#6b7280", fontWeight: "600" },
  time: { fontSize: 44, fontWeight: "900", color: "#2563eb", letterSpacing: -1 },
  greenAchievement: { color: "#059669", fontWeight: "700", marginTop: 4, fontSize: 15 },
  orangeAchievement: { color: "#d97706", fontWeight: "700", marginTop: 4, fontSize: 15 },

  chartWrapper: {
    marginBottom: 30,
  },
  chartArea: {
    height: 60,
    marginTop: 30,
    marginBottom: 50,
    position: 'relative',
  },
  segmentsRow: {
    height: 50,
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'absolute',
    top: 5,
  },
  cutLineWrapper: {
    position: "absolute",
    height: 60,
    alignItems: "center",
    width: 60,
    marginLeft: -30,
  },
  cutLine: {
    width: 1.5,
    height: 50,
    backgroundColor: "#4b5563",
    top: 5,
  },
  cutNameLabel: {
    position: 'absolute',
    top: -20,
    fontSize: 10,
    fontWeight: '800',
    color: '#374151',
  },
  cutTimeLabel: {
    position: 'absolute',
    bottom: -20,
    fontSize: 9,
    fontWeight: '600',
    color: '#6b7280',
  },
  userMarkerLine: {
    position: "absolute",
    height: 60,
    width: 3,
    backgroundColor: "#ef4444",
    top: 5,
    zIndex: 10,
    alignItems: 'center',
  },
  userMarkerBadge: {
    position: 'absolute',
    top: 15,
    backgroundColor: '#ef4444',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    minWidth: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userMarkerText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
  },

  axisLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  axisText: { fontSize: 11, color: "#9ca3af", fontWeight: "600" },

  hint: {
    textAlign: "center",
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 12,
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
    marginVertical: 24,
  },

  tableSection: {
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#f3f4f6",
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    color: "#9ca3af",
    textAlign: "right",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#f8fafc",
    alignItems: 'center',
  },
  rowAchieved: {
    backgroundColor: "#f0fdf4",
    marginHorizontal: -10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  tableCell: {
    flex: 1,
    fontSize: 13,
    color: "#374151",
    textAlign: "right",
  },
  redText: { color: "#ef4444", fontWeight: "700" },
  orangeText: { color: "#f97316", fontWeight: "600" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 24,
    maxHeight: "80%",
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: "#2563eb",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTableHeader: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    marginBottom: 5,
    paddingHorizontal: 12,
  },
  modalHeaderCell: {
    flex: 1,
    fontSize: 11,
    fontWeight: '900',
    color: '#374151',
    textAlign: 'right',
    paddingHorizontal: 2,
  },
  modalRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#f1f5f9",
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  modalRowAchieved: {
    backgroundColor: "#f0fdf4",
  },
  modalCell: {
    flex: 1,
    fontSize: 12,
    color: "#374151",
    textAlign: "right",
    paddingHorizontal: 2,
    justifyContent: 'center',
  },
  modalValueText: {
    fontSize: 12,
    color: "#374151",
  },
});
