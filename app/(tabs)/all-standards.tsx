import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from "react-native";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ComingSoon from "../../components/ComingSoon";
import {
  AgeGroup,
  Gender,
  getEventsForPoolType,
  getFutures18UStandard,
  getFutures19OStandard,
  getGulfSeniorStandard,
  getGulfStandard,
  getJrNationalStandard,
  getMotivationalStandards,
  getNCSAStandard,
  getOlympicStandard,
  getOlympicTrialStandard,
  getProSwim18UStandard,
  getProSwim19OStandard,
  getTAGSStandard,
  getTSCStandards,
  getToyotaNational18UStandard,
  getToyotaNational19OStandard,
  getUSOpenStandard,
  getWinterJrStandard,
  mapEventToPowerIndex,
  PoolType,
} from "../../utils/dataManager";
import {
  formatTime,
  getSwimData,
  interpolateTimeFromScore,
  SCORE_HEADERS,
  JSON_SCORE_HEADERS,
  SwimData,
} from "../../utils/PowerIndex";

const getStrokeColor = (event: string): string => {
  const ev = event.toUpperCase();
  if (ev.endsWith("_FR") || ev.endsWith(" FR") || ev.includes("FREE")) return "#1a365d"; // Navy Blue
  if (ev.endsWith("_BK") || ev.endsWith(" BK") || ev.includes("BACK")) return "#c84b00"; // Vibrant Rust
  if (ev.endsWith("_BR") || ev.endsWith(" BR") || ev.includes("BREAST")) return "#007f3f"; // Kelly Green
  if (ev.endsWith("_FL") || ev.endsWith(" FL") || ev.includes("FLY")) return "#b5007f"; // Rich Magenta
  if (ev.endsWith("_IM") || ev.endsWith(" IM") || ev.includes("MEDLEY")) return "#6f00d8"; // Royal Violet
  return "#334155";
};

// ─── Swimcloud Copyright Text Helper ──────────────────────
const renderSwimcloudText = (text: string, baseStyle?: any) => {
  const parts = text.split(/(swimcloud)/i);
  return (
    <Text style={baseStyle}>
      {parts.map((part, index) => {
        if (part.toLowerCase() === "swimcloud") {
          return (
            <Text key={index} style={baseStyle}>
              Swimcloud
              <Text style={{ fontSize: 11, position: "relative", top: Platform.OS === "ios" ? -2 : 0, verticalAlign: "top" }}>®</Text>
            </Text>
          );
        }
        return part;
      })}
    </Text>
  );
};

type StandardMode =
  | "selection"
  | "motivational"
  | "sectional"
  | "ncsa"
  | "futures_18u"
  | "futures_19o"
  | "winter"
  | "national"
  | "trials"
  | "us_open"
  | "national_18u"
  | "national_19o"
  | "pro_swim_19o"
  | "pro_swim_18u"
  | "power_index"
  | "tags"
  | "gulf"
  | "gulf_senior"
  | "olympic_standards";

const STANDARDS_CONFIG = [
  { id: "motivational", label: "Motivational", icon: "book", color: "#10b981", bg: "#ecfdf5", description: "2024–2028 Motivational cuts" },
  { id: "gulf", label: "Gulf Age Group", icon: "book", color: "#0284c7", bg: "#f0f9ff", description: "2025 Gulf Age Group cuts" },
  { id: "gulf_senior", label: "Gulf Senior Champs", icon: "book", color: "#2e4057", bg: "#f0f4f8", description: "2025–2026 Gulf Senior cuts" },
  { id: "tags", label: "TAGS Championships", icon: "book", color: "#14b8a6", bg: "#f0fdfa", description: "2026 TAGS cuts and bonuses" },
  { id: "sectional", label: "TSC Sectionals", icon: "book", color: "#8b5cf6", bg: "#f5f3ff", description: "2026 TSC Sectionals cuts and bonuses" },
  { id: "ncsa", label: "NCSA Champs", icon: "book", color: "#06b6d4", bg: "#ecfeff", description: "2025 NCSA cuts" },
  { id: "futures_18u", label: "Futures (18U)", icon: "book-outline", color: "#f59e0b", bg: "#fffbeb", description: "2026 Futures (18U) cuts" },
  { id: "futures_19o", label: "Futures (19+)", icon: "book", color: "#f59e0b", bg: "#fffbeb", description: "2026 Futures (19+) cuts" },
  { id: "winter", label: "Winter Juniors", icon: "book", color: "#3b82f6", bg: "#eff6ff", description: "2026 Winter Juniors cuts and bonuses" },
  { id: "pro_swim_18u", label: "TYR Pro Swim (18U)", icon: "book-outline", color: "#ec4899", bg: "#fdf2f8", description: "2026 TYR Pro Swim (18U) cuts" },
  { id: "pro_swim_19o", label: "TYR Pro Swim (19+)", icon: "book", color: "#ec4899", bg: "#fdf2f8", description: "2026 TYR Pro Swim (19+) cuts" },
  { id: "national", label: "Junior Nationals", icon: "book", color: "#f43f5e", bg: "#fff1f2", description: "2026 Junior Nationals cuts and bonuses" },
  { id: "us_open", label: "Toyota U.S. Open", icon: "book", color: "#4338ca", bg: "#e0e7ff", description: "2026 Toyota U.S. Open cuts and bonuses" },
  { id: "national_18u", label: "National Champs (18U)", icon: "book-outline", color: "#ea580c", bg: "#fff7ed", description: "2026 National Champs (18U) cuts" },
  { id: "national_19o", label: "National Champs (19+)", icon: "book", color: "#ea580c", bg: "#fff7ed", description: "2026 National Champs (19+) cuts" },
  { id: "trials", label: "Olympic Trials", icon: "book", color: "#be123c", bg: "#fff1f2", description: "2024 Olympic Trials cuts" },
  { id: "olympic_standards", label: "LA28 Olympic Games", icon: "book", color: "#b45309", bg: "#fef3c7", description: "2028 Olympic Games A and B cuts" },
];

