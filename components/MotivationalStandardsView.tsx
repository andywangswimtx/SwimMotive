import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import type { Gender, PoolType } from "../utils/dataManager";
import {
  getEventDisplayName,
  MotivationalStandards,
} from "../utils/dataManager";
import {
  calculateImprovement,
  getEventDistance,
  normalizeTimeDisplay,
  secondsToTime,
  timeToSeconds,
} from "../utils/timeConverter";

interface Props {
  standards: MotivationalStandards;
  userTime: string;
  event: string;
  gender: Gender;
  ageGroup: string;
  poolType: PoolType;
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
  const hasUserTime = !!userSeconds;

  const cuts = ["B", "BB", "A", "AA", "AAA", "AAAA"] as const;
  const availableCuts = cuts.filter((cut) => timeToSeconds(standards[cut]) !== null);

  const cutTimes: Record<string, number> = {};
  for (const cut of availableCuts) {
    const t = timeToSeconds(standards[cut]);
    if (t !== null) cutTimes[cut] = t;
  }

  const allTimes = hasUserTime
    ? [userSeconds!, ...Object.values(cutTimes)]
    : Object.values(cutTimes);
  const rawMax = Math.max(...allTimes);
  const rawMin = Math.min(...allTimes);
  
  // Ensure minimum scale: 1s for every 50 distance
  const eventDistance = getEventDistance(event);
  const minRange = (eventDistance / 50.0) * 1.5; // Slightly larger for motivational as there are many cuts

  let maxTime = rawMax;
  let minTime = rawMin;

  if (maxTime - minTime < minRange) {
    const mid = (maxTime + minTime) / 2;
    maxTime = mid + minRange / 2;
    minTime = mid - minRange / 2;
  } else {
    // Add 10% padding
    const padding = (maxTime - minTime) * 0.1 || 5;
    maxTime += padding;
    minTime -= padding;
  }

  const totalRange = maxTime - minTime;

  // Dynamic tick interval based on the total time range shown
  let tickInterval = 1.0;
  if (totalRange >= 400) tickInterval = 60;
  else if (totalRange >= 200) tickInterval = 30;
  else if (totalRange >= 100) tickInterval = 15;
  else if (totalRange >= 40) tickInterval = 10;
  else if (totalRange >= 16) tickInterval = 5;
  else if (totalRange >= 8) tickInterval = 2;
  else if (totalRange >= 4) tickInterval = 1;
  else tickInterval = 0.5;

  const ticks: number[] = [];
  const startTick = Math.ceil(minTime / tickInterval) * tickInterval;
  for (let t = startTick; t <= maxTime; t += tickInterval) {
    ticks.push(t);
  }

  const getPosition = (time: number) => {
    return ((maxTime - time) / totalRange) * 100;
  };

  // Force extreme edges and filter overlaps
  const finalTicks = ticks.filter(t => {
    const pos = getPosition(t);
    return pos >= 0 && pos <= 100;
  });

  const userPos = hasUserTime ? getPosition(userSeconds!) : -100;

  const userCutLabel = (() => {
    if (!hasUserTime) return null;
    for (let i = availableCuts.length - 1; i >= 0; i--) {
      if (userSeconds! <= cutTimes[availableCuts[i]]) return availableCuts[i];
    }
    return null;
  })();

