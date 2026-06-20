import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useCallback, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ComingSoon from "../../components/ComingSoon";
import {
  AgeGroup,
  Gender,
  getEventsForPoolType,
  getFutures18UStandard,
  getFutures19OStandard,
  getFuturesStandard,
  getJrNationalStandard,
  getMotivationalStandards,
  getNCSAStandard,
  getOlympicTrialStandard,
  getProSwim18UStandard,
  getProSwim19OStandard,
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
} from "../../utils/PowerIndex";

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
  | "power_index";

const STANDARDS_CONFIG = [
  { id: "motivational", label: "Motivational", icon: "ribbon", color: "#10b981", bg: "#ecfdf5" },
  { id: "sectional", label: "Sectionals", icon: "map", color: "#8b5cf6", bg: "#f5f3ff" },
  { id: "ncsa", label: "NCSA Champs", icon: "shield", color: "#0ea5e9", bg: "#f0f9ff" },
  { id: "futures_19o", label: "Futures (19+)", icon: "rocket", color: "#f59e0b", bg: "#fffbeb" },
  { id: "futures_18u", label: "Futures (18U)", icon: "rocket-outline", color: "#f59e0b", bg: "#fffbeb" },
  { id: "winter", label: "Winter Juniors", icon: "snow", color: "#3b82f6", bg: "#eff6ff" },
  { id: "national", label: "Junior Nationals", icon: "flag", color: "#f43f5e", bg: "#fff1f2" },
  { id: "trials", label: "Olympic Trials", icon: "medal", color: "#be123c", bg: "#fff1f2" },
  { id: "us_open", label: "Toyota U.S. Open", icon: "water", color: "#4338ca", bg: "#e0e7ff" },
  { id: "national_19o", label: "National Champs (19+)", icon: "star", color: "#be123c", bg: "#fff1f2" },
  { id: "national_18u", label: "National Champs (18U)", icon: "star-outline", color: "#ea580c", bg: "#fff7ed" },
  { id: "pro_swim_19o", label: "Pro Swim (19+)", icon: "flash", color: "#059669", bg: "#ecfdf5" },
  { id: "pro_swim_18u", label: "Pro Swim (18U)", icon: "flash-outline", color: "#059669", bg: "#ecfdf5" },
];

