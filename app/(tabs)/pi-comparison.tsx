import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Gender = "Boy" | "Girl";
type Course = "SCY" | "LCM";

const OLD_BASE_TIMES: Record<Gender, Record<Course, Record<string, string>>> = {
  Boy: {
    SCY: {
      "50 Free": "19.49",
      "100 Free": "42.69",
      "200 Free": "1:34.09",
      "500 Free": "4:13.39",
      "1000 Free": "8:50.99",
      "1650 Free": "14:45.99",
      "50 Back": "21.29",
      "100 Back": "46.39",
      "200 Back": "1:41.49",
      "50 Breast": "24.19",
      "100 Breast": "52.59",
      "200 Breast": "1:53.99",
      "50 Fly": "20.99",
      "100 Fly": "46.09",
      "200 Fly": "1:42.99",
      "100 IM": "47.29",
      "200 IM": "1:43.99",
      "400 IM": "3:44.99"
    },
    LCM: {
      "50 Free": "22.19",
      "100 Free": "48.29",
      "200 Free": "1:47.49",
      "400 Free": "3:47.09",
      "800 Free": "7:45.29",
      "1500 Free": "15:05.09",
      "50 Back": "23.84",
      "100 Back": "53.49",
      "200 Back": "1:56.59",
      "50 Breast": "27.09",
      "100 Breast": "1:00.89",
      "200 Breast": "2:11.59",
      "50 Fly": "23.69",
      "100 Fly": "52.19",
      "200 Fly": "1:57.09",
      "200 IM": "1:58.89",
      "400 IM": "4:16.39"
    }
  },
  Girl: {
    SCY: {
      "50 Free": "22.09",
      "100 Free": "48.39",
      "200 Free": "1:44.79",
      "500 Free": "4:40.29",
      "1000 Free": "9:39.99",
      "1650 Free": "16:11.89",
      "50 Back": "24.29",
      "100 Back": "52.09",
      "200 Back": "1:53.89",
      "50 Breast": "27.69",
      "100 Breast": "59.79",
      "200 Breast": "2:09.39",
      "50 Fly": "23.99",
      "100 Fly": "51.99",
      "200 Fly": "1:55.89",
      "100 IM": "52.99",
      "200 IM": "1:56.49",
      "400 IM": "4:09.89"
    },
    LCM: {
      "50 Free": "24.99",
      "100 Free": "54.29",
      "200 Free": "1:58.69",
      "400 Free": "4:11.79",
      "800 Free": "8:23.69",
      "1500 Free": "16:34.89",
      "50 Back": "27.20",
      "100 Back": "59.89",
      "200 Back": "2:10.59",
      "50 Breast": "31.01",
      "100 Breast": "1:08.79",
      "200 Breast": "2:28.29",
      "50 Fly": "26.69",
      "100 Fly": "58.69",
      "200 Fly": "2:10.39",
      "200 IM": "2:12.29",
      "400 IM": "4:42.99"
    }
  }
};

