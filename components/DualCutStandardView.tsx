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
import { colors as palette } from "../theme/colors";
import { getEventDisplayName, PoolType } from "../utils/dataManager";
import {
    calculateImprovement,
    getEventDistance,
    normalizeTimeDisplay,
    secondsToTime,
    timeToSeconds,
} from "../utils/timeConverter";

export interface CutDefinition {
  id: string;
  label: string;
  time: string;
}

interface Props {
  meetName: string;
  cuts: CutDefinition[];
  userTime: string;
  event: string;
  gender: string;
  ageGroup: string;
  poolType: PoolType;
  themeColor: string;
  onBack: () => void;
}

export default function DualCutStandardView({
  meetName,
  cuts,
  userTime,
  event,
  gender,
  ageGroup,
  poolType,
  themeColor,
  onBack,
}: Props) {
  const insets = useSafeAreaInsets();
  const [showPopup, setShowPopup] = useState(false);

  const userSeconds = timeToSeconds(userTime);
  const hasUserTime = !!userSeconds;

  const validCuts = cuts
    .map((cut) => ({ ...cut, seconds: timeToSeconds(cut.time) }))
    .filter((cut): cut is CutDefinition & { seconds: number } => cut.seconds !== null);

  // Fastest (hardest) first, slowest (easiest) last.
  const sortedCuts = [...validCuts].sort((a, b) => a.seconds - b.seconds);
  const easiestCut = sortedCuts[sortedCuts.length - 1];

  const eventDistance = getEventDistance(event);
  const minRange = (eventDistance / 50.0) * 1.0;

  const cutSeconds = validCuts.map((c) => c.seconds);
  const allTimes = hasUserTime ? [userSeconds!, ...cutSeconds] : cutSeconds;
  const rawMax = Math.max(...allTimes);
  const rawMin = Math.min(...allTimes);

  const range = rawMax - rawMin;
  const leftBuffer = Math.max(range * 0.15, minRange * 0.5);
  const rightBuffer = Math.max(range * 0.04, minRange * 0.2);

  let maxTime = rawMax + leftBuffer;
  let minTime = rawMin - rightBuffer;

  if (maxTime - minTime < minRange) {
    const mid = (maxTime + minTime) / 2;
    maxTime = mid + minRange / 2;
    minTime = mid - minRange / 2;
  }
  const totalRange = maxTime - minTime;

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

  const getPosition = (time: number) => ((maxTime - time) / totalRange) * 100;

  const finalTicks = ticks.filter((t) => {
    const pos = getPosition(t);
    return pos > 5 && pos < 95;
  });
  finalTicks.push(maxTime, minTime);

  const userPos = hasUserTime ? getPosition(userSeconds!) : -100;
  const zoneSplitPos = easiestCut ? getPosition(easiestCut.seconds) : 0;

  // Best (fastest) cut the swimmer has already achieved, if any.
  const achievedCut = hasUserTime
    ? sortedCuts.find((cut) => userSeconds! <= cut.seconds)
    : undefined;

  const hexToRgba = (hex: string, alpha: number): string => {
    const cleanHex = hex.replace("#", "");
    let r = 0, g = 0, b = 0;
    if (cleanHex.length === 3) {
      r = parseInt(cleanHex[0] + cleanHex[0], 16);
      g = parseInt(cleanHex[1] + cleanHex[1], 16);
      b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
      r = parseInt(cleanHex.substring(0, 2), 16);
      g = parseInt(cleanHex.substring(2, 4), 16);
      b = parseInt(cleanHex.substring(4, 6), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const colors = {
    header: palette.primary,
    primary: themeColor,
    zone: themeColor,
    cardBg: hexToRgba(themeColor, 0.06),
    cardBorder: hexToRgba(themeColor, 0.22),
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: colors.header, paddingTop: Math.max(insets.top, 24) },
        ]}
      >
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back to Selection Page</Text>
        </Pressable>

        <Text style={styles.title}>{meetName}</Text>
        <Text style={styles.subtitle}>
          {gender} · {ageGroup} · {poolType} · {getEventDisplayName(event)}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {/* User time */}
          <View style={styles.achievementContainer}>
            <Text style={styles.smallLabel}>Your Time</Text>
            <Text style={[styles.time, { color: hasUserTime ? "#000000" : "#9ca3af" }]}>
              {hasUserTime ? normalizeTimeDisplay(userTime) : "--:--.--"}
            </Text>

            {hasUserTime && achievedCut ? (
              <Text style={styles.greenAchievement}>✓ {achievedCut.label} achieved</Text>
            ) : hasUserTime ? (
              <Text style={styles.orangeAchievement}>Working towards qualifying</Text>
            ) : (
              <Text style={[styles.orangeAchievement, { color: palette.textSubtle }]}>
                Benchmark comparison
              </Text>
            )}
          </View>

          {/* Chart area */}
          <Pressable style={styles.chartWrapper} onPress={() => setShowPopup(true)}>
            <View style={styles.chartArea}>
              <View style={{ position: "absolute", left: 8, right: 8, top: 0, bottom: 0 }}>
                {/* Colored Segments (The Bar) */}
                <View
                  style={{
                    position: "absolute",
                    left: -8,
                    right: `${100 - Number(zoneSplitPos)}%`,
                    height: 80,
                    top: 5,
                    backgroundColor: "#f3f4f6",
                    zIndex: 1,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    left: `${zoneSplitPos}%`,
                    right: -8,
                    height: 80,
                    top: 5,
                    backgroundColor: colors.zone,
                    opacity: 0.55,
                    zIndex: 0,
                  }}
                />

                {/* Cut lines and labels */}
                {validCuts.map((cut, idx) => {
                  const pos = getPosition(cut.seconds);
                  const isOdd = idx % 2 !== 0;
                  return (
                    <View key={cut.id} style={[styles.cutLineWrapper, { left: `${pos}%` }]}>
                      <View style={styles.cutLine} />
                      <Text style={[styles.cutNameLabel, isOdd && { top: -25 }]}>{cut.label}</Text>
                      <Text style={[styles.cutTimeLabel, isOdd && { bottom: -33 }]}>
                        {normalizeTimeDisplay(cut.time)}
                      </Text>
                    </View>
                  );
                })}

                {/* User marker */}
                {hasUserTime && (
                  <View
                    style={[
                      styles.userMarkerLine,
                      { left: `${userPos}%`, backgroundColor: colors.primary, zIndex: 25 },
                    ]}
                  >
                    <View style={[styles.userMarkerBadge, { backgroundColor: colors.primary }]}>
                      <Text style={styles.userMarkerText}>YOU</Text>
                    </View>
                  </View>
                )}

                {/* Ticks */}
                {finalTicks.map((t) => {
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
                        overflow: "visible",
                        alignItems: isLeftEdge ? "flex-start" : isRightEdge ? "flex-end" : "center",
                      }}
                    >
                      <View style={{ width: 1.5, height: 12, top: 39, backgroundColor: "rgba(0,0,0,0.2)" }} />
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
                })}
              </View>
            </View>

            <View style={styles.axisLabels}>
              <Text style={styles.axisText}>← Slower</Text>
              <Text style={styles.axisText}>Faster →</Text>
            </View>

            <Text style={styles.hint}>Tap chart for details</Text>
          </Pressable>

          <View style={styles.divider} />

          {/* Improvement Needed Section */}
          <View style={styles.tableSection}>
            <Text style={styles.sectionTitle}>Improvement Needed</Text>

            {cuts.map((cut) => {
              const cutSecondsVal = timeToSeconds(cut.time);
              const improvement =
                hasUserTime && cutSecondsVal !== null
                  ? calculateImprovement(userSeconds!, cutSecondsVal, eventDistance, poolType)
                  : null;

              return (
                <View
                  key={cut.id}
                  style={[
                    styles.summaryCard,
                    { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
                  ]}
                >
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>{cut.label}</Text>
                    <Text style={styles.summaryValue}>{normalizeTimeDisplay(cut.time)}</Text>
                  </View>

                  {!hasUserTime ? (
                    <View style={styles.achievedRow}>
                      <Ionicons name="information-circle-outline" size={18} color={palette.textMuted} />
                      <Text style={{ color: palette.textMuted, marginLeft: 6, fontWeight: "600" }}>
                        Enter time to see improvement
                      </Text>
                    </View>
                  ) : improvement?.achieved ? (
                    <View style={styles.achievedRow}>
                      <Ionicons name="checkmark-circle" size={18} color="#059669" />
                      <Text style={{ color: "#059669", marginLeft: 6, fontWeight: "700" }}>Achieved</Text>
                    </View>
                  ) : (
                    <View style={styles.improvementGrid}>
                      <View style={styles.gridItem}>
                        <Text style={styles.gridLabel}>% Imp. Needed</Text>
                        <Text style={[styles.gridValue, { color: colors.primary }]}>
                          -{improvement?.percentage.toFixed(2)}%
                        </Text>
                      </View>
                      <View style={styles.gridItem}>
                        <Text style={styles.gridLabel}>Time Drop Needed</Text>
                        <Text style={[styles.gridValue, { color: colors.primary }]}>
                          -{improvement?.totalSeconds.toFixed(2)}s
                        </Text>
                      </View>
                      <View style={styles.gridItem}>
                        <Text style={styles.gridLabel}>Per 50</Text>
                        <Text style={[styles.gridValue, { color: colors.primary }]}>
                          -{improvement?.per50.toFixed(2)}s
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal visible={showPopup} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <View style={[styles.modalHeader, { backgroundColor: colors.header }]}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Qualifying Details</Text>
              <Pressable onPress={() => setShowPopup(false)}>
                <Text style={{ color: "white" }}>✕</Text>
              </Pressable>
            </View>

            <View style={{ padding: 16 }}>
              <View style={styles.modalTable}>
                <View style={styles.modalTableHeader}>
                  <Text style={[styles.modalHeaderCell, { textAlign: "left", flex: 0.8 }]}>Cut</Text>
                  <Text style={[styles.modalHeaderCell, { flex: 1.2, textAlign: "left" }]}>Standard</Text>
                  <Text style={[styles.modalHeaderCell, { textAlign: "right" }]}>% Imp. Needed</Text>
                  <Text style={styles.modalHeaderCell}>Time Drop Needed</Text>
                  <Text style={[styles.modalHeaderCell, { paddingRight: 8, borderRightWidth: 0 }]}>Per 50</Text>
                </View>

                {cuts.map((cut, idx) => {
                  const cutSecondsVal = timeToSeconds(cut.time);
                  const improvement =
                    hasUserTime && cutSecondsVal !== null
                      ? calculateImprovement(userSeconds!, cutSecondsVal, eventDistance, poolType)
                      : null;
                  const isLast = idx === cuts.length - 1;

                  return (
                    <View
                      key={cut.id}
                      style={[
                        styles.modalRow,
                        isLast && { borderBottomWidth: 0 },
                        hasUserTime && improvement?.achieved && styles.modalRowAchieved,
                      ]}
                    >
                      <Text
                        style={[
                          styles.modalCell,
                          { textAlign: "left", flex: 0.8, fontWeight: "800", fontFamily: "PublicSans-Black" },
                        ]}
                      >
                        {cut.label}
                      </Text>
                      <Text style={[styles.modalCell, { fontWeight: "700", flex: 1.2, textAlign: "left" }]}>
                        {normalizeTimeDisplay(cut.time)}
                      </Text>
                      <View style={[styles.modalCell, { alignItems: "flex-end", justifyContent: "center" }]}>
                        {!hasUserTime ? (
                          <Ionicons name="remove" size={16} color={palette.textSubtle} />
                        ) : improvement?.achieved ? (
                          <Ionicons name="checkmark" size={16} color="#059669" />
                        ) : (
                          <Text
                            style={[
                              styles.modalValueText,
                              { color: "#000000", fontWeight: "700", fontFamily: "PublicSans-Bold", textAlign: "right" },
                            ]}
                          >
                            {improvement ? `-${improvement.percentage.toFixed(2)}%` : "--"}
                          </Text>
                        )}
                      </View>
                      <Text
                        style={[
                          styles.modalCell,
                          { justifyContent: "center" },
                          improvement?.achieved && { color: "#059669" },
                        ]}
                      >
                        {!hasUserTime || !improvement
                          ? "--"
                          : improvement.achieved
                            ? `+${Math.abs(improvement.totalSeconds).toFixed(2)}s`
                            : `-${improvement.totalSeconds.toFixed(2)}s`}
                      </Text>
                      <Text
                        style={[
                          styles.modalCell,
                          { paddingRight: 8, borderRightWidth: 0, justifyContent: "center" },
                          improvement?.achieved && { color: "#059669" },
                        ]}
                      >
                        {!hasUserTime || !improvement
                          ? "--"
                          : improvement.achieved
                            ? `+${Math.abs(improvement.per50).toFixed(2)}s`
                            : `-${improvement.per50.toFixed(2)}s`}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.canvas },
  header: {
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
  subtitle: {
    color: "#FFF0B8",
    fontSize: 13,
    marginTop: 4,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
  },

  scrollContent: { padding: 16, paddingBottom: 40 },

  card: {
    backgroundColor: palette.surface,
    borderRadius: 0,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },

  achievementContainer: { alignItems: "center", marginBottom: 24 },
  smallLabel: { fontSize: 14, color: palette.textMuted, fontFamily: "PublicSans-SemiBold", fontWeight: "600" },
  time: { fontSize: 36, fontFamily: "PublicSans-Black", fontWeight: "900", letterSpacing: -1 },
  greenAchievement: { color: "#059669", fontFamily: "PublicSans-Bold", fontWeight: "700", marginTop: 4, fontSize: 15 },
  orangeAchievement: { color: "#d97706", fontFamily: "PublicSans-Bold", fontWeight: "700", marginTop: 4, fontSize: 15 },
  achievedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    paddingVertical: 8,
    backgroundColor: palette.surfaceWarm,
    borderRadius: 0,
  },

  chartWrapper: { marginBottom: 8 },
  chartArea: { height: 80, marginTop: 30, marginBottom: 50, position: "relative" },
  cutLineWrapper: {
    position: "absolute",
    height: 80,
    alignItems: "center",
    width: 70,
    marginLeft: -35,
  },
  cutLine: { width: 1.5, height: 80, backgroundColor: palette.textMuted, top: 5 },
  cutNameLabel: {
    position: "absolute",
    top: -11,
    fontSize: 10,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    color: palette.text,
  },
  cutTimeLabel: {
    position: "absolute",
    bottom: -19,
    fontSize: 10,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: palette.textMuted,
  },
  userMarkerLine: {
    position: "absolute",
    height: 80,
    width: 3,
    top: 5,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  userMarkerBadge: {
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 0,
    minWidth: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  userMarkerText: { color: "white", fontSize: 8, fontFamily: "PublicSans-Black", fontWeight: "900" },

  axisLabels: { flexDirection: "row", justifyContent: "space-between", marginTop: 4 },
  axisText: { fontSize: 11, color: palette.textSubtle, fontFamily: "PublicSans-SemiBold", fontWeight: "600" },

  hint: {
    textAlign: "center",
    fontSize: 12,
    color: palette.textSubtle,
    marginTop: 12,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
  },

  divider: { height: 1, backgroundColor: palette.divider, marginTop: 24, marginBottom: 14 },

  tableSection: {},
  sectionTitle: {
    fontSize: 18,
    fontFamily: "PublicSans-ExtraBold",
    fontWeight: "800",
    color: palette.text,
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: palette.surfaceWarm,
    borderRadius: 0,
    padding: 16,
    borderWidth: 1,
    borderColor: palette.divider,
    marginBottom: 12,
  },
  summaryRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  summaryLabel: { color: palette.textMuted, fontFamily: "PublicSans-SemiBold", fontWeight: "600", fontSize: 14 },
  summaryValue: { color: palette.text, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", fontSize: 18 },

  improvementGrid: { flexDirection: "row", borderTopWidth: 1, borderColor: palette.divider, paddingTop: 12 },
  gridItem: { flex: 1, alignItems: "center" },
  gridLabel: {
    fontSize: 10,
    color: palette.textMuted,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    marginBottom: 2,
  },
  gridValue: { fontSize: 13, fontFamily: "PublicSans-Bold", fontWeight: "700", color: palette.text },

  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", padding: 16 },
  modal: { backgroundColor: palette.surface, borderRadius: 0, overflow: "hidden" },
  modalHeader: { padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  modalTable: {
    backgroundColor: palette.surface,
    borderWidth: 1.5,
    borderColor: palette.border,
    borderRadius: 8,
    overflow: "hidden",
  },
  modalTableHeader: {
    flexDirection: "row",
    backgroundColor: palette.surfaceWarm,
    borderBottomWidth: 1.5,
    borderBottomColor: palette.border,
    alignItems: "stretch",
  },
  modalHeaderCell: {
    flex: 1,
    fontSize: 9.5,
    fontWeight: "900",
    fontFamily: "PublicSans-Black",
    color: palette.textMuted,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1.5,
    borderRightColor: palette.border,
    textAlign: "right",
    justifyContent: "center",
  },
  modalRow: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: palette.border,
    alignItems: "stretch",
    backgroundColor: palette.surface,
  },
  modalRowAchieved: { backgroundColor: palette.successSoft },
  modalCell: {
    flex: 1,
    fontSize: 10.5,
    color: "#000000",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1.5,
    borderRightColor: palette.border,
    textAlign: "right",
    justifyContent: "center",
  },
  modalValueText: { fontSize: 10.5, fontFamily: "PublicSans-Bold", fontWeight: "700", color: "#000000" },
});
