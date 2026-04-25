import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  calculatePowerIndex,
  EventName,
  formatTime,
  getSwimData,
  interpolateTimeFromScore,
  interpretScore,
  parseTimeString,
  SCORE_HEADERS,
} from "../utils/PowerIndex";
import type { Gender } from "../utils/dataManager";
import { calculateImprovement, getEventDistance, normalizeTimeDisplay } from "../utils/timeConverter";

export type PowerIndexViewProps = {
  gender: Gender;
  powerIndexEvent: EventName;
  time: string;
};

const CATEGORY_STYLES: Record<
  string,
  {
    bg: string;
    text: string;
    border: string;
    icon: string;
    iconLib: "Ionicons" | "MaterialCommunityIcons";
  }
> = {
  elite: {
    bg: "#fffbeb",
    text: "#b45309",
    border: "#f59e0b",
    icon: "medal",
    iconLib: "Ionicons",
  },
  top: {
    bg: "#eff6ff",
    text: "#1d4ed8",
    border: "#3b82f6",
    icon: "flash",
    iconLib: "Ionicons",
  },
  competitive: {
    bg: "#ffffff",
    text: "#059669",
    border: "#10b981",
    icon: "swim",
    iconLib: "MaterialCommunityIcons",
  },
  developing: {
    bg: "#ffffff",
    text: "#d97706",
    border: "#fbbf24",
    icon: "trending-up",
    iconLib: "Ionicons",
  },
  base: {
    bg: "#ffffff",
    text: "#4b5563",
    border: "#9ca3af",
    icon: "water",
    iconLib: "Ionicons",
  },
  offchart: {
    bg: "#fff1f2",
    text: "#be123c",
    border: "#f43f5e",
    icon: "alert-circle",
    iconLib: "Ionicons",
  },
};