const NEW_BASE_TIMES: Record<Gender, Record<Course, Record<string, string>>> = {
  Boy: {
    SCY: {
      "50 Free": "19.49",
      "100 Free": "42.39",
      "200 Free": "1:33.19",
      "500 Free": "4:15.09",
      "1000 Free": "8:50.99",
      "1650 Free": "14:45.99",
      "50 Back": "21.39",
      "100 Back": "46.19",
      "200 Back": "1:41.29",
      "50 Breast": "24.35",
      "100 Breast": "52.69",
      "200 Breast": "1:53.99",
      "50 Fly": "21.09",
      "100 Fly": "46.09",
      "200 Fly": "1:42.99",
      "100 IM": "47.89",
      "200 IM": "1:43.89",
      "400 IM": "3:43.19"
    },
    LCM: {
      "50 Free": "22.19",
      "100 Free": "48.09",
      "200 Free": "1:46.39",
      "400 Free": "3:47.09",
      "800 Free": "7:45.29",
      "1500 Free": "15:04.49",
      "50 Back": "24.79",
      "100 Back": "53.39",
      "200 Back": "1:56.79",
      "50 Breast": "27.39",
      "100 Breast": "1:00.89",
      "200 Breast": "2:11.09",
      "50 Fly": "23.59",
      "100 Fly": "51.99",
      "200 Fly": "1:56.79",
      "200 IM": "1:59.29",
      "400 IM": "4:14.69"
    }
  },
  Girl: {
    SCY: {
      "50 Free": "22.09",
      "100 Free": "48.19",
      "200 Free": "1:44.69",
      "500 Free": "4:40.39",
      "1000 Free": "9:39.99",
      "1650 Free": "16:11.89",
      "50 Back": "24.29",
      "100 Back": "51.99",
      "200 Back": "1:53.59",
      "50 Breast": "27.85",
      "100 Breast": "59.69",
      "200 Breast": "2:09.59",
      "50 Fly": "23.87",
      "100 Fly": "51.99",
      "200 Fly": "1:55.89",
      "100 IM": "54.09",
      "200 IM": "1:56.49",
      "400 IM": "4:09.59"
    },
    LCM: {
      "50 Free": "25.09",
      "100 Free": "54.19",
      "200 Free": "1:58.59",
      "400 Free": "4:11.79",
      "800 Free": "8:23.69",
      "1500 Free": "16:34.89",
      "50 Back": "28.09",
      "100 Back": "59.79",
      "200 Back": "2:10.19",
      "50 Breast": "31.19",
      "100 Breast": "1:08.59",
      "200 Breast": "2:28.29",
      "50 Fly": "26.59",
      "100 Fly": "58.49",
      "200 Fly": "2:10.39",
      "200 IM": "2:12.59",
      "400 IM": "4:42.69"
    }
  }
};

function parseTimeString(timeStr: string): number | null {
  if (!timeStr) return null;
  const cleaned = timeStr.trim();
  const parts = cleaned.split(":").reverse();
  let totalSeconds = 0;

  const seconds = parseFloat(parts[0]);
  if (Number.isNaN(seconds)) return null;
  totalSeconds += seconds;

  if (parts.length > 1) {
    const minutes = parseInt(parts[1], 10);
    if (Number.isNaN(minutes)) return null;
    totalSeconds += minutes * 60;
  }

  return totalSeconds;
}

