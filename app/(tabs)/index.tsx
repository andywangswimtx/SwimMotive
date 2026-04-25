import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUserContext } from "../../context/UserContext";
import {
  AgeGroup,
  Gender,
  getEventsForPoolType,
  PoolType,
} from "../../utils/dataManager";
import ComingSoon from "../../components/ComingSoon";

const STORAGE_KEY = "swim_app_input_prefs_v1";

const STROKES = [
  { id: "FR", label: "Freestyle", icon: "water" },
  { id: "BK", label: "Backstroke", icon: "chevron-up" },
  { id: "BR", label: "Breaststroke", icon: "ellipse" },
  { id: "FL", label: "Butterfly", icon: "flash" },
  { id: "IM", label: "IM", icon: "shuffle" },
];

export default function InputScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { setParams } = useUserContext();

  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("15-16");
  
  const [selectedStroke, setSelectedStroke] = useState("FR");
  const [selectedDistance, setSelectedDistance] = useState("100");
  const [userTime, setUserTime] = useState("");

  // Load last used prefs
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.gender) setGender(parsed.gender);
          if (parsed.poolType) setPoolType(parsed.poolType);
          if (parsed.ageGroup) setAgeGroup(parsed.ageGroup);
          if (parsed.selectedStroke) setSelectedStroke(parsed.selectedStroke);
          if (parsed.selectedDistance) setSelectedDistance(parsed.selectedDistance);
        }
      } catch (e) {
        console.error("Prefs load failed", e);
      }
    })();
  }, []);

  // Save prefs
  useEffect(() => {
    AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ gender, poolType, ageGroup, selectedStroke, selectedDistance })
    );
  }, [gender, poolType, ageGroup, selectedStroke, selectedDistance]);

  const handleCompare = () => {
    const eventCode = `${selectedDistance}_${selectedStroke}`;
    if (!userTime.trim()) return;

    setParams({
      gender,
      poolType,
      ageGroup,
      event: eventCode,
      userTime: userTime,
    });

    router.push("/standards");
  };

  const allAvailableEvents = getEventsForPoolType(poolType);
  const distancesForStroke = allAvailableEvents
    .filter(evt => evt.endsWith(`_${selectedStroke}`))
    .map(evt => evt.split("_")[0]);

  // Ensure selectedDistance is valid when stroke/pool changes
  useEffect(() => {
    if (!distancesForStroke.includes(selectedDistance)) {
      setSelectedDistance(distancesForStroke[0] || "");
    }
  }, [selectedStroke, poolType]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* Header with Filters */}
        <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
          <Text style={styles.title}>Swim Calculator [v2]</Text>
          <Text style={styles.subtitle}>Configure your race and enter your time</Text>

          <View style={styles.filterBar}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
              <View style={styles.filterGroup}>
                <FilterPill active={gender === "Boy"} label="Boy" onPress={() => setGender("Boy")} />
                <FilterPill active={gender === "Girl"} label="Girl" onPress={() => setGender("Girl")} />
              </View>
              <View style={styles.filterGroup}>
                <FilterPill active={poolType === "SCY"} label="SCY" onPress={() => setPoolType("SCY")} />
                <FilterPill active={poolType === "LCM"} label="LCM" onPress={() => setPoolType("LCM")} />
              </View>
              <View style={styles.filterGroup}>
                {["13-14", "15-16", "17-18"].map((age) => (
                  <FilterPill key={age} active={ageGroup === age} label={age} onPress={() => setAgeGroup(age as AgeGroup)} />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <View style={styles.mainContent}>
            
            {/* Stroke Selector */}
            <Text style={styles.sectionLabel}>SELECT STROKE</Text>
            <View style={styles.strokesContainer}>
              <View style={styles.categoryWrap}>
                {STROKES.slice(0, 3).map((s) => (
                  <Pressable
                    key={s.id}
                    onPress={() => setSelectedStroke(s.id)}
                    style={[styles.selectorBtn, selectedStroke === s.id && styles.selectorBtnActive]}
                  >
                    <Ionicons 
                      name={s.icon as any} 
                      size={16} 
                      color={selectedStroke === s.id ? "#fff" : "#64748b"} 
                    />
                    <Text style={[styles.selectorText, selectedStroke === s.id && styles.selectorTextActive]}>
                      {s.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <View style={[styles.categoryWrap, { marginTop: 8 }]}>
                {STROKES.slice(3).map((s) => (
                  <Pressable
                    key={s.id}
                    onPress={() => setSelectedStroke(s.id)}
                    style={[styles.selectorBtn, selectedStroke === s.id && styles.selectorBtnActive]}
                  >
                    <Ionicons 
                      name={s.icon as any} 
                      size={16} 
                      color={selectedStroke === s.id ? "#fff" : "#64748b"} 
                    />
                    <Text style={[styles.selectorText, selectedStroke === s.id && styles.selectorTextActive]}>
                      {s.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Distance Selector */}
            <Text style={styles.sectionLabel}>SELECT DISTANCE</Text>
            <View style={styles.categoryWrap}>
              {distancesForStroke.map((d) => (
                <Pressable
                  key={d}
                  onPress={() => setSelectedDistance(d)}
                  style={[styles.distanceBtn, selectedDistance === d && styles.distanceBtnActive]}
                >
                  <Text style={[styles.distanceText, selectedDistance === d && styles.distanceTextActive]}>
                    {d}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Time Input Area */}
            <View style={styles.inputCard}>
              <View style={styles.inputHeader}>
                <Ionicons name="stopwatch-outline" size={20} color="#4f46e5" />
                <Text style={styles.inputActionLabel}>ENTER YOUR TIME</Text>
              </View>
              
              <TextInput
                style={styles.timeInput}
                placeholder="0:00.00"
                placeholderTextColor="#cbd5e1"
                value={userTime}
                onChangeText={setUserTime}
                keyboardType="decimal-pad"
              />

              <Pressable
                onPress={handleCompare}
                style={({ pressed }) => [
                  styles.compareBtn,
                  (!userTime.trim()) && styles.compareBtnDisabled,
                  pressed && styles.compareBtnPressed,
                ]}
                disabled={!userTime.trim()}
              >
                <Text style={styles.compareBtnText}>Analyze Performance</Text>
                <Ionicons name="sparkles" size={20} color="#fff" />
              </Pressable>
            </View>

            <ComingSoon />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

function FilterPill({ active, label, onPress }: { active: boolean; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.filterBtn, active && styles.filterBtnActive]}>
      <Text style={[styles.filterBtnText, active && styles.filterBtnTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  title: { fontSize: 28, fontWeight: "900", color: "white", letterSpacing: -0.5 },
  subtitle: { fontSize: 13, color: "#c7d2fe", marginTop: 4, fontWeight: "500" },
  filterBar: { marginTop: 20 },
  filterScroll: { gap: 8 },
  filterGroup: { flexDirection: "row", gap: 4, backgroundColor: "rgba(0,0,0,0.1)", padding: 4, borderRadius: 12, marginRight: 8 },
  filterBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  filterBtnActive: { backgroundColor: "white" },
  filterBtnText: { color: "#c7d2fe", fontSize: 12, fontWeight: "700" },
  filterBtnTextActive: { color: "#4f46e5" },

  mainContent: { padding: 16 },
  sectionLabel: { fontSize: 11, fontWeight: "800", color: "#94a3b8", letterSpacing: 1.2, marginBottom: 10, marginTop: 4 },
  
  // Scrollers -> Now Grids
  strokesContainer: { width: "100%" },
  categoryWrap: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  selectorBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  selectorBtnActive: { backgroundColor: "#4f46e5", borderColor: "#4f46e5" },
  selectorText: { fontSize: 13, fontWeight: "700", color: "#64748b" },
  selectorTextActive: { color: "white" },

  distanceBtn: {
    minWidth: 50,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  distanceBtnActive: { backgroundColor: "#4f46e5", borderColor: "#4f46e5" },
  distanceText: { fontSize: 13, fontWeight: "800", color: "#64748b" },
  distanceTextActive: { color: "white" },

  // Input Card
  inputCard: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 24,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  inputHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 16 },
  inputActionLabel: { fontSize: 12, fontWeight: "800", color: "#4f46e5", letterSpacing: 1 },
  timeInput: {
    fontSize: 56,
    fontWeight: "900",
    color: "#1e293b",
    textAlign: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  compareBtn: {
    backgroundColor: "#4f46e5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 18,
    borderRadius: 20,
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  compareBtnDisabled: { backgroundColor: "#94a3b8", shadowOpacity: 0 },
  compareBtnPressed: { transform: [{ scale: 0.98 }] },
  compareBtnText: { color: "white", fontSize: 16, fontWeight: "800" },
});