  const improvements = cuts.map((cut) => {
    const imp = hasUserTime
      && cutTimes[cut] !== undefined
      ? calculateImprovement(
          userSeconds!,
          cutTimes[cut],
          eventDistance,
        )
      : null;
    return {
      cut,
      standardTime: standards[cut],
      available: cutTimes[cut] !== undefined,
      achieved: imp?.achieved ?? false,
      percentage: imp?.percentage ?? 0,
      totalSeconds: imp?.totalSeconds ?? 0,
      per50: imp?.per50 ?? 0,
    };
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 24) }]}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back to Selection Page</Text>
        </Pressable>

        <Text style={styles.title}>USA Motivational Levels</Text>
        <Text style={styles.subtitle}>
          {gender} · {ageGroup} · {poolType} · {getEventDisplayName(event)}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.achievementContainer}>
            <Text style={styles.smallLabel}>Your Time</Text>
            <Text
              style={[
                styles.time,
                { color: hasUserTime ? "#000000" : "#9ca3af" },
              ]}
            >
              {hasUserTime ? normalizeTimeDisplay(userTime) : "--:--.--"}
            </Text>

            {hasUserTime && userCutLabel ? (
              <Text style={styles.greenAchievement}>
                ✓ Achieved {userCutLabel} cut
              </Text>
            ) : hasUserTime ? (
              <Text style={styles.orangeAchievement}>Working towards qualifying</Text>
            ) : (
              <Text style={[styles.orangeAchievement, { color: colors.textSubtle }]}>
                Benchmark comparison list
              </Text>
            )}
          </View>

          {/* Chart Section */}
          <Pressable
            style={styles.chartWrapper}
            onPress={() => setShowPopup(true)}
          >
            <View style={styles.chartArea}>
              {/* Colored Segments */}
              <View style={styles.segmentsRow}>
                {availableCuts.map((cut, i) => {
                  const cutColors: Record<string, string> = {
                    B: "#f3f4f6", // Light gray
                    BB: "#FFE7A0",
                    A: "#bbf7d0", // Green
                    AA: "#fef08a", // Yellow
                    AAA: "#fed7aa", // Orange
                    AAAA: "#fecaca", // Red
                  };

                  const currentPos = getPosition(cutTimes[cut]);
                  const nextCut = availableCuts[i + 1];
                  const nextPos = nextCut
                    ? getPosition(cutTimes[nextCut])
                    : 100;

                  return (
                    <View
                      key={cut}
                      style={{
                        position: "absolute",
                        left: `${currentPos}%`,
                        width: `${nextPos - currentPos}%`,
                        height: "100%",
                        backgroundColor: cutColors[cut] || "#e5e7eb",
                      }}
                    />
                  );
                })}
              </View>

              {/* Cut Lines and Labels */}
              {availableCuts.map((cut, idx) => {
                const pos = getPosition(cutTimes[cut]);
                const isOdd = idx % 2 !== 0;
                return (
                  <View
                    key={`line-${cut}`}
                    style={[
                      styles.cutLineWrapper,
                      { left: `${pos}%` },
                    ]}
                  >
                    <View style={styles.cutLine} />
                    <Text style={[styles.cutNameLabel, isOdd && { top: -24 }]}>
                      {cut}
                    </Text>
                    <Text style={[styles.cutTimeLabel, isOdd && { bottom: -32 }]}>
                      {standards[cut]}
                    </Text>
                  </View>
                );
              })}

              {/* YOU marker */}
              {hasUserTime && (
                <View style={[styles.userMarkerLine, { left: `${userPos}%` }]}>
                  <View style={styles.userMarkerBadge}>
                    <Text style={styles.userMarkerText}>YOU</Text>
                  </View>
                </View>
              )}

              {/* Ticks */}
              {(() => {
                return finalTicks.map((t) => {
                  const pos = getPosition(t);
                  const isLeftEdge = Math.abs(pos) < 0.1;
                  const isRightEdge = Math.abs(pos - 100) < 0.1;
                  const isEdge = isLeftEdge || isRightEdge;

                  return (
                    <View 
                      key={t} 
                      style={{ 
                        position: "absolute", 
                        left: `${pos}%`, 
                        zIndex: 20, 
                        width: 0, 
                        overflow: 'visible',
                        alignItems: isLeftEdge ? "flex-start" : isRightEdge ? "flex-end" : "center" 
                      }}
                    >
                      <View
                        style={{
                          width: 1.5,
                          height: 12,
                          top: 39,
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      />
                      <Text 
                        style={{ 
                          position: "absolute", 
                          top: isEdge ? 53 : 27, 
                          fontSize: isEdge ? 8 : 7, 
                          fontFamily: isEdge ? "PublicSans-Black" : "PublicSans-SemiBold",
                          fontWeight: isEdge ? "900" : "600",
                          color: isEdge ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)", 
                          width: 60, 
                          textAlign: isLeftEdge ? "left" : isRightEdge ? "right" : "center",
                        }}
                      >
                        {secondsToTime(t)}
                      </Text>
                    </View>
                  );
                });
              })()}
            </View>

            {/* Axis Labels */}
            <View style={styles.axisLabels}>
              <Text style={styles.axisText}>← Slower</Text>
              <Text style={styles.axisText}>Faster →</Text>
            </View>

            <Text style={styles.hint}>Tap chart for details</Text>
          </Pressable>

          <View style={styles.divider} />

          {/* Table Section */}
          <View style={styles.tableSection}>
            <Text style={styles.sectionTitle}>How much to improve</Text>

            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    { textAlign: "left", flex: 0.8 },
                  ]}
                >
                  Cut
                </Text>
                <Text style={[styles.tableHeaderCell, { flex: 1.2, textAlign: "left" }]}>Standard</Text>
                <Text style={styles.tableHeaderCell}>Time Drop Needed</Text>
                <Text style={[styles.tableHeaderCell, { borderRightWidth: 0, paddingRight: 8 }]}>Per 50</Text>
              </View>

              {improvements.map((row, idx) => {
                const isLast = idx === improvements.length - 1;
                return (
                  <View
                    key={row.cut}
                    style={[styles.tableRow, isLast && { borderBottomWidth: 0 }, row.achieved && styles.rowAchieved]}
                  >
                    <Text
                      style={[
                        styles.tableCell,
                        { textAlign: "left", flex: 0.8, fontWeight: "800", fontFamily: "PublicSans-Black" },
                      ]}
                    >
                      {row.cut}
                    </Text>
                    <Text style={[styles.tableCell, { flex: 1.2, textAlign: "left" }]}>
                      {row.available ? normalizeTimeDisplay(row.standardTime) : "—"}
                    </Text>
                    <Text
                      style={[
                        styles.tableCell,
                        { justifyContent: "center" },
                        row.achieved ? { color: "#059669", fontWeight: "700" } : styles.redText,
                      ]}
                    >
                      {!hasUserTime || !row.available
                        ? "--"
                        : row.achieved
                          ? `+${Math.abs(row.totalSeconds).toFixed(2)}s`
                          : `-${row.totalSeconds.toFixed(2)}s`}
                    </Text>
                    <Text
                      style={[
                        styles.tableCell,
                        { borderRightWidth: 0, paddingRight: 8, justifyContent: "center" },
                        row.achieved ? { color: "#059669", fontWeight: "700" } : styles.orangeText,
                      ]}
                    >
                      {!hasUserTime || !row.available
                        ? "--"
                        : row.achieved
                          ? `+${Math.abs(row.per50).toFixed(2)}s`
                          : `-${row.per50.toFixed(2)}s`}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <Pressable
          onPress={onBack}
          style={({ pressed }) => [
            styles.closeButton,
            pressed && styles.closeButtonPressed,
          ]}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
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

            <ScrollView contentContainerStyle={{ padding: 16 }}>
              <View style={styles.modalTable}>
                <View style={styles.modalTableHeader}>
                  <Text
                    style={[
                      styles.modalHeaderCell,
                      { textAlign: "left", flex: 0.6 },
                    ]}
                  >
                    Cut
                  </Text>
                  <Text style={[styles.modalHeaderCell, { flex: 1.2, textAlign: "left" }]}>Standard</Text>
                  <Text style={[styles.modalHeaderCell, { textAlign: "right" }]}>
                    % Imp. Needed
                  </Text>
                  <Text style={styles.modalHeaderCell}>Time Drop Needed</Text>
                  <Text style={[styles.modalHeaderCell, { paddingRight: 8, borderRightWidth: 0 }]}>Per 50</Text>
                </View>

                {improvements
                  .slice()
                  .reverse()
                  .map((row, idx) => {
                    const isLast = idx === improvements.length - 1;
                    return (
                      <View
                        key={row.cut}
                        style={[
                          styles.modalRow,
                          isLast && { borderBottomWidth: 0 },
                          row.achieved && styles.modalRowAchieved,
                        ]}
                      >
                        <Text
                          style={[
                            styles.modalCell,
                            { textAlign: "left", flex: 0.6, fontWeight: "800", fontFamily: "PublicSans-Black" },
                          ]}
                        >
                          {row.cut}
                        </Text>
                        <Text style={[styles.modalCell, { fontWeight: "700", flex: 1.2, textAlign: "left" }]}>
                          {row.available ? normalizeTimeDisplay(row.standardTime) : "—"}
                        </Text>
                        <View style={[styles.modalCell, { alignItems: "flex-end", justifyContent: "center" }]}>
                          {!hasUserTime || !row.available ? (
                            <Ionicons name="remove" size={16} color={colors.textSubtle} />
                          ) : row.achieved ? (
                            <Ionicons name="checkmark" size={16} color="#059669" />
                          ) : (
                            <Text
                              style={[
                                styles.modalValueText,
                                { textAlign: "right" },
                              ]}
                            >
                              -{row.percentage.toFixed(2)}%
                            </Text>
                          )}
                        </View>
                        <Text style={[styles.modalCell, row.achieved && { color: "#059669" }, { justifyContent: "center" }]}>
                          {!hasUserTime || !row.available
                            ? "--"
                            : row.achieved
                              ? `+${Math.abs(row.totalSeconds).toFixed(2)}s`
                              : `-${row.totalSeconds.toFixed(2)}s`}
                        </Text>
                        <Text style={[styles.modalCell, { paddingRight: 8, borderRightWidth: 0, justifyContent: "center" }, row.achieved && { color: "#059669" }]}>
                          {!hasUserTime || !row.available
                            ? "--"
                            : row.achieved
                              ? `+${Math.abs(row.per50).toFixed(2)}s`
                              : `-${row.per50.toFixed(2)}s`}
                        </Text>
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.canvas },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    backgroundColor: colors.primary,
    padding: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  backButton: { marginBottom: 16 },
  backText: { color: "#FFF0B8", fontSize: 14, fontWeight: "600" },
  title: {
    color: "white",
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    fontSize: 24,
    letterSpacing: -0.5,
  },
  subtitle: { color: "#FFF0B8", fontSize: 13, marginTop: 4, fontWeight: "500" },

  scrollContent: { padding: 16, paddingBottom: 40 },
  closeButton: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginTop: 16,
  },
  closeButtonPressed: { opacity: 0.85 },
  closeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 0,
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
  smallLabel: { fontSize: 14, color: colors.textMuted, fontWeight: "600" },
  time: {
    fontSize: 36,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    color: colors.primary,
    letterSpacing: -1,
  },
  greenAchievement: {
    color: "#059669",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    marginTop: 4,
    fontSize: 15,
  },
  orangeAchievement: {
    color: colors.primary,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    marginTop: 4,
    fontSize: 15,
  },

  chartWrapper: {
    marginBottom: 8,
  },
  chartArea: {
    height: 80,
    marginTop: 30,
    marginBottom: 50,
    position: "relative",
  },
  segmentsRow: {
    height: 80,
    width: "100%",
    borderRadius: 0,
    overflow: "hidden",
    position: "absolute",
    top: 5,
  },
  cutLineWrapper: {
    position: "absolute",
    height: 80,
    alignItems: "center",
    width: 60,
    marginLeft: -30,
  },
  cutLine: {
    width: 1.5,
    height: 80,
    backgroundColor: colors.textMuted,
    top: 5,
  },
  cutNameLabel: {
    position: "absolute",
    top: -20,
    fontSize: 10,
    fontFamily: "PublicSans-ExtraBold",
    fontWeight: "800",
    color: colors.text,
  },
  cutTimeLabel: {
    position: "absolute",
    bottom: -20,
    fontSize: 9,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    color: colors.textMuted,
  },
  userMarkerLine: {
    position: "absolute",
    height: 80,
    width: 3,
    backgroundColor: colors.danger,
    top: 5,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  userMarkerBadge: {
    backgroundColor: colors.danger,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 0,
    minWidth: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  userMarkerText: {
    color: "white",
    fontSize: 10,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
  },

  axisLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  axisText: { fontSize: 11, color: colors.textSubtle, fontFamily: "PublicSans-SemiBold", fontWeight: "600" },

  hint: {
    textAlign: "center",
    fontSize: 14,
    color: colors.textSubtle,
    marginTop: 12,
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginTop: 24,
    marginBottom: 14,
  },

  tableSection: {},
  sectionTitle: {
    fontSize: 18,
    fontFamily: "PublicSans-ExtraBold",
    fontWeight: "800",
    color: colors.text,
    marginBottom: 16,
  },
  table: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: colors.surfaceWarm,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.border,
    alignItems: "stretch",
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 9.5,
    fontWeight: "900",
    fontFamily: "PublicSans-Black",
    color: colors.textMuted,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1.5,
    borderRightColor: colors.border,
    textAlign: "right",
    justifyContent: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.border,
    alignItems: "stretch",
    backgroundColor: colors.surface,
  },
  rowAchieved: {
    backgroundColor: colors.successSoft,
  },
  tableCell: {
    flex: 1,
    fontSize: 10.5,
    color: "#000000",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1.5,
    borderRightColor: colors.border,
    textAlign: "right",
    justifyContent: "center",
  },
  redText: { color: "#000000", fontFamily: "PublicSans-Bold", fontWeight: "700" },
  orangeText: { color: "#000000", fontFamily: "PublicSans-Bold", fontWeight: "700" },
  emptyGrid: {
    backgroundColor: colors.surfaceWarm,
    padding: 16,
    borderRadius: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  emptyGridText: {
    color: colors.textMuted,
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    backgroundColor: colors.surface,
    borderRadius: 0,
    maxHeight: "80%",
    overflow: "hidden",
  },
  modalHeader: {
    backgroundColor: colors.primary,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTable: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 8,
    overflow: "hidden",
  },
  modalTableHeader: {
    flexDirection: "row",
    backgroundColor: colors.surfaceWarm,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.border,
    alignItems: "stretch",
  },
  modalHeaderCell: {
    flex: 1,
    fontSize: 9.5,
    fontWeight: "900",
    fontFamily: "PublicSans-Black",
    color: colors.textMuted,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1.5,
    borderRightColor: colors.border,
    textAlign: "right",
    justifyContent: "center",
  },
  modalRow: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.border,
    alignItems: "stretch",
    backgroundColor: colors.surface,
  },
  modalRowAchieved: {
    backgroundColor: colors.successSoft,
  },
  modalCell: {
    flex: 1,
    fontSize: 10.5,
    color: "#000000",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1.5,
    borderRightColor: colors.border,
    textAlign: "right",
    justifyContent: "center",
  },
  modalValueText: {
    fontSize: 10.5,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#000000",
  },
});
