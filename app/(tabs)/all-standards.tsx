import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  DeviceEventEmitter,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../theme/colors";
import {
  AGC_SOURCES,
  agcSourceSupportsCourse,
  AgeGroup,
  Gender,
  getAGCStandard,
  getEventsForPoolType,
  getMotivationalStandards,
  getTagStandards,
  PoolType,
  tagSupportsCourse
} from "../../utils/dataManager";

const getStrokeColor = (event: string): string => {
  const ev = event.toUpperCase();
  if (ev.endsWith("_FR") || ev.endsWith(" FR") || ev.includes("FREE")) return "#754400";
  if (ev.endsWith("_BK") || ev.endsWith(" BK") || ev.includes("BACK")) return colors.primary;
  if (ev.endsWith("_BR") || ev.endsWith(" BR") || ev.includes("BREAST")) return "#8A5A00";
  if (ev.endsWith("_FL") || ev.endsWith(" FL") || ev.includes("FLY")) return "#A64000";
  if (ev.endsWith("_IM") || ev.endsWith(" IM") || ev.includes("MEDLEY")) return "#6C3B00";
  return colors.text;
};

type StandardMode = "selection" | "motivational" | `agc:${string}` | "tags";

// Distinct accent colors cycled across the AGC source entries.
const AGC_LIST_COLORS = [
  { color: colors.primaryPressed, bg: "#FFE6AD" },
  { color: "#1D6F42", bg: "#D7F2E0" },
  { color: "#1D4E89", bg: "#D6E6FA" },
  { color: "#7A3B9C", bg: "#EAD9F7" },
  { color: "#8B4513", bg: "#F3DFC6" },
  { color: "#0E7C86", bg: "#D1F0F2" },
  { color: "#A3341B", bg: "#FBDCD2" },
  { color: "#4B5D1E", bg: "#E2EBC9" },
  { color: "#B3771E", bg: "#FAE6C2" },
];

const STANDARDS_CONFIG = (() => {
  const buildAgcConfig = (source: (typeof AGC_SOURCES)[number], paletteIdx: number, icon: string = "book") => {
    const palette = AGC_LIST_COLORS[paletteIdx % AGC_LIST_COLORS.length];
    return {
      id: `agc:${source.id}` as StandardMode,
      label: source.label,
      icon,
      color: palette.color,
      bg: palette.bg,
      description: `${source.meetName} Cuts`,
      supportsCourse: (poolType: PoolType) => agcSourceSupportsCourse(source.id, poolType),
    };
  };

  const ncsaSource = AGC_SOURCES.find((s) => s.id === "ncsa");
  const otherSources = AGC_SOURCES.filter((s) => s.id !== "ncsa");

  return [
    { id: "motivational" as StandardMode, label: "USA Swimming Motivationals", icon: "globe", color: colors.primary, bg: colors.accentSoft, description: "2024–2028 Motivational Standards Level B to AAAA", supportsCourse: (_poolType: PoolType) => true },
    ...(ncsaSource ? [buildAgcConfig(ncsaSource, 0, "flag")] : []),
    { id: "tags" as StandardMode, label: "Texas AGC (TAGS)", icon: "star", color: "#A3341B", bg: "#FBDCD2", description: "2026 TAGS Championships Cuts & Bonus Cuts", supportsCourse: (poolType: PoolType) => tagSupportsCourse(poolType) },
    ...otherSources.map((source, idx) => buildAgcConfig(source, idx + 1)),
  ];
})();

