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
import { getEventDisplayName } from "../utils/dataManager";
import {
  calculateImprovement,
  getEventDistance,
  normalizeTimeDisplay,
  secondsToTime,
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
  themeColor: string;
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
  themeColor,
  onBack,
}: Props) {
  const insets = useSafeAreaInsets();
  const [showPopup, setShowPopup] = useState(false);

  const userSeconds = timeToSeconds(userTime);
  const hasUserTime = !!userSeconds;

  const standardTime = timeToSeconds(standard)!;
  const bonusTime = timeToSeconds(bonusStandard)!;

  const allTimes = hasUserTime
    ? [userSeconds, standardTime, bonusTime]
    : [standardTime, bonusTime];
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

  const standardImprovement = hasUserTime
    ? calculateImprovement(userSeconds!, standardTime, eventDistance, poolType)
    : null;

  const bonusImprovement = hasUserTime
    ? calculateImprovement(userSeconds!, bonusTime, eventDistance, poolType)
    : null;

  const bonusPos = getPosition(bonusTime);
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
    header: "#0044ee",
    primary: themeColor,
    midZone: themeColor,
    fastZone: themeColor,
    user: "#ef4444",
    bonusCard: hexToRgba(themeColor, 0.05),
    bonusBorder: hexToRgba(themeColor, 0.18),
    standardCard: hexToRgba(themeColor, 0.09),
    standardBorder: hexToRgba(themeColor, 0.28),
  };

  const renderSummaryItem = (
    label: string,
    time: string,
    improvement: ReturnType<typeof calculateImprovement>,
    bgColor: string,
    borderColor: string,
    valColor: string,
  ) => {
    return (
      <View
        style={[
          styles.summaryCard,
          { backgroundColor: bgColor, borderColor: borderColor },
        ]}
      >
        <View style={styles.summaryRow}>
          <Text
            style={[styles.summaryLabel, { fontSize: 18, color: "#111827" }]}
          >
            {label.toLowerCase().includes("cut") ? label : `${label} Cut`}
          </Text>
          <Text style={[styles.summaryValue, { color: "#4b5563" }]}>
            {time}
          </Text>
        </View>

        {!hasUserTime ? (
          <View style={styles.achievedRow}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#64748b"
            />
            <Text style={[styles.greenAchievementText, { color: "#64748b" }]}>
              Enter time to compare
            </Text>
          </View>
        ) : improvement?.achieved ? (
          <View style={styles.achievedRow}>
            <Ionicons name="checkmark-circle" size={20} color="#059669" />
            <Text style={styles.greenAchievementText}>Achieved</Text>
          </View>
        ) : improvement ? (
          <View style={styles.improvementGrid}>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>% Imp. Needed</Text>
              <Text style={[styles.gridValue, { color: valColor }]}>
                -{improvement.percentage.toFixed(2)}%
              </Text>
            </View>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>Time Drop Needed</Text>
              <Text style={[styles.gridValue, { color: valColor }]}>
                -{improvement.totalSeconds.toFixed(2)}s
              </Text>
            </View>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>Per 50</Text>
              <Text style={[styles.gridValue, { color: valColor }]}>
                -{improvement.per50.toFixed(2)}s
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    );
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

            {hasUserTime && standardImprovement?.achieved ? (
              <Text style={styles.greenAchievement}>
                ✓ {standardLabel.toLowerCase().includes("cut") ? standardLabel : `${standardLabel} cut`} achieved!
              </Text>
            ) : hasUserTime && bonusImprovement?.achieved ? (
              <Text style={styles.blueAchievement}>
                ✓ {bonusLabel.toLowerCase().includes("cut") ? bonusLabel : `${bonusLabel} cut`} achieved
              </Text>
            ) : hasUserTime ? (
              <Text style={[styles.orangeAchievement, { color: "#f97316" }]}>
                Working towards qualifying
              </Text>
            ) : (
              <Text style={[styles.orangeAchievement, { color: "#94a3b8" }]}>
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
              {/* All elements now share the same 8px inset coordinate system */}
              <View style={{ position: "absolute", left: 8, right: 8, top: 0, bottom: 0 }}>
                {/* Colored Segments (The Bar) - Anchored for perfect alignment */}
                <View
                  style={{
                    position: "absolute",
                    left: -8, // Overhang
                    right: `${100 - Number(bonusPos)}%`, // Anchor exactly to the bonus line
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
                    left: `${bonusPos}%`, // Start at bonus line
                    right: `${100 - Number(standardPos)}%`, // Anchor exactly to the standard line
                    height: 80,
                    top: 5,
                    backgroundColor: colors.midZone, // Purple
                    opacity: 0.3,
                    zIndex: 2,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    left: `${standardPos}%`, // Start at standard line
                    right: -8, // Overhang
                    height: 80,
                    top: 5,
                    backgroundColor: colors.fastZone, // Green
                    opacity: 0.55,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    zIndex: 0,
                  }}
                />

                {/* Bonus Line and Label */}
                {(() => {
                  const isOverlapping = Math.abs(bonusPos - standardPos) < 14;
                  const isOlympic = meetName === "LA28 Olympic Games";
                  return (
                    <View style={[styles.cutLineWrapper, { left: `${bonusPos}%` }]}>
                      <View style={styles.cutLine} />
                      <Text style={[styles.cutNameLabel, isOverlapping && { top: -24 }]}>
                        {isOlympic ? "B cut" : (bonusLabel === "18U Bonus" ? "18U Bonus" : "Bonus")}
                      </Text>
                      <Text style={[styles.cutTimeLabel, isOverlapping && { bottom: -32 }]}>
                        {normalizeTimeDisplay(bonusStandard)}
                      </Text>
                    </View>
                  );
                })()}

                {/* Standard Line and Label */}
                <View
                  style={[styles.cutLineWrapper, { left: `${standardPos}%` }]}
                >
                  <View style={styles.cutLine} />
                  <Text style={styles.cutNameLabel}>
                    {meetName === "LA28 Olympic Games" ? "A cut" : "Cut"}
                  </Text>
                  <Text style={styles.cutTimeLabel}>{normalizeTimeDisplay(standard)}</Text>
                </View>

                {/* User marker */}
                {hasUserTime && (
                  <View
                    style={[
                      styles.userMarkerLine,
                      { left: `${userPos}%`, backgroundColor: colors.user, zIndex: 25 },
                    ]}
                  >
                    <View
                      style={[
                        styles.userMarkerBadge,
                        { backgroundColor: colors.user },
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

          {/* Table Section */}
          <View style={styles.tableSection}>
            <Text style={styles.sectionTitle}>Improvement Needed</Text>

            <View style={styles.summaryContainer}>
              {renderSummaryItem(
                bonusLabel,
                normalizeTimeDisplay(bonusStandard),
                bonusImprovement || {
                  achieved: false,
                  percentage: 0,
                  totalSeconds: 0,
                  per50: 0,
                },
                colors.bonusCard,
                colors.bonusBorder,
                themeColor,
              )}
              {renderSummaryItem(
                standardLabel,
                normalizeTimeDisplay(standard),
                standardImprovement || {
                  achieved: false,
                  percentage: 0,
                  totalSeconds: 0,
                  per50: 0,
                },
                colors.standardCard,
                colors.standardBorder,
                themeColor,
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
                <Ionicons name="close" size={24} color="white" />
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

                {[
                  {
                    label: bonusLabel,
                    time: normalizeTimeDisplay(bonusStandard),
                    imp: bonusImprovement,
                    color: themeColor,
                  },
                  {
                    label: standardLabel,
                    time: normalizeTimeDisplay(standard),
                    imp: standardImprovement,
                    color: themeColor,
                  },
                ].map((row, idx) => {
                  const isLast = idx === 1;
                  return (
                    <View
                      key={row.label}
                      style={[
                        styles.modalRow,
                        isLast && { borderBottomWidth: 0 },
                        row.imp?.achieved && styles.modalRowAchieved,
                      ]}
                    >
                      <Text
                        style={[
                          styles.modalCell,
                          { textAlign: "left", flex: 0.8, fontWeight: "800", fontFamily: "PublicSans-Black" },
                        ]}
                      >
                        {row.label}
                      </Text>
                      <Text style={[styles.modalCell, { fontWeight: "700", flex: 1.2, textAlign: "left" }]}>
                        {row.time}
                      </Text>
                      <View style={[styles.modalCell, { alignItems: "flex-end", justifyContent: "center" }]}>
                        {!hasUserTime ? (
                          <Ionicons name="remove" size={16} color="#94a3b8" />
                        ) : row.imp?.achieved ? (
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
                            {row.imp ? `-${row.imp.percentage.toFixed(2)}%` : "--"}
                          </Text>
                        )}
                      </View>
                      <Text style={[styles.modalCell, { justifyContent: "center" }, row.imp?.achieved && { color: "#059669" }]}>
                        {!hasUserTime || !row.imp
                          ? "--"
                          : row.imp.achieved
                            ? `+${Math.abs(row.imp.totalSeconds).toFixed(2)}s`
                            : `-${row.imp.totalSeconds.toFixed(2)}s`}
                      </Text>
                      <Text style={[styles.modalCell, { paddingRight: 8, borderRightWidth: 0, justifyContent: "center" }, row.imp?.achieved && { color: "#059669" }]}>
                        {!hasUserTime || !row.imp
                          ? "--"
                          : row.imp.achieved
                            ? `+${Math.abs(row.imp.per50).toFixed(2)}s`
                            : `-${row.imp.per50.toFixed(2)}s`}
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
  container: { flex: 1, backgroundColor: "#f1f5f9" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    padding: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  backButton: { marginBottom: 16 },
  backText: { color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: "600" },
  title: {
    color: "white",
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    fontSize: 24,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginTop: 4,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
  },

  scrollContent: { padding: 16, paddingBottom: 40 },

  card: {
    backgroundColor: "white",
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
  smallLabel: { fontSize: 14, color: "#6b7280", fontFamily: "PublicSans-SemiBold", fontWeight: "600" },
  time: { fontSize: 36, fontFamily: "PublicSans-Black", fontWeight: "900", letterSpacing: -1 },
  greenAchievement: {
    color: "#059669",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    marginTop: 4,
    fontSize: 15,
  },
  blueAchievement: {
    color: "#2563eb",
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
    backgroundColor: "#4b5563",
    top: 5,
  },
  cutNameLabel: {
    position: "absolute",
    top: -11,
    fontSize: 10,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    color: "#1f2937",
  },
  cutTimeLabel: {
    position: "absolute",
    bottom: -19,
    fontSize: 10,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#4b5563",
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
  axisText: { fontSize: 11, color: "#9ca3af", fontFamily: "PublicSans-SemiBold", fontWeight: "600" },

  hint: {
    textAlign: "center",
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 12,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
    marginTop: 24,
    marginBottom: 14,
  },

  tableSection: {},
  sectionTitle: {
    fontSize: 18,
    fontFamily: "PublicSans-ExtraBold",
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: 16,
  },
  summaryContainer: {
    gap: 12,
  },
  summaryCard: {
    borderRadius: 0,
    padding: 16,
    borderWidth: 1,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  summaryLabel: { color: "#64748b", fontWeight: "600", fontSize: 14 },
  summaryValue: { color: "#1e293b", fontWeight: "800", fontSize: 18 },

  achievedRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  greenAchievementText: {
    color: "#059669",
    fontWeight: "700",
    marginLeft: 6,
    fontSize: 14,
  },

  improvementGrid: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    paddingTop: 12,
  },
  gridItem: { flex: 1, alignItems: "center" },
  gridLabel: {
    fontSize: 10,
    color: "#64748b",
    fontWeight: "600",
    marginBottom: 2,
  },
  gridValue: { fontSize: 13, fontWeight: "700", color: "#334155" },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    backgroundColor: "white",
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
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    overflow: "hidden",
  },
  modalTableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8fafc",
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    alignItems: "stretch",
  },
  modalHeaderCell: {
    flex: 1,
    fontSize: 9.5,
    fontWeight: "900",
    fontFamily: "PublicSans-Black",
    color: "#475569",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1.5,
    borderRightColor: "#cbd5e1",
    textAlign: "right",
    justifyContent: "center",
  },
  modalRow: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    alignItems: "stretch",
    backgroundColor: "white",
  },
  modalRowAchieved: {
    backgroundColor: "#f0fdf4",
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
    borderRightColor: "#cbd5e1",
    textAlign: "right",
    justifyContent: "center",
  },
  modalValueText: {
    fontSize: 10.5,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#000000",
  },});