export default function AllStandardsScreen() {
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("15-16");
  const [mode, setMode] = useState<StandardMode>("selection");

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
          <Ionicons name="analytics" size={24} color="#4f46e5" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Power Index Reference</Text>
          <Text style={styles.listSub}>Times for each score (1-100)</Text>
        </View>
        <View style={styles.arrowIcon}>
          <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
        </View>
      </Pressable>

      <Text style={styles.sectionTitle}>Championship Standards</Text>
      {STANDARDS_CONFIG.map((config) => (
        <Pressable key={config.id} onPress={() => setMode(config.id as StandardMode)} style={styles.listCard}>
          <View style={[styles.listIcon, { backgroundColor: config.bg }]}>
            <Ionicons name={config.icon as any} size={22} color={config.color} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.listTitle}>{config.label}</Text>
            <Text style={styles.listSub}>Qualifying times & bonuses</Text>
          </View>
          <View style={styles.arrowIcon}>
            <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
          </View>
        </Pressable>
      ))}
      <ComingSoon />
    </ScrollView>
  );

  const renderDetail = () => {
    if (mode === "power_index") return renderPowerIndexTable();
    if (mode === "motivational") return renderMotivationalTable();

    let getStandardFn: any;
    let label = "";
    let color = "#4f46e5";

    switch (mode) {
      case "sectional": getStandardFn = getTSCStandards; label = "Sectionals"; color = "#8b5cf6"; break;
      case "ncsa": getStandardFn = getNCSAStandard; label = "NCSA"; color = "#0ea5e9"; break;
      case "futures_19o": getStandardFn = getFutures19OStandard; label = "Futures (19+)"; color = "#f59e0b"; break;
      case "futures_18u": getStandardFn = getFutures18UStandard; label = "Futures (18U)"; color = "#f97316"; break;
      case "winter": getStandardFn = getWinterJrStandard; label = "Winter Juniors"; color = "#3b82f6"; break;
      case "national": getStandardFn = getJrNationalStandard; label = "Junior Nationals"; color = "#f43f5e"; break;
      case "trials": getStandardFn = getOlympicTrialStandard; label = "Olympic Trials"; color = "#be123c"; break;
      case "us_open": getStandardFn = getUSOpenStandard; label = "Toyota U.S. Open"; color = "#4338ca"; break;
      case "national_19o": getStandardFn = getToyotaNational19OStandard; label = "National Champs (19+)"; color = "#be123c"; break;
      case "national_18u": getStandardFn = getToyotaNational18UStandard; label = "National Champs (18U)"; color = "#ea580c"; break;
      case "pro_swim_19o": getStandardFn = getProSwim19OStandard; label = "Pro Swim (19+)"; color = "#059669"; break;
      case "pro_swim_18u": getStandardFn = getProSwim18UStandard; label = "Pro Swim (18U)"; color = "#10b981"; break;
    }

    const hasBonus = mode === "winter" || mode === "national" || mode === "sectional" || mode === "us_open";

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.detailHeader}>
          <Pressable onPress={() => setMode("selection")} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#475569" />
          </Pressable>
          <Text style={styles.detailTitle}>{label}</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeadCell, { flex: hasBonus ? 2 : 3 }]}>Event</Text>
              <Text style={[styles.tableHeadCell, { flex: hasBonus ? 2 : 3 }]}>Cut</Text>
              {hasBonus && <Text style={[styles.tableHeadCell, { flex: 2 }]}>Bonus</Text>}
            </View>
            {events.map((evt) => {
              const std = getStandardFn(gender, poolType, evt);
              if (!std) return null;
              
              const time = cleanTime(mode === "sectional" ? (std as any).Sectionals_Standard : (std as any).standard);
              const bonus = cleanTime(mode === "sectional" ? (std as any).Sectionals_Bonus_Standard : (std as any).bonus);

              return (
                <View key={evt} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { flex: hasBonus ? 2 : 3, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                  <Text style={[styles.tableCell, { flex: hasBonus ? 2 : 3, color }]}>{time}</Text>
                  {hasBonus && <Text style={[styles.tableCell, { flex: 2, color: "#64748b" }]}>{bonus || "--"}</Text>}
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
      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadCell, { width: 100 }]}>Event</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>AAAA</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>AAA</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>AA</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>A</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>BB</Text>
            <Text style={[styles.tableHeadCell, { width: 80 }]}>B</Text>
          </View>
          <ScrollView>
            {events.map((evt) => {
              const moti = getMotivationalStandards(gender, poolType, ageGroup, evt);
              if (!moti) return null;
              return (
                <View key={evt} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { width: 100, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                  <Text style={[styles.tableCell, { width: 80 }]}>{moti.AAAA}</Text>
                  <Text style={[styles.tableCell, { width: 80 }]}>{moti.AAA}</Text>
                  <Text style={[styles.tableCell, { width: 80 }]}>{moti.AA}</Text>
                  <Text style={[styles.tableCell, { width: 80 }]}>{moti.A}</Text>
                  <Text style={[styles.tableCell, { width: 80 }]}>{moti.BB}</Text>
                  <Text style={[styles.tableCell, { width: 80 }]}>{moti.B}</Text>
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
        <Text style={styles.detailTitle}>Power Index Times</Text>
      </View>
      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadCell, { width: 100 }]}>Event</Text>
            {SCORE_HEADERS.map(score => (
              <Text key={score} style={[styles.tableHeadCell, { width: 75 }]}>{score}</Text>
            ))}
          </View>
          <ScrollView>
            {events.map((evt) => {
              const piEvt = mapEventToPowerIndex(poolType, evt);
              if (!piEvt) return null;
              const refTimes = getSwimData(gender)[piEvt as any];
              return (
                <View key={evt} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { width: 100, fontWeight: "700" }]}>{evt.replace("_", " ")}</Text>
                  {SCORE_HEADERS.map(score => {
                    const time = interpolateTimeFromScore(score, SCORE_HEADERS, refTimes);
                    return <Text key={score} style={[styles.tableCell, { width: 75, fontSize: 11 }]}>{formatTime(time)}</Text>
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
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={styles.title}>Standards Library</Text>
        
        {/* Filters */}
        <View style={styles.filterBar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
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
            {mode === "motivational" && (
              <View style={styles.filterGroup}>
                {["13-14", "15-16", "17-18", "19+"].map((age) => (
                  <Pressable key={age} onPress={() => setAgeGroup(age === "19+" ? "19 & Over" : age as AgeGroup)} style={[styles.filterBtn, ageGroup === (age === "19+" ? "19 & Over" : age) && styles.filterBtnActive]}>
                    <Text style={[styles.filterBtnText, ageGroup === (age === "19+" ? "19 & Over" : age) && styles.filterBtnTextActive]}>{age}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        {mode === "selection" ? renderSelection() : renderDetail()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: { fontSize: 24, fontWeight: "900", color: "white", fontFamily: "PublicSans-Black" },
  filterBar: { marginTop: 15 },
  filterScroll: { alignItems: "center", gap: 4 },
  filterGroup: { flexDirection: "row", gap: 2, backgroundColor: "rgba(0,0,0,0.1)", padding: 3, borderRadius: 0 },
  filterBtn: { paddingHorizontal: 8, paddingVertical: 6, borderRadius: 0 },
  filterBtnActive: { backgroundColor: "white" },
  filterBtnText: { color: "#c7d2fe", fontSize: 11, fontWeight: "700", fontFamily: "PublicSans-Bold" },
  filterBtnTextActive: { color: "#4f46e5" },

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

  table: { backgroundColor: "white" },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8fafc", paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: "#f1f5f9" },
  tableHeadCell: { fontSize: 12, fontWeight: "800", color: "#94a3b8", letterSpacing: 0.5 },
  tableRow: { flexDirection: "row", paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: "#f1f5f9", alignItems: "center" },
  tableCell: { fontSize: 13, color: "#334155" },});