export default function AllStandardsScreen() {
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("15-16");
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
    return t.startsWith(":") ? t.substring(1) : t;
  };

  const renderSelection = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Power Index Card */}
      <Pressable onPress={() => setMode("power_index")} style={styles.listCard}>
        <View style={[styles.listIcon, { backgroundColor: "#eef2ff" }]}>
          <Ionicons name="analytics" size={24} color="#0044ee" />
        </View>
        <View style={{ flex: 1 }}>
          {renderSwimcloudText("Swimcloud Power Index", styles.listTitle)}
          <Text style={styles.listSub}>Times for each score (1-100)</Text>
        </View>
        <View style={styles.arrowIcon}>
          <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
        </View>
      </Pressable>

      <Text style={styles.sectionTitle}>Championship Standards</Text>
      {STANDARDS_CONFIG.map((config) => {
        const isLcmOnly = config.id === "trials" || config.id === "olympic_standards";
        const isDisabled = poolType === "SCY" && isLcmOnly;

        return (
          <Pressable
            key={config.id}
            onPress={() => !isDisabled && setMode(config.id as StandardMode)}
            disabled={isDisabled}
            style={[styles.listCard, isDisabled && { opacity: 0.5 }]}
          >
            <View style={[styles.listIcon, { backgroundColor: isDisabled ? "#e2e8f0" : config.bg }]}>
              <Ionicons name={config.icon as any} size={22} color={isDisabled ? "#94a3b8" : config.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.listTitle, isDisabled && { color: "#94a3b8" }]}>{config.label}</Text>
              <Text style={[styles.listSub, isDisabled && { color: "#94a3b8", opacity: 0.7 }]}>
                {isDisabled ? "LCM Course Only" : config.description}
              </Text>
            </View>
            <View style={styles.arrowIcon}>
              <Ionicons name="chevron-forward" size={18} color={isDisabled ? "#e2e8f0" : "#cbd5e1"} />
            </View>
          </Pressable>
        );
      })}
      <ComingSoon style={{ marginTop: 10 }} />
    </ScrollView>
  );

  const renderDetail = () => {
    if (mode === "power_index") return renderPowerIndexTable();
    if (mode === "motivational") return renderMotivationalTable();

    let getStandardFn: any;
    let label = "";

    switch (mode) {
      case "sectional": getStandardFn = getTSCStandards; label = "TSC Sectionals"; break;
      case "tags": getStandardFn = getTAGSStandard; label = "TAGS Championships (13-14)"; break;
      case "gulf": getStandardFn = getGulfStandard; label = "Gulf Championships (13-14)"; break;
      case "gulf_senior": getStandardFn = getGulfSeniorStandard; label = "Gulf Senior Championships"; break;
      case "ncsa": getStandardFn = getNCSAStandard; label = "NCSA"; break;
      case "futures_19o": getStandardFn = getFutures19OStandard; label = "Futures (19+)"; break;
      case "futures_18u": getStandardFn = getFutures18UStandard; label = "Futures (18U)"; break;
      case "winter": getStandardFn = getWinterJrStandard; label = "Winter Juniors"; break;
      case "national": getStandardFn = getJrNationalStandard; label = "Junior Nationals"; break;
      case "trials": getStandardFn = getOlympicTrialStandard; label = "Olympic Trials"; break;
      case "us_open": getStandardFn = getUSOpenStandard; label = "Toyota U.S. Open"; break;
      case "national_19o": getStandardFn = getToyotaNational19OStandard; label = "National Champs (19+)"; break;
      case "national_18u": getStandardFn = getToyotaNational18UStandard; label = "National Champs (18U)"; break;
      case "pro_swim_19o": getStandardFn = getProSwim19OStandard; label = "TYR Pro Swim (19+)"; break;
      case "pro_swim_18u": getStandardFn = getProSwim18UStandard; label = "TYR Pro Swim (18U)"; break;
      case "olympic_standards": getStandardFn = getOlympicStandard; label = "LA28 Olympic Games"; break;
    }

    const hasBonus = mode === "winter" || mode === "national" || mode === "sectional" || mode === "us_open" || mode === "tags" || mode === "olympic_standards";

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.detailHeader}>
          <Pressable onPress={() => setMode("selection")} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#475569" />
          </Pressable>
          <Text style={styles.detailTitle}>{label}</Text>
        </View>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeadCell, { flex: hasBonus ? 2 : 3 }]}>Event</Text>
              <Text style={[styles.tableHeadCell, { flex: hasBonus ? 2 : 3, borderRightWidth: hasBonus ? 1.5 : 0 }]}>
                {mode === "olympic_standards" ? "A cut" : "Cut"}
              </Text>
              {hasBonus && (
                <Text style={[styles.tableHeadCell, { flex: 2, borderRightWidth: 0 }]}>
                  {mode === "olympic_standards" ? "B cut" : (mode === "us_open" ? "18U Bonus" : "Bonus")}
                </Text>
              )}
            </View>
            {events.map((evt, idx) => {
              const std = (mode === "tags" || mode === "gulf")
                ? getStandardFn(gender, poolType, "13-14", evt)
                : getStandardFn(gender, poolType, evt);
              if (!std) return null;
              
              const time = cleanTime(mode === "sectional" ? (std as any).Sectionals_Standard : (std as any).standard);
              const bonus = cleanTime(mode === "sectional" ? (std as any).Sectionals_Bonus_Standard : (std as any).bonus);
              const isLast = idx === events.length - 1;

              return (
                <View key={evt} style={[styles.tableRow, isLast && { borderBottomWidth: 0 }]}>
                  <Text style={[styles.tableCell, { flex: hasBonus ? 2 : 3, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                  <Text style={[styles.tableCell, { flex: hasBonus ? 2 : 3, color: getStrokeColor(evt), fontWeight: "900", borderRightWidth: hasBonus ? 1.5 : 0 }]}>{time}</Text>
                  {hasBonus && <Text style={[styles.tableCell, { flex: 2, color: "#64748b", fontWeight: "700", borderRightWidth: 0 }]}>{bonus || "--"}</Text>}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  };

  const renderMotivationalTable = () => (
    <View style={{ flex: 1 }}>
      <View style={styles.detailHeader}>
        <Pressable onPress={() => setMode("selection")} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#475569" />
        </Pressable>
        <Text style={styles.detailTitle}>Motivational ({ageGroup})</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadCell, { width: 100 }]}>Event</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>AAAA</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>AAA</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>AA</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>A</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>BB</Text>
            <Text style={[styles.tableHeadCell, { width: 80, borderRightWidth: 0 }]}>B</Text>
          </View>
          <ScrollView>
            {events.map((evt, idx) => {
              const moti = getMotivationalStandards(gender, poolType, ageGroup, evt);
              if (!moti) return null;
              const isLast = idx === events.length - 1;
              return (
                <View key={evt} style={[styles.tableRow, isLast && { borderBottomWidth: 0 }]}>
                  <Text style={[styles.tableCell, { width: 100, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                  <Text style={[styles.tableCell, { width: 80, color: getStrokeColor(evt), fontWeight: "700" }]}>{moti.AAAA}</Text>
                  <Text style={[styles.tableCell, { width: 80, color: getStrokeColor(evt), fontWeight: "700" }]}>{moti.AAA}</Text>
                  <Text style={[styles.tableCell, { width: 80, color: getStrokeColor(evt), fontWeight: "700" }]}>{moti.AA}</Text>
                  <Text style={[styles.tableCell, { width: 80, color: getStrokeColor(evt), fontWeight: "700" }]}>{moti.A}</Text>
                  <Text style={[styles.tableCell, { width: 80, color: getStrokeColor(evt), fontWeight: "700" }]}>{moti.BB}</Text>
                  <Text style={[styles.tableCell, { width: 80, color: getStrokeColor(evt), fontWeight: "700", borderRightWidth: 0 }]}>{moti.B}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );

  const renderPowerIndexTable = () => (
    <View style={{ flex: 1 }}>
      <View style={styles.detailHeader}>
        <Pressable onPress={() => setMode("selection")} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#475569" />
        </Pressable>
        {renderSwimcloudText("Swimcloud Power Index Times", styles.detailTitle)}
      </View>
      <ScrollView horizontal contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadCell, { width: 100 }]}>Event</Text>
            {SCORE_HEADERS.map((score, sIdx) => {
              const isLastScore = sIdx === SCORE_HEADERS.length - 1;
              return (
                <Text key={score} style={[styles.tableHeadCell, { width: 75 }, isLastScore && { borderRightWidth: 0 }]}>{score}</Text>
              );
            })}
          </View>
          <ScrollView>
            {events.map((evt, idx) => {
              const piEvt = mapEventToPowerIndex(poolType, evt);
              if (!piEvt) return null;
              const refTimes = getSwimData(gender)[piEvt as keyof SwimData];
              const isLast = idx === events.length - 1;
              return (
                <View key={evt} style={[styles.tableRow, isLast && { borderBottomWidth: 0 }]}>
                  <Text style={[styles.tableCell, { width: 100, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                  {SCORE_HEADERS.map((score, sIdx) => {
                    const time = interpolateTimeFromScore(score, JSON_SCORE_HEADERS, refTimes);
                    const isLastScore = sIdx === SCORE_HEADERS.length - 1;
                    return (
                      <Text key={score} style={[styles.tableCell, { width: 75, fontSize: 11, fontWeight: "700", color: getStrokeColor(evt) }, isLastScore && { borderRightWidth: 0 }]}>
                        {formatTime(time)}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) }]}>
        <Text style={styles.title}>Standards Library</Text>
        
        {/* Filters */}
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
              <Pressable onPress={() => setPoolType("SCY")} style={[styles.filterBtn, poolType === "SCY" && styles.filterBtnActive]}>
                <Text style={[styles.filterBtnText, poolType === "SCY" && styles.filterBtnTextActive]}>SCY</Text>
              </Pressable>
              <Pressable onPress={() => setPoolType("LCM")} style={[styles.filterBtn, poolType === "LCM" && styles.filterBtnActive]}>
                <Text style={[styles.filterBtnText, poolType === "LCM" && styles.filterBtnTextActive]}>LCM</Text>
              </Pressable>
            </View>
          </View>
          {mode === "motivational" && (
            <View style={[styles.filterRow, { marginTop: 10 }]}>
              <View style={styles.filterGroup}>
                {["13-14", "15-16", "17-18", "19+"].map((age) => (
                  <Pressable key={age} onPress={() => setAgeGroup(age === "19+" ? "19 & Over" : age as AgeGroup)} style={[styles.filterBtn, ageGroup === (age === "19+" ? "19 & Over" : age) && styles.filterBtnActive]}>
                    <Text style={[styles.filterBtnText, ageGroup === (age === "19+" ? "19 & Over" : age) && styles.filterBtnTextActive]}>{age}</Text>
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
  container: { flex: 1, backgroundColor: "#f1f5f9" },
  header: {
    backgroundColor: "#0044ee",
    paddingHorizontal: 20,
    paddingBottom: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: { fontSize: 24, fontWeight: "900", color: "white", fontFamily: "PublicSans-Black" },
  filterBar: { marginTop: 15, width: "100%" },
  filterRow: { flexDirection: "row", gap: 8, width: "100%" },
  filterGroup: { flex: 1, flexDirection: "row", gap: 2, backgroundColor: "rgba(0,0,0,0.1)", padding: 3, borderRadius: 0 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: 0, alignItems: "center", justifyContent: "center" },
  filterBtnActive: { backgroundColor: "white" },
  filterBtnText: { color: "#c7d2fe", fontSize: 13, fontWeight: "700", fontFamily: "PublicSans-Bold" },
  filterBtnTextActive: { color: "#0044ee" },

  scrollContent: { padding: 20 },
  listCard: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "white", 
    borderRadius: 0, 
    padding: 16, 
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  listIcon: { padding: 12, borderRadius: 0, marginRight: 16 },
  listTitle: { fontSize: 16, fontWeight: "800", color: "#1e293b", fontFamily: "PublicSans-ExtraBold" },
  listSub: { fontSize: 12, color: "#64748b", marginTop: 2 },
  arrowIcon: { backgroundColor: "#f8fafc", padding: 8, borderRadius: 0 },

  sectionTitle: { fontSize: 13, fontWeight: "800", color: "#94a3b8", letterSpacing: 1, marginBottom: 12, marginLeft: 4, marginTop: 8, fontFamily: "PublicSans-ExtraBold" },

  detailHeader: { flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
  backBtn: { marginRight: 12 },
  detailTitle: { fontSize: 18, fontWeight: "800", color: "#1e293b", fontFamily: "PublicSans-ExtraBold" },

  table: {
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "#cbd5e1",
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
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
  },});