export default function PowerIndexView({
  gender,
  powerIndexEvent,
  time,
}: PowerIndexViewProps) {
  const piGender = gender === "Boy" ? "Boy" : "Girl";

  const parsedSeconds = useMemo(() => parseTimeString(time), [time]);

  const result = useMemo(() => {
    if (parsedSeconds === null) return null;
    return calculatePowerIndex(piGender, powerIndexEvent, parsedSeconds);
  }, [piGender, powerIndexEvent, parsedSeconds]);

  const interpretation = useMemo(() => {
    if (!result) return null;
    return interpretScore(result.score);
  }, [result]);

  const style =
    result && interpretation
      ? (CATEGORY_STYLES[interpretation.category] ?? CATEGORY_STYLES.base)
      : CATEGORY_STYLES.base;

  const barPercent = result
    ? Math.max(0, Math.min(100, 100 - result.score))
    : 0;

  const [modalVisible, setModalVisible] = useState(false);

  // For the benchmarks table
  const benchmarks = useMemo(() => {
    const swimData = getSwimData(piGender);
    const referenceTimes = swimData[powerIndexEvent];
    const eventDistance = getEventDistance(powerIndexEvent);
    const poolType = powerIndexEvent.includes("SCY") ? "SCY" : "LCM";

    return SCORE_HEADERS.map((score) => {
      const targetSec = interpolateTimeFromScore(score, SCORE_HEADERS, referenceTimes);
      const imp = parsedSeconds
        ? calculateImprovement(parsedSeconds, targetSec, eventDistance, poolType)
        : null;

      return {
        score,
        timeStr: formatTime(targetSec),
        improvement: imp,
      };
    });
  }, [piGender, powerIndexEvent, parsedSeconds]);

  return (
    <View>
      <Pressable
        onPress={() => {
          if (!time || time.trim() === "") {
            Alert.alert(
              "Input Required",
              "Please enter an event and time in the time input page",
              [{ text: "OK" }]
            );
          } else {
            setModalVisible(true);
          }
        }}
        style={({ pressed }) => [
          styles.card,
          {
            backgroundColor: style.bg,
            borderColor: style.border,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.99 : 1 }],
          },
        ]}
      >
      {/* Title row */}
      <View style={styles.headerRow}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          <Text style={styles.label}>SwimCloud POWER INDEX</Text>
          <Text style={styles.subLabel}> (1 = elite, 100 = base) </Text>
        </View>
        <View style={styles.iconContainer}>
          {style.iconLib === "Ionicons" ? (
            <Ionicons name={style.icon as any} size={24} color={style.border} />
          ) : (
            <MaterialCommunityIcons
              name={style.icon as any}
              size={24}
              color={style.border}
            />
          )}
        </View>
      </View>

      {/* Score and Label */}
      <View style={styles.scoreRow}>
        <Text style={[styles.score, { color: style.text }]}>
          {result ? result.score.toFixed(1) : "— —"}
        </Text>
        <Text style={[styles.scoreLabel, { color: style.text }]}>
          {interpretation ? interpretation.label : "Enter time to see score"}
        </Text>
      </View>

      {/* Progress bar (Subtle) */}
      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${barPercent}%`,
              backgroundColor: style.border,
              opacity: 0.1,
            },
          ]}
        />
        <View
          style={[
            styles.progressFill,
            {
              position: "absolute",
              width: `${barPercent}%`,
              backgroundColor: style.border,
              height: 4,
              bottom: 0,
            },
          ]}
        />
      </View>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={[styles.modalHeader, { backgroundColor: style.border }]}>
              <Text style={styles.modalTitle}>Power Index Milestones</Text>
              <Pressable
                onPress={() => setModalVisible(false)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="close" size={24} color="white" />
              </Pressable>
            </View>

            <View style={styles.modalSubHeader}>
              <Text style={styles.modalEventText}>
                {powerIndexEvent} · {gender}
              </Text>
            </View>

            <ScrollView contentContainerStyle={styles.modalScroll}>
              <View style={styles.tableHeader}>
                <Text style={[styles.tableHeaderCell, { textAlign: "left", flex: 0.6 }]}>Index</Text>
                <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>Time</Text>
                <Text style={styles.tableHeaderCell}>% Imp.</Text>
                <Text style={styles.tableHeaderCell}>Drop</Text>
                <Text style={styles.tableHeaderCell}>Per 50</Text>
              </View>

              {benchmarks.map((row: any) => (
                <View
                  key={row.score}
                  style={[
                    styles.tableRow,
                    row.improvement?.achieved && styles.rowAchieved,
                  ]}
                >
                  <Text style={[styles.tableCell, { textAlign: "left", flex: 0.6, fontWeight: "800" }]}>
                    {row.score}
                  </Text>
                  <Text style={[styles.tableCell, { flex: 1.2, fontWeight: "700" }]}>
                    {normalizeTimeDisplay(row.timeStr)}
                  </Text>

                  <View style={[styles.tableCell, { alignItems: "flex-end" }]}>
                    {!parsedSeconds ? (
                      <Ionicons name="remove" size={16} color="#94a3b8" />
                    ) : row.improvement?.achieved ? (
                      <Ionicons name="checkmark" size={16} color="#059669" />
                    ) : (
                      <Text style={[styles.tableCellText, { color: style.text, textAlign: "right", fontWeight: "700" }]}>
                        -{row.improvement?.percentage.toFixed(2)}%
                      </Text>
                    )}
                  </View>

                  <Text style={styles.tableCell}>
                    {!parsedSeconds || row.improvement?.achieved
                      ? "--"
                      : `-${row.improvement?.totalSeconds.toFixed(2)}s`}
                  </Text>
                  <Text style={styles.tableCell}>
                    {!parsedSeconds || row.improvement?.achieved
                      ? "--"
                      : `-${row.improvement?.per50.toFixed(2)}s`}
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
  card: {
    borderRadius: 24,
    padding: 20,
    borderWidth: 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 0.5,
  },
  subLabel: {
    fontSize: 11,
    color: "#9ca3af",
    marginTop: 2,
    fontWeight: "500",
  },
  iconContainer: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 12,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: -20,
    marginBottom: 8,
  },
  score: {
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: -1,
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },
  progressBg: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    marginTop: 8,
    position: "relative",
  },
  progressFill: {
    height: "100%",
  },
  empty: {
    backgroundColor: "#f9fafb",
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  emptyText: {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 14,
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 16,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 24,
    maxHeight: "85%",
    overflow: "hidden",
  },
  modalHeader: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },
  modalSubHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f8fafc",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  modalEventText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748b",
  },
  modalScroll: {
    paddingBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 11,
    fontWeight: "900",
    color: "#475569",
    textAlign: "right",
  },
  tableRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    alignItems: "center",
  },
  rowAchieved: {
    backgroundColor: "#f0fdf4",
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    color: "#1e293b",
    textAlign: "right",
  },
  tableCellText: {
    fontSize: 12,
  },
});