export default function PIComparisonScreen() {
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState<Gender>("Boy");
  const [course, setCourse] = useState<Course>("SCY");

  const events = useMemo(() => {
    return Object.keys(OLD_BASE_TIMES[gender][course]);
  }, [gender, course]);

  const compareTimes = (eventName: string) => {
    const oldStr = OLD_BASE_TIMES[gender][course][eventName] || "--";
    const newStr = NEW_BASE_TIMES[gender][course][eventName] || "--";

    if (oldStr === "--" || newStr === "--") {
      return { oldStr, newStr, diffText: "Unchanged", type: "unchanged" };
    }

    if (oldStr === newStr) {
      return { oldStr, newStr, diffText: "Unchanged", type: "unchanged" };
    }

    const oldSec = parseTimeString(oldStr);
    const newSec = parseTimeString(newStr);

    if (oldSec === null || newSec === null) {
      return { oldStr, newStr, diffText: "Unchanged", type: "unchanged" };
    }

    const diff = newSec - oldSec;

    if (Math.abs(diff) < 0.005) {
      return { oldStr, newStr, diffText: "Unchanged", type: "unchanged" };
    }

    if (diff < 0) {
      return {
        oldStr,
        newStr,
        diffText: `-${Math.abs(diff).toFixed(2)}s faster`,
        type: "faster"
      };
    } else {
      return {
        oldStr,
        newStr,
        diffText: `+${diff.toFixed(2)}s slower`,
        type: "slower"
      };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header section with blue styling matching app */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) }]}>
        <Text style={styles.title}>PI Comparison</Text>
        <Text style={styles.subtitle}>Comparing Swimcloud Power Index Base Times</Text>

        <View style={styles.filterBar}>
          <View style={styles.filterRow}>
            <View style={styles.filterGroup}>
              <Pressable onPress={() => setGender("Boy")} style={[styles.filterBtn, gender === "Boy" && styles.filterBtnActive]}>
                <Text style={[styles.filterBtnText, gender === "Boy" && styles.filterBtnTextActive]}>Boy</Text>
              </Pressable>
              <Pressable onPress={() => setGender("Girl")} style={[styles.filterBtn, gender === "Girl" && styles.filterBtnActive]}>
                <Text style={[styles.filterBtnText, gender === "Girl" && styles.filterBtnTextActive]}>Girl</Text>
              </Pressable>
            </View>
            <View style={styles.filterGroup}>
              <Pressable onPress={() => setCourse("SCY")} style={[styles.filterBtn, course === "SCY" && styles.filterBtnActive]}>
                <Text style={[styles.filterBtnText, course === "SCY" && styles.filterBtnTextActive]}>SCY</Text>
              </Pressable>
              <Pressable onPress={() => setCourse("LCM")} style={[styles.filterBtn, course === "LCM" && styles.filterBtnActive]}>
                <Text style={[styles.filterBtnText, course === "LCM" && styles.filterBtnTextActive]}>LCM</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* Comparison Table */}
      <View style={{ flex: 1, margin: 16, borderRadius: 8, overflow: "hidden", borderWidth: 1.5, borderColor: "#cbd5e1", backgroundColor: "white" }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {/* Table Header Row */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadCell, { flex: 2 }]}>Event</Text>
            <Text style={[styles.tableHeadCell, { flex: 1.2, textAlign: "center" }]}>Old</Text>
            <Text style={[styles.tableHeadCell, { flex: 1.2, textAlign: "center" }]}>New</Text>
            <Text style={[styles.tableHeadCell, { flex: 2, textAlign: "center", borderRightWidth: 0 }]}>Difference</Text>
          </View>

          {/* Table Data Rows */}
          {events.map((eventName, idx) => {
            const { oldStr, newStr, diffText, type } = compareTimes(eventName);
            const isLast = idx === events.length - 1;

            const diffColor =
              type === "faster"
                ? "#059669" // Green
                : type === "slower"
                ? "#dc2626" // Red
                : "#64748b"; // Slate Grey

            return (
              <View key={eventName} style={[styles.tableRow, isLast && { borderBottomWidth: 0 }]}>
                <Text style={[styles.tableCell, { flex: 2 }]}>{eventName}</Text>
                <Text style={[styles.tableCell, { flex: 1.2, textAlign: "center", color: "#475569" }]}>{oldStr}</Text>
                <Text style={[styles.tableCell, { flex: 1.2, textAlign: "center", color: "#1e293b", fontFamily: "PublicSans-Bold", fontWeight: "700" }]}>{newStr}</Text>
                <View style={[styles.tableCell, { flex: 2, justifyContent: "center", alignItems: "center", borderRightWidth: 0 }]}>
                  <Text style={{ fontSize: 13, color: diffColor, fontFamily: "PublicSans-Bold", fontWeight: "700" }}>
                    {diffText}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f5f9" },
  header: {
    backgroundColor: "#0044ee",
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  title: { fontSize: 24, fontWeight: "900", color: "white", fontFamily: "PublicSans-Black" },
  subtitle: { fontSize: 13, color: "#93c5fd", marginTop: 4, fontFamily: "PublicSans-Medium" },
  filterBar: { marginTop: 15, width: "100%" },
  filterRow: { flexDirection: "row", gap: 8, width: "100%" },
  filterGroup: { flex: 1, flexDirection: "row", gap: 2, backgroundColor: "rgba(0,0,0,0.1)", padding: 3, borderRadius: 0 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: 0, alignItems: "center", justifyContent: "center" },
  filterBtnActive: { backgroundColor: "white" },
  filterBtnText: { color: "#c7d2fe", fontSize: 13, fontWeight: "700", fontFamily: "PublicSans-Bold" },
  filterBtnTextActive: { color: "#0044ee" },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8fafc",
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    alignItems: "stretch",
  },
  tableHeadCell: {
    fontSize: 12,
    fontWeight: "800",
    color: "#475569",
    letterSpacing: 0.5,
    fontFamily: "PublicSans-ExtraBold",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRightWidth: 1.5,
    borderRightColor: "#cbd5e1",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    alignItems: "stretch",
    backgroundColor: "white",
  },
  tableCell: {
    fontSize: 13,
    color: "#334155",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRightWidth: 1.5,
    borderRightColor: "#cbd5e1",
    fontFamily: "PublicSans-SemiBold",
    justifyContent: "center",
  },
});
