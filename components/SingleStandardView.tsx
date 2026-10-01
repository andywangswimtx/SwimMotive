import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
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

interface Props {
  standard: string;
  meetName: string;
  standardLabel: string;
  userTime: string;
  event: string;
  gender: string;
  ageGroup: string;
  poolType: PoolType;
  themeColor: string;
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
  themeColor,
  onBack,
}: Props) {
  const insets = useSafeAreaInsets();
  const [showPopup, setShowPopup] = useState(false);

  const userSeconds = timeToSeconds(userTime);
  const hasUserTime = !!userSeconds;

  const standardTime = timeToSeconds(standard)!;

  const allTimes = hasUserTime ? [userSeconds!, standardTime] : [standardTime];
  const rawMax = Math.max(...allTimes);
  const rawMin = Math.min(...allTimes);
  // Ensure minimum scale: 1s for every 50 distance
  const eventDistance = getEventDistance(event);
  const minRange = (eventDistance / 50.0) * 1.0;
  
  // Adjust range with deliberate buffers
  const range = rawMax - rawMin;
  const leftBuffer = Math.max(range * 0.15, minRange * 0.5);
  const rightBuffer = Math.max(range * 0.04, minRange * 0.2); // 4% Zone for the right
  
  let maxTime = rawMax + leftBuffer;
  let minTime = rawMin - rightBuffer;

  if (maxTime - minTime < minRange) {
    const mid = (maxTime + minTime) / 2;
    maxTime = mid + (minRange / 2);
    minTime = mid - (minRange / 2);
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
    return pos > 5 && pos < 95; // Only keep middle ticks
  });
  finalTicks.push(maxTime, minTime);

  const improvement = hasUserTime
    ? calculateImprovement(userSeconds!, standardTime, eventDistance, poolType)
    : null;

  const standardPos = getPosition(standardTime);
  const userPos = hasUserTime ? getPosition(userSeconds!) : -100;

  // Color mapping
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
    marker: themeColor,
    cardBg: hexToRgba(themeColor, 0.06),
    cardBorder: hexToRgba(themeColor, 0.22),
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.header,
            paddingTop: Math.max(insets.top, 24),
          },
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

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {/* User time */}
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

            {hasUserTime && improvement?.achieved ? (
              <Text style={styles.greenAchievement}>
                ✓ Qualified for {standardLabel}!
              </Text>
            ) : hasUserTime ? (
              <Text style={styles.orangeAchievement}>
                Working towards qualifying
              </Text>
            ) : (
              <Text style={[styles.orangeAchievement, { color: palette.textSubtle }]}>
                Benchmark comparison
              </Text>
            )}
          </View>

          {/* Chart area */}
          <Pressable
            style={styles.chartWrapper}
            onPress={() => setShowPopup(true)}
          >
            <View style={styles.chartArea}>
              {/* All elements share the same 8px inset coordinate system */}
              <View style={{ position: "absolute", left: 8, right: 8, top: 0, bottom: 0 }}>
                {/* Colored Segments (The Bar) - Anchored for perfect alignment */}
                <View
                  style={{
                    position: "absolute",
                    left: -8, // Overhang
                    right: `${100 - Number(standardPos)}%`, // Anchor exactly to the cut line
                    height: 80,
                    top: 5,
                    backgroundColor: "#f3f4f6", // Grey
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    zIndex: 1,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    left: `${standardPos}%`, // Start at cut line
                    right: -8, // Overhang
                    height: 80,
                    top: 5,
                    backgroundColor: colors.zone, // Blue/Emerald
                    opacity: 0.55,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    zIndex: 0,
                  }}
                />

                {/* Standard Line and Label */}
                <View
                  style={[styles.cutLineWrapper, { left: `${standardPos}%` }]}
                >
                  <View style={styles.cutLine} />
                  <Text style={styles.cutNameLabel}>Cut</Text>
                  <Text style={styles.cutTimeLabel}>{normalizeTimeDisplay(standard)}</Text>
                </View>

                {/* User marker */}
                {hasUserTime && (
                  <View
                    style={[
                      styles.userMarkerLine,
                      { left: `${userPos}%`, backgroundColor: colors.primary, zIndex: 25 },
                    ]}
                  >
                    <View
                      style={[
                        styles.userMarkerBadge,
                        { backgroundColor: colors.primary },
                       ]}
                    >
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
                            top: isEdge ? 53 : 27, // Farther for edges, closer for middle
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
            </View>

            <View style={styles.axisLabels}>
              <Text style={styles.axisText}>← Slower</Text>
              <Text style={styles.axisText}>Faster →</Text>
            </View>

            <Text style={styles.hint}>Tap chart for details</Text>
          </Pressable>

          <View style={styles.divider} />

          {/* Summary table-like Section */}
          <View style={styles.tableSection}>
            <Text style={styles.sectionTitle}>Qualifying Summary</Text>

            <View style={[styles.summaryCard, { backgroundColor: colors.cardBg, borderColor: colors.cardBorder }]}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>{standardLabel} Time</Text>
                <Text style={styles.summaryValue}>{normalizeTimeDisplay(standard)}</Text>
              </View>

              {!hasUserTime ? (
                <View style={styles.achievedRow}>
                  <Ionicons
                    name="information-circle-outline"
                    size={18}
                    color={palette.textMuted}
                  />
                  <Text
                    style={{
                      color: palette.textMuted,
                      marginLeft: 6,
                      fontWeight: "600",
                    }}
                  >
                    Enter time to see improvement
                  </Text>
                </View>
              ) : (
                !improvement?.achieved && (
                  <View style={styles.improvementGrid}>
                    <View style={styles.gridItem}>
                      <Text style={styles.gridLabel}>% Imp. Needed</Text>
                      <Text
                        style={[styles.gridValue, { color: colors.primary }]}
                      >
                        -{improvement?.percentage.toFixed(2)}%
                      </Text>
                    </View>
                    <View style={styles.gridItem}>
                      <Text style={styles.gridLabel}>Time Drop Needed</Text>
                      <Text
                        style={[styles.gridValue, { color: colors.primary }]}
                      >
                        -{improvement?.totalSeconds.toFixed(2)}s
                      </Text>
                    </View>
                    <View style={styles.gridItem}>
                      <Text style={styles.gridLabel}>Per 50</Text>
                      <Text
                        style={[styles.gridValue, { color: colors.primary }]}
                      >
                        -{improvement?.per50.toFixed(2)}s
                      </Text>
                    </View>
                  </View>
                )
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

            <View style={{ padding: 16 }}>
              <View style={styles.modalTable}>
                <View style={styles.modalTableHeader}>
                  <Text
                    style={[
                      styles.modalHeaderCell,
                      { textAlign: "left", flex: 0.8 },
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

                <View
                  style={[
                    styles.modalRow,
                    { borderBottomWidth: 0 },
                    hasUserTime &&
                      improvement?.achieved &&
                      styles.modalRowAchieved,
                  ]}
                >
                  <Text
                    style={[
                      styles.modalCell,
                      { textAlign: "left", flex: 0.8, fontWeight: "800", fontFamily: "PublicSans-Black" },
                    ]}
                  >
                    {standardLabel}
                  </Text>
                  <Text style={[styles.modalCell, { fontWeight: "700", flex: 1.2, textAlign: "left" }]}>
                    {normalizeTimeDisplay(standard)}
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
                          {
                            color: "#000000",
                            fontWeight: "700",
                            fontFamily: "PublicSans-Bold",
                            textAlign: "right",
                          },
                        ]}
                      >
                        {improvement
                          ? `-${improvement.percentage.toFixed(2)}%`
                          : "--"}
                      </Text>
                    )}
                  </View>
                  <Text style={[styles.modalCell, { justifyContent: "center" }, improvement?.achieved && { color: "#059669" }]}>
                    {!hasUserTime || !improvement
                      ? "--"
                      : improvement.achieved
                        ? `+${Math.abs(improvement.totalSeconds).toFixed(2)}s`
                        : `-${improvement.totalSeconds.toFixed(2)}s`}
                  </Text>
                  <Text style={[styles.modalCell, { paddingRight: 8, borderRightWidth: 0, justifyContent: "center" }, improvement?.achieved && { color: "#059669" }]}>
                    {!hasUserTime || !improvement
                      ? "--"
                      : improvement.achieved
                        ? `+${Math.abs(improvement.per50).toFixed(2)}s`
                        : `-${improvement.per50.toFixed(2)}s`}
                  </Text>
                </View>
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
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
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

  achievementContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  smallLabel: { fontSize: 14, color: palette.textMuted, fontFamily: "PublicSans-SemiBold", fontWeight: "600" },
  time: { fontSize: 36, fontFamily: "PublicSans-Black", fontWeight: "900", letterSpacing: -1 },
  greenAchievement: {
    color: "#059669",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    marginTop: 4,
    fontSize: 15,
  },
  orangeAchievement: {
    color: "#d97706",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    marginTop: 4,
    fontSize: 15,
  },
  achievedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    paddingVertical: 8,
    backgroundColor: palette.surfaceWarm,
    borderRadius: 0,
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
    backgroundColor: palette.textMuted,
    top: 5,
  },
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
  userMarkerText: {
    color: "white",
    fontSize: 8,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
  },

  axisLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  axisText: { fontSize: 11, color: palette.textSubtle, fontFamily: "PublicSans-SemiBold", fontWeight: "600" },

  hint: {
    textAlign: "center",
    fontSize: 12,
    color: palette.textSubtle,
    marginTop: 12,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: palette.divider,
    marginTop: 24,
    marginBottom: 14,
  },

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
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  summaryLabel: { color: palette.textMuted, fontFamily: "PublicSans-SemiBold", fontWeight: "600", fontSize: 14 },
  summaryValue: { color: palette.text, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", fontSize: 18 },

  improvementGrid: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: palette.divider,
    paddingTop: 12,
  },
  gridItem: { flex: 1, alignItems: "center" },
  gridLabel: {
    fontSize: 10,
    color: palette.textMuted,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    marginBottom: 2,
  },
  gridValue: { fontSize: 13, fontFamily: "PublicSans-Bold", fontWeight: "700", color: palette.text },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    backgroundColor: palette.surface,
    borderRadius: 0,
    overflow: "hidden",
  },
  modalHeader: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
  modalRowAchieved: {
    backgroundColor: palette.successSoft,
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
    borderRightColor: palette.border,
    textAlign: "right",
    justifyContent: "center",
  },
  modalValueText: {
    fontSize: 10.5,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#000000",
  },});

