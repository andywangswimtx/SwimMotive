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
  const padding = (rawMax - rawMin) * 0.15 || 5; // Default padding if only standards

  const maxTime = rawMax + padding;
  const minTime = rawMin - padding;
  const totalRange = maxTime - minTime;

  const getPosition = (time: number) => {
    return ((maxTime - time) / totalRange) * 100;
  };

  const eventDistance = getEventDistance(event);

  const standardImprovement = hasUserTime
    ? calculateImprovement(userSeconds!, standardTime, eventDistance, poolType)
    : null;

  const bonusImprovement = hasUserTime
    ? calculateImprovement(userSeconds!, bonusTime, eventDistance, poolType)
    : null;

  const bonusPos = getPosition(bonusTime);
  const standardPos = getPosition(standardTime);
  const userPos = hasUserTime ? getPosition(userSeconds!) : -100; // Hide off-screen if no time

  // Color mapping
  const isPurple = colorClass === "purple";

  const colors = {
    header:
      colorClass === "rose" ? "#e11d48" : isPurple ? "#7c3aed" : "#e11d48",
    primary:
      colorClass === "rose" ? "#e11d48" : isPurple ? "#7c3aed" : "#e11d48",
    midZone:
      colorClass === "rose" ? "#fecaca" : isPurple ? "#c084fc" : "#fb7185",
    fastZone: "#bbf7d0",
    user: "#ef4444",
    bonusCard: "#fff7ed",
    bonusBorder: "#fed7aa",
    standardCard: "#fff1f2",
    standardBorder: "#fecaca",
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
            {label} Cut
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
              <Text style={styles.gridLabel}>% Improvement Needed</Text>
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
                { color: hasUserTime ? colors.header : "#9ca3af" },
              ]}
            >
              {hasUserTime ? normalizeTimeDisplay(userTime) : "--:--.--"}
            </Text>

            {hasUserTime && standardImprovement?.achieved ? (
              <Text style={styles.greenAchievement}>
                ✓ {standardLabel} cut achieved!
              </Text>
            ) : hasUserTime && bonusImprovement?.achieved ? (
              <Text style={styles.blueAchievement}>
                ✓ {bonusLabel} cut achieved
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
              {/* Slower zone */}
              <View
                style={{
                  position: "absolute",
                  left: 0,
                  width: `${bonusPos}%`,
                  height: 80,
                  top: 5,
                  backgroundColor: "#f3f4f6",
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                }}
              />

              {/* Mid zone */}
              <View
                style={{
                  position: "absolute",
                  left: `${bonusPos}%`,
                  width: `${standardPos - bonusPos}%`,
                  height: 80,
                  top: 5,
                  backgroundColor: colors.midZone,
                  opacity: 0.3,
                }}
              />

              {/* Faster zone */}
              <View
                style={{
                  position: "absolute",
                  left: `${standardPos}%`,
                  right: 0,
                  height: 80,
                  top: 5,
                  backgroundColor: colors.fastZone,
                  opacity: 0.8,
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                }}
              />

              {/* Bonus Line and Label */}
              <View style={[styles.cutLineWrapper, { left: `${bonusPos}%` }]}>
                <View style={styles.cutLine} />
                <Text style={styles.cutNameLabel}>{bonusLabel}</Text>
                <Text style={styles.cutTimeLabel}>{bonusStandard}</Text>
              </View>

              {/* Standard Line and Label */}
              <View
                style={[styles.cutLineWrapper, { left: `${standardPos}%` }]}
              >
                <View style={styles.cutLine} />
                <Text style={styles.cutNameLabel}>{standardLabel}</Text>
                <Text style={styles.cutTimeLabel}>{standard}</Text>
              </View>

              {/* User marker - only show if hasUserTime */}
              {hasUserTime && (
                <View
                  style={[
                    styles.userMarkerLine,
                    { left: `${userPos}%`, backgroundColor: colors.user },
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
            </View>

            <View style={styles.axisLabels}>
              <Text style={styles.axisText}>← Slower</Text>
              <Text style={styles.axisText}>Faster →</Text>
            </View>

            <Text style={styles.hint}>Tap chart for improvement details</Text>
          </Pressable>

          <View style={styles.divider} />

          {/* Table Section */}
          <View style={styles.tableSection}>
            <Text style={styles.sectionTitle}>Improvement Needed</Text>

            <View style={styles.summaryContainer}>
              {renderSummaryItem(
                bonusLabel,
                bonusStandard,
                bonusImprovement || {
                  achieved: false,
                  percentage: 0,
                  totalSeconds: 0,
                  per50: 0,
                },
                colors.bonusCard,
                colors.bonusBorder,
                "#c2410c",
              )}
              {renderSummaryItem(
                standardLabel,
                standard,
                standardImprovement || {
                  achieved: false,
                  percentage: 0,
                  totalSeconds: 0,
                  per50: 0,
                },
                colors.standardCard,
                colors.standardBorder,
                "#be123c",
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

            <ScrollView style={{ padding: 12 }}>
              <View style={styles.modalTableHeader}>
                <Text
                  style={[
                    styles.modalHeaderCell,
                    { textAlign: "left", flex: 0.8 },
                  ]}
                >
                  Cut
                </Text>
                <Text style={styles.modalHeaderCell}>Standard</Text>
                <Text style={[styles.modalHeaderCell, { textAlign: "center" }]}>
                  % Improvement Needed
                </Text>
                <Text style={styles.modalHeaderCell}>Time Drop Needed</Text>
                <Text style={styles.modalHeaderCell}>Per 50</Text>
              </View>

              {[
                {
                  label: bonusLabel,
                  time: bonusStandard,
                  imp: bonusImprovement,
                  color: "#c2410c",
                },
                {
                  label: standardLabel,
                  time: standard,
                  imp: standardImprovement,
                  color: "#be123c",
                },
              ].map((row) => (
                <View
                  key={row.label}
                  style={[
                    styles.modalRow,
                    row.imp?.achieved && styles.modalRowAchieved,
                  ]}
                >
                  <Text
                    style={[
                      styles.modalCell,
                      { textAlign: "left", flex: 0.8, fontWeight: "800" },
                    ]}
                  >
                    {row.label}
                  </Text>
                  <Text style={[styles.modalCell, { fontWeight: "700" }]}>
                    {row.time}
                  </Text>
                  <View style={[styles.modalCell, { alignItems: "center" }]}>
                    {!hasUserTime ? (
                      <Ionicons name="remove" size={16} color="#94a3b8" />
                    ) : row.imp?.achieved ? (
                      <Ionicons name="checkmark" size={16} color="#059669" />
                    ) : (
                      <Text
                        style={[
                          styles.modalValueText,
                          {
                            color: row.color,
                            fontWeight: "700",
                            textAlign: "center",
                          },
                        ]}
                      >
                        {row.imp ? `-${row.imp.percentage.toFixed(2)}%` : "--"}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.modalCell}>
                    {!hasUserTime || row.imp?.achieved
                      ? "--"
                      : `-${row.imp?.totalSeconds.toFixed(2)}s`}
                  </Text>
                  <Text style={styles.modalCell}>
                    {!hasUserTime || row.imp?.achieved
                      ? "--"
                      : `-${row.imp?.per50.toFixed(2)}s`}
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
    padding: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  backButton: { marginBottom: 16 },
  backText: { color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: "600" },
  title: {
    color: "white",
    fontWeight: "900",
    fontSize: 24,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginTop: 4,
    fontWeight: "500",
  },

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
  time: { fontSize: 36, fontWeight: "900", letterSpacing: -1 },
  greenAchievement: {
    color: "#059669",
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
    top: -20,
    fontSize: 10,
    fontWeight: "800",
    color: "#374151",
  },
  cutTimeLabel: {
    position: "absolute",
    bottom: -20,
    fontSize: 9,
    fontWeight: "600",
    color: "#6b7280",
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
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    minWidth: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  userMarkerText: {
    color: "white",
    fontSize: 10,
    fontWeight: "900",
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
    marginTop: 24,
    marginBottom: 14,
  },

  tableSection: {},
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: 16,
  },
  summaryContainer: {
    gap: 12,
  },
  summaryCard: {
    borderRadius: 16,
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
    borderRadius: 24,
    overflow: "hidden",
  },
  modalHeader: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTableHeader: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    marginBottom: 5,
    paddingHorizontal: 12,
  },
  modalHeaderCell: {
    flex: 1,
    fontSize: 11,
    fontWeight: "900",
    color: "#374151",
    textAlign: "right",
    paddingHorizontal: 2,
  },
  modalRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#f1f5f9",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  modalRowAchieved: {
    backgroundColor: "#f0fdf4",
  },
  modalCell: {
    flex: 1,
    fontSize: 12,
    color: "#4b5563",
    textAlign: "right",
    paddingHorizontal: 2,
    justifyContent: "center",
  },
  modalValueText: {
    fontSize: 12,
  },
});
