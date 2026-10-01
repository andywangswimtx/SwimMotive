import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { PowerPointsTable } from "../assets/timeData/power_points_table";
import { colors } from "../theme/colors";
import type { AgeGroup, Gender, PoolType } from "../utils/dataManager";
import { getEventDisplayName } from "../utils/dataManager";
import { calculatePowerPoint, interpretPowerPoints } from "../utils/powerPointManager";
import {
    calculateImprovement,
    getEventDistance,
    normalizeTimeDisplay,
    timeToSeconds,
} from "../utils/timeConverter";

interface PowerPointsViewProps {
  table: PowerPointsTable;
  userTime: string;
  event: string;
  gender: Gender;
  ageGroup: AgeGroup;
  poolType: PoolType;
  onBack: () => void;
}

export default function PowerPointsView({
  table,
  userTime,
  event,
  gender,
  ageGroup,
  poolType,
  onBack,
}: PowerPointsViewProps) {
  const insets = useSafeAreaInsets();
  const userSeconds = timeToSeconds(userTime);
  const hasUserTime = userSeconds !== null && userSeconds > 0;
  const eventDistance = getEventDistance(event);

  const calcResult = calculatePowerPoint(userSeconds, table);
  const { config: ppStyle, barPercent } = interpretPowerPoints(calcResult);

  // Format event display
  const eventDisplay = getEventDisplayName(event);
  const poolSuffix = poolType === "SCY" ? "Y" : "M";
  const formattedEvent = eventDisplay.replace(/^(\d+)/, `$1${poolSuffix}`);

  // Find highest achieved point level
  const achievedLevels = table.filter(
    (row) => hasUserTime && userSeconds! <= row.seconds,
  );
  const highestAchieved =
    achievedLevels.length > 0 ? achievedLevels[0] : null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 14) }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>Power Points</Text>
            <Text style={styles.headerSubtitle}>
              USA Swimming Data Hub · Age 14 & Under
            </Text>
          </View>
          <Pressable onPress={onBack} style={styles.headerBackBtn}>
            <Ionicons name="chevron-back" size={20} color="#fff" />
            <Text style={styles.headerBackText}>Back</Text>
          </Pressable>
        </View>

        {/* Context Pills */}
        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Ionicons
              name={gender === "Boy" ? "male" : "female"}
              size={12}
              color="#FFF0B8"
            />
            <Text style={styles.pillText}>{gender}</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{poolType}</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{ageGroup}</Text>
          </View>
          <View style={[styles.pill, styles.pillAccent]}>
            <Ionicons name="stopwatch" size={12} color="#fff" />
            <Text style={[styles.pillText, { color: "#fff" }]}>
              {formattedEvent}
            </Text>
          </View>
          {hasUserTime && (
            <View style={[styles.pill, styles.pillTime]}>
              <Text style={styles.pillTimeText}>
                {normalizeTimeDisplay(userTime)}
              </Text>
            </View>
          )}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Score Card */}
        <View
          style={[
            styles.ppCard,
            {
              borderColor: ppStyle.border,
            },
          ]}
        >
          {/* Title row */}
          <View style={styles.ppHeaderRow}>
            <View style={styles.ppTitleWrap}>
              <Text style={styles.ppLabel}>
                USA Swimming
                <Text style={{ fontSize: 10 }}>®</Text>
                {" POWER POINT"}
              </Text>
              <Text style={styles.ppSubLabel}>
                {" (1 = base, 1100 = elite)"}
              </Text>
            </View>
            <View style={styles.ppIconContainer}>
              {ppStyle.iconLib === "Ionicons" ? (
                <Ionicons
                  name={ppStyle.icon as any}
                  size={22}
                  color={ppStyle.border}
                />
              ) : (
                <MaterialCommunityIcons
                  name={ppStyle.icon as any}
                  size={22}
                  color={ppStyle.border}
                />
              )}
            </View>
          </View>

          {/* Score and Label row */}
          <View style={styles.ppScoreRow}>
            <Text style={[styles.ppScore, { color: ppStyle.text }]}>
              {calcResult ? calcResult.displayPoints : "— —"}
            </Text>
            <Text style={[styles.ppScoreCategory, { color: ppStyle.text }]}>
              {calcResult ? ppStyle.label : "Enter time to see score"}
            </Text>
          </View>

          {/* Progress bar */}
          <View style={styles.ppProgressBg}>
            <View
              style={[
                styles.ppProgressFill,
                {
                  width: `${barPercent}%`,
                  backgroundColor: ppStyle.border,
                },
              ]}
            />
          </View>
        </View>

        {/* Breakdown Table Section */}
        <View style={styles.tableCard}>
          <View style={styles.tableCardHeader}>
            <Text style={styles.sectionTitle}>POWER POINT LEVELS</Text>
            <Text style={styles.sectionSubtitle}>
              Descending from 1100 to 1 point
            </Text>
          </View>

          <View style={styles.table}>
            {/* Header Row */}
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.colPoint]}>
                Point
              </Text>
              <Text style={[styles.tableHeaderCell, styles.colTime]}>
                Time
              </Text>
              <Text style={[styles.tableHeaderCell, styles.colImpr]}>
                Impr %
              </Text>
              <Text style={[styles.tableHeaderCell, styles.colDrop]}>
                Drop
              </Text>
              <Text
                style={[
                  styles.tableHeaderCell,
                  styles.colPer50,
                  { borderRightWidth: 0 },
                ]}
              >
                Per 50
              </Text>
            </View>

            {/* Table Rows (1100 down to 1) */}
            {table.map((row, idx) => {
              const isLast = idx === table.length - 1;
              const achieved = hasUserTime && userSeconds! <= row.seconds;
              const isCurrentHighestAchieved =
                highestAchieved && highestAchieved.point === row.point;

              let imprText = "-";
              let dropText = "-";
              let per50Text = "-";

              if (hasUserTime) {
                if (!achieved) {
                  const impr = calculateImprovement(
                    userSeconds!,
                    row.seconds,
                    eventDistance,
                    poolType,
                  );
                  imprText = `${impr.percentage.toFixed(1)}%`;
                  dropText = `-${impr.totalSeconds.toFixed(2)}s`;
                  per50Text = `-${impr.per50.toFixed(2)}s`;
                }
              } else {
                imprText = "--";
                dropText = "--";
                per50Text = "--";
              }

              return (
                <View
                  key={row.point}
                  style={[
                    styles.tableRow,
                    isLast && { borderBottomWidth: 0 },
                    achieved && styles.rowAchieved,
                    isCurrentHighestAchieved && styles.rowCurrentLevel,
                  ]}
                >
                  {/* Point */}
                  <View style={[styles.colPoint, styles.pointCell]}>
                    {achieved && (
                      <Ionicons
                        name="checkmark-circle"
                        size={12}
                        color="#059669"
                        style={{ marginRight: 3 }}
                      />
                    )}
                    <Text
                      style={[
                        styles.tableCellText,
                        styles.pointText,
                        achieved && styles.achievedText,
                      ]}
                    >
                      {row.point}
                    </Text>
                  </View>

                  {/* Standard Time */}
                  <View style={[styles.colTime, styles.cellCenter]}>
                    <Text style={[styles.tableCellText, styles.timeText]}>
                      {normalizeTimeDisplay(row.timeDisplay)}
                    </Text>
                  </View>

                  {/* Impr % */}
                  <View style={[styles.colImpr, styles.cellCenter]}>
                    <Text
                      style={[
                        styles.tableCellText,
                        achieved ? styles.dashText : styles.redText,
                      ]}
                    >
                      {imprText}
                    </Text>
                  </View>

                  {/* Total Seconds Drop */}
                  <View style={[styles.colDrop, styles.cellCenter]}>
                    <Text
                      style={[
                        styles.tableCellText,
                        achieved ? styles.dashText : styles.redText,
                      ]}
                    >
                      {dropText}
                    </Text>
                  </View>

                  {/* Seconds Per 50 */}
                  <View
                    style={[
                      styles.colPer50,
                      styles.cellCenter,
                      { borderRightWidth: 0 },
                    ]}
                  >
                    <Text
                      style={[
                        styles.tableCellText,
                        achieved ? styles.dashText : styles.orangeText,
                      ]}
                    >
                      {per50Text}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 16,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    zIndex: 10,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    letterSpacing: -0.5,
    marginLeft: 4,
  },
  headerSubtitle: {
    color: "#FFF0B8",
    fontSize: 13,
    marginTop: 4,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    marginLeft: 4,
  },
  headerBackBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 2,
  },
  headerBackText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
  },

  // Pills
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 14,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  pillText: {
    fontSize: 12,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#FFF7D6",
  },
  pillAccent: {
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  pillTime: {
    backgroundColor: "#FFE6AD",
  },
  pillTimeText: {
    fontSize: 12,
    fontFamily: "PublicSans-ExtraBold",
    fontWeight: "800",
    color: colors.primary,
  },

  scrollContent: {
    padding: 16,
    paddingTop: 18,
    paddingBottom: 40,
  },

  // Summary Card (Screenshot Design)
  ppCard: {
    borderRadius: 0,
    padding: 20,
    borderWidth: 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 16,
  },
  ppHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  ppTitleWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  ppLabel: {
    fontSize: 14,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 0.5,
  },
  ppSubLabel: {
    fontSize: 11,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    color: "#9ca3af",
    marginTop: 2,
  },
  ppIconContainer: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  ppScoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 2,
    marginBottom: 8,
  },
  ppScore: {
    fontSize: 44,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    letterSpacing: -1,
  },
  ppScoreCategory: {
    fontSize: 20,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    marginLeft: 12,
  },
  ppProgressBg: {
    height: 6,
    borderRadius: 0,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    marginTop: 6,
    position: "relative",
  },
  ppProgressFill: {
    height: "100%",
  },

  // Table Card
  tableCard: {
    backgroundColor: colors.surface,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  tableCardHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "PublicSans-ExtraBold",
    fontWeight: "800",
    color: colors.text,
    letterSpacing: 0.8,
  },
  sectionSubtitle: {
    fontSize: 11,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    color: colors.textSubtle,
    marginTop: 2,
  },

  // Table Structure
  table: {
    borderWidth: 1,
    borderColor: colors.divider,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: colors.surfaceWarm,
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.border,
  },
  tableHeaderCell: {
    fontSize: 11,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: colors.textMuted,
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: colors.divider,
    paddingHorizontal: 4,
  },

  tableRow: {
    flexDirection: "row",
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    alignItems: "center",
  },
  rowAchieved: {
    backgroundColor: "#F0FDF4", // light green tint
  },
  rowCurrentLevel: {
    backgroundColor: "#DCFCE7", // slightly stronger green for user's level
  },

  // Column Flexes
  colPoint: {
    flex: 1.1,
    paddingLeft: 8,
  },
  colTime: {
    flex: 1.2,
  },
  colImpr: {
    flex: 1.1,
  },
  colDrop: {
    flex: 1.1,
  },
  colPer50: {
    flex: 1.1,
  },

  pointCell: {
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: colors.divider,
  },
  cellCenter: {
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: colors.divider,
    paddingHorizontal: 2,
  },

  tableCellText: {
    fontSize: 12,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
  },
  pointText: {
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    color: colors.text,
  },
  achievedText: {
    color: "#059669",
  },
  timeText: {
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: colors.text,
  },
  dashText: {
    color: "#059669",
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    fontSize: 14,
  },
  redText: {
    color: colors.danger,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
  },
  orangeText: {
    color: "#D97706",
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
  },
});