export default function AllStandardsScreen() {
  const insets = useSafeAreaInsets();
  // Synchronized scroll refs and handlers removed as layout is simplified to a single vertical ScrollView.
  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("11");
  const [mode, setMode] = useState<StandardMode>("selection");
  const navigation = useNavigation<any>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      setMode("selection");
    });
    const sub = DeviceEventEmitter.addListener("reset-standards-tab", () => {
      setMode("selection");
    });
    return () => {
      unsubscribe();
      sub.remove();
    };
  }, [navigation]);

  const events = useMemo(() => getEventsForPoolType(poolType), [poolType]);

  const cleanTime = (t: any) => {
    if (typeof t !== "string") return t;
    if (!t.trim()) return "-";
    return t.startsWith(":") ? t.substring(1) : t;
  };

  const renderSelection = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.sectionTitle}>Age Group Championship (AGC) Standards</Text>
      {STANDARDS_CONFIG.map((config) => {
        const isSupported = config.supportsCourse(poolType);
        return (
          <Pressable
            key={config.id}
            onPress={() => isSupported && setMode(config.id)}
            disabled={!isSupported}
            style={[styles.listCard, !isSupported && styles.listCardDisabled]}
          >
            <View style={[styles.listIcon, { backgroundColor: isSupported ? config.bg : colors.surfaceWarm }]}>
              <Ionicons name={config.icon as any} size={22} color={isSupported ? config.color : colors.border} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.listTitle, !isSupported && styles.listTitleDisabled]}>{config.label}</Text>
              <Text style={styles.listSub}>{isSupported ? config.description : `Not available for ${poolType}`}</Text>
            </View>
            {isSupported ? (
              <View style={styles.arrowIcon}>
                <Ionicons name="chevron-forward" size={18} color={colors.border} />
              </View>
            ) : (
              <Ionicons name="lock-closed" size={16} color={colors.border} />
            )}
          </Pressable>
        );
      })}
      <Text style={styles.slcNote}>
        {"** To add your SLC standards to the app, email "}
        <Text
          style={styles.slcEmail}
          onPress={() => Linking.openURL("mailto:andywang.swimtx@gmail.com")}
        >
          andywang.swimtx@gmail.com
        </Text>
        .
      </Text>
    </ScrollView>
  );

  const renderDetail = () => {
    if (mode === "motivational") return renderMotivationalTable();
    if (mode === "tags") return renderTagsTable();
    if (mode.startsWith("agc:")) {
      const sourceId = mode.slice("agc:".length);
      const source = AGC_SOURCES.find((s) => s.id === sourceId);
      if (source) {
        return renderSingleCutTable(source.label, (evt) => getAGCStandard(source.id, gender, poolType, ageGroup, evt));
      }
    }
    return renderSelection();
  };

  const renderTagsTable = () => (
    <View style={{ flex: 1 }}>
      <View style={styles.detailHeader}>
        <Pressable onPress={() => setMode("selection")} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={colors.textMuted} />
        </Pressable>
        <Text style={styles.detailTitle}>TAGS Championships ({ageGroup})</Text>
      </View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadCell, { flex: 2 }]}>Event</Text>
            <Text style={[styles.tableHeadCell, { flex: 2 }]}>Cut</Text>
            <Text style={[styles.tableHeadCell, { flex: 2, borderRightWidth: 0 }]}>Bonus</Text>
          </View>
          {events.map((evt, idx) => {
            const tagResult = getTagStandards(gender, poolType, ageGroup, evt);
            const cutTime = tagResult.tags ? cleanTime(tagResult.tags.standard) : "-";
            const bonusTime = tagResult.bonus ? cleanTime(tagResult.bonus.standard) : "-";
            const isLast = idx === events.length - 1;

            return (
              <View key={evt} style={[styles.tableRow, isLast && { borderBottomWidth: 0 }]}>
                <Text style={[styles.tableCell, { flex: 2, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                <Text style={[styles.tableCell, { flex: 2, color: getStrokeColor(evt), fontFamily: "PublicSans-Bold", fontWeight: "700" }]}>{cutTime}</Text>
                <Text style={[styles.tableCell, { flex: 2, color: colors.textMuted, fontFamily: "PublicSans-Bold", fontWeight: "700", borderRightWidth: 0 }]}>{bonusTime}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );

  const renderSingleCutTable = (
    title: string,
    getStandard: (evt: string) => { standard: string; meet: string } | null,
  ) => (
    <View style={{ flex: 1 }}>
      <View style={styles.detailHeader}>
        <Pressable onPress={() => setMode("selection")} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={colors.textMuted} />
        </Pressable>
        <Text style={styles.detailTitle}>{title} ({ageGroup})</Text>
      </View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadCell, { flex: 2 }]}>Event</Text>
            <Text style={[styles.tableHeadCell, { flex: 2, borderRightWidth: 0 }]}>Cut</Text>
          </View>
          {events.map((evt, idx) => {
            const std = getStandard(evt);
            const time = std ? cleanTime(std.standard) : "-";
            const isLast = idx === events.length - 1;

            return (
              <View key={evt} style={[styles.tableRow, isLast && { borderBottomWidth: 0 }]}>
                <Text style={[styles.tableCell, { flex: 2, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                <Text style={[styles.tableCell, { flex: 2, color: getStrokeColor(evt), fontFamily: "PublicSans-Bold", fontWeight: "700", borderRightWidth: 0 }]}>{time}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );

  const renderMotivationalTable = () => (
    <View style={{ flex: 1 }}>
      <View style={styles.detailHeader}>
        <Pressable onPress={() => setMode("selection")} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={colors.textMuted} />
        </Pressable>
        <Text style={styles.detailTitle}>Motivational ({ageGroup})</Text>
      </View>
      <View style={{ flex: 1, margin: 16, borderRadius: 8, overflow: "hidden", borderWidth: 1.5, borderColor: colors.border, backgroundColor: colors.surface }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {/* Left Sticky Column */}
            <View style={{ width: 100, borderRightWidth: 1.5, borderRightColor: colors.border, backgroundColor: colors.surface }}>
              {/* Header Cell */}
              <View style={{ height: 44, backgroundColor: colors.surfaceWarm, justifyContent: "center", paddingHorizontal: 12, borderBottomWidth: 1.5, borderBottomColor: colors.border }}>
                <Text style={{ fontSize: 12, fontWeight: "800", color: colors.textMuted, fontFamily: "PublicSans-ExtraBold" }}>Event</Text>
              </View>
              {/* Data Cells */}
              {events.map((evt, idx) => {
                const isLast = idx === events.length - 1;
                return (
                  <View key={evt} style={{ height: 44, justifyContent: "center", paddingHorizontal: 12, borderBottomWidth: isLast ? 0 : 1.5, borderBottomColor: colors.border, backgroundColor: colors.surface }}>
                    <Text style={{ fontSize: 13, color: colors.text, fontWeight: "700", fontFamily: "PublicSans-SemiBold" }}>
                      {evt.replace("_", " ")}
                    </Text>
                  </View>
                );
              })}
            </View>

            {/* Right Scrollable Grid */}
            {/* @ts-ignore */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }} className="no-scrollbar">
              <View>
                {/* Header Row */}
                <View style={{ flexDirection: "row", backgroundColor: colors.surfaceWarm, height: 44, borderBottomWidth: 1.5, borderBottomColor: colors.border }}>
                  {["AAAA", "AAA", "AA", "A", "BB", "B"].map((head, hIdx) => (
                    <View key={head} style={{ width: 90, justifyContent: "center", paddingHorizontal: 8, borderRightWidth: hIdx === 5 ? 0 : 1.5, borderRightColor: colors.border }}>
                      <Text style={{ fontSize: 12, fontWeight: "800", color: "#475569", fontFamily: "PublicSans-ExtraBold", textAlign: "center" }}>{head}</Text>
                    </View>
                  ))}
                </View>
                {/* Data Rows */}
                {events.map((evt, idx) => {
                  const moti = getMotivationalStandards(gender, poolType, ageGroup, evt);
                  const isLast = idx === events.length - 1;
                  return (
                    <View key={evt} style={{ flexDirection: "row", height: 44, borderBottomWidth: isLast ? 0 : 1.5, borderBottomColor: colors.border }}>
                      {["AAAA", "AAA", "AA", "A", "BB", "B"].map((level, lIdx) => (
                        <View key={level} style={{ width: 90, justifyContent: "center", paddingHorizontal: 8, borderRightWidth: lIdx === 5 ? 0 : 1.5, borderRightColor: colors.border }}>
                          <Text style={{ fontSize: 13, color: getStrokeColor(evt), fontWeight: "700", fontFamily: "PublicSans-Bold", textAlign: "center" }}>
                            {moti ? (moti[level as keyof typeof moti] || "-") : "-"}
                          </Text>
                        </View>
                      ))}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {Platform.OS === "web" && (
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .no-scrollbar {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
        `}} />
      )}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 24) }]}>
        <Text style={styles.title}>Standards Library</Text>
        
        {/* Filters */}
        <View style={styles.filterBar}>
          <View style={styles.filterRow}>
            <View style={styles.filterGroup}>
              {(["Boy", "Girl"] as Gender[]).map((sex) => (
                <Pressable
                  key={sex}
                  onPress={() => setGender(sex)}
                  style={[styles.filterBtn, gender === sex && styles.filterBtnActive]}
                >
                  <Text style={[styles.filterBtnText, gender === sex && styles.filterBtnTextActive]}>{sex}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={[styles.filterRow, { marginTop: 10 }]}>
            <View style={styles.filterGroup}>
              {(["SCY", "SCM", "LCM"] as PoolType[]).map((course) => (
                <Pressable
                  key={course}
                  onPress={() => setPoolType(course)}
                  style={[styles.filterBtn, poolType === course && styles.filterBtnActive]}
                >
                  <Text style={[styles.filterBtnText, poolType === course && styles.filterBtnTextActive]}>{course}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {mode !== "selection" && (
            <View style={[styles.filterRow, { marginTop: 10 }]}>
              <View style={styles.filterGroup}>
                {(["9&U", "10", "11", "12", "13", "14"] as AgeGroup[]).map((age) => (
                  <Pressable key={age} onPress={() => setAgeGroup(age)} style={[styles.filterBtn, ageGroup === age && styles.filterBtnActive]}>
                    <Text style={[styles.filterBtnText, ageGroup === age && styles.filterBtnTextActive]}>{age}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>

      <View style={{ flex: 1 }}>
        {mode === "selection" ? renderSelection() : renderDetail()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.canvas },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: { fontSize: 30, fontWeight: "900", color: "white", fontFamily: "PublicSans-Black" },
  filterBar: { marginTop: 15, width: "100%" },
  filterRow: { flexDirection: "row", gap: 8, width: "100%" },
  filterGroup: { flex: 1, flexDirection: "row", gap: 2, backgroundColor: "rgba(57,36,7,0.16)", padding: 3, borderRadius: 0 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: 0, alignItems: "center", justifyContent: "center" },
  filterBtnActive: { backgroundColor: colors.surface },
  filterBtnText: { color: "#FFF0B8", fontSize: 13, fontWeight: "700", fontFamily: "PublicSans-Bold" },
  filterBtnTextActive: { color: colors.primary },

  scrollContent: { padding: 12 },
  listCard: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: colors.surface, 
    borderRadius: 0, 
    padding: 10, 
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  listIcon: { padding: 8, borderRadius: 0, marginRight: 12 },
  listTitle: { fontSize: 16, fontWeight: "800", color: colors.text, fontFamily: "PublicSans-ExtraBold" },
  listTitleDisabled: { color: colors.textSubtle },
  listSub: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  arrowIcon: { backgroundColor: colors.surfaceWarm, padding: 8, borderRadius: 0 },
  listCardDisabled: { opacity: 0.5 },
  slcNote: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
    marginHorizontal: 4,
  },
  slcEmail: {
    color: colors.primary,
    textDecorationLine: "underline",
  },

  sectionTitle: { fontSize: 16, fontWeight: "800", color: colors.textSubtle, letterSpacing: 1, marginBottom: 12, marginLeft: 4, marginTop: 8, fontFamily: "PublicSans-ExtraBold" },

  detailHeader: { flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.divider },
  backBtn: { marginRight: 12 },
  detailTitle: { fontSize: 18, fontWeight: "800", color: colors.text, fontFamily: "PublicSans-ExtraBold" },

  table: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    margin: 16,
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
  tableHeadCell: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.textMuted,
    letterSpacing: 0.5,
    fontFamily: "PublicSans-ExtraBold",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRightWidth: 1.5,
    borderRightColor: colors.border,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.border,
    alignItems: "stretch",
    backgroundColor: colors.surface,
  },
  tableCell: {
    fontSize: 13,
    color: colors.text,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRightWidth: 1.5,
    borderRightColor: colors.border,
    fontFamily: "PublicSans-SemiBold",
  },});
