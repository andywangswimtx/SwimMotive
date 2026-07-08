import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  DeviceEventEmitter,
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
import ResultsView from "../../components/ResultsView";
import SwipeBackWrapper from "../../components/SwipeBackWrapper";

const STORAGE_KEY = "swim_app_input_prefs_v1";

const STROKES = [
  { id: "FR", label: "Free" },
  { id: "BK", label: "Back" },
  { id: "BR", label: "Breast" },
  { id: "FL", label: "Fly" },
  { id: "IM", label: "IM" },
];

export default function InputScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const { setParams } = useUserContext();

  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("15-16");
  
  const [selectedStroke, setSelectedStroke] = useState("FR");
  const [selectedDistance, setSelectedDistance] = useState("100");
  const [userTime, setUserTime] = useState("");
  const [timeError, setTimeError] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [showResults, setShowResults] = useState(false);
  const isInternalUpdate = useRef(false);

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

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      setShowResults(false);
    });
    const sub = DeviceEventEmitter.addListener("reset-index-tab", () => {
      setShowResults(false);
    });
    return () => {
      unsubscribe();
      sub.remove();
    };
  }, [navigation]);

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

    setShowResults(true);
  };

  const allAvailableEvents = getEventsForPoolType(poolType);
  const distancesForStroke = allAvailableEvents
    .filter(evt => evt.endsWith(`_${selectedStroke}`))
    .map(evt => evt.split("_")[0]);

  // Ensure selectedDistance is valid when stroke/pool changes
  useEffect(() => {
    const availableDistances = getEventsForPoolType(poolType)
      .filter(evt => evt.endsWith(`_${selectedStroke}`))
      .map(evt => evt.split("_")[0]);

    if (!availableDistances.includes(selectedDistance)) {
      setSelectedDistance(availableDistances[0] || "");
    }
  }, [selectedStroke, poolType, selectedDistance]);

  const handleTimeChange = (text: string) => {
    isInternalUpdate.current = true;
    const oldText = userTime;
    const oldSel = selection;

    // 1. Estimate where the cursor is in the raw 'text' input by finding differences
    let firstDiff = 0;
    while (firstDiff < text.length && firstDiff < oldText.length && text[firstDiff] === oldText[firstDiff]) {
      firstDiff++;
    }

    let estimatedSel = firstDiff;
    if (text.length > oldText.length) {
      // Addition
      estimatedSel = firstDiff + (text.length - oldText.length);
    } else if (text.length < oldText.length) {
      // Deletion
      estimatedSel = firstDiff;
    } else if (text !== oldText) {
      // Replacement (same length)
      let lastDiff = text.length - 1;
      while (lastDiff >= firstDiff && text[lastDiff] === oldText[lastDiff]) {
        lastDiff--;
      }
      estimatedSel = lastDiff + 1;
    } else {
      // No change in text, but maybe selection moved? 
      // If handleTimeChange is called, something usually changed, but we'll use current sel.
      estimatedSel = oldSel.start;
    }

    const cappedSel = Math.max(0, Math.min(text.length, estimatedSel));
    
    // Count how many digits are before the cursor in the new unformatted text
    const textBeforeCursor = text.substring(0, cappedSel);
    const digitsBeforeCursor = textBeforeCursor.replace(/\D/g, "").length;

    // Strip non-digits for the actual value
    let digits = text.replace(/\D/g, "");
    
    if (!digits) {
      setUserTime("");
      setSelection({ start: 0, end: 0 });
      return;
    }

    // Only strip leading zeroes if it doesn't leave us with nothing
    let strippedCount = 0;
    if (digits.length > 2) {
      const originalLen = digits.length;
      digits = digits.replace(/^0+/, "");
      strippedCount = originalLen - digits.length;
      
      if (!digits) {
        setUserTime("");
        setSelection({ start: 0, end: 0 });
        return;
      }
    }

    // Adjust digitsBeforeCursor if leading zeros were stripped
    const adjustedDigitsBefore = Math.max(0, digitsBeforeCursor - strippedCount);

    // Validation
    let error = "";
    if (digits.length >= 5) {
      const secsTensDigit = digits.slice(-4, -3);
      if (parseInt(secsTensDigit, 10) > 5) {
        error = "Invalid seconds (must be under 60)";
      }
    }
    setTimeError(error);

    let formatted = "";
    if (digits.length <= 2) {
      formatted = digits;
    } else if (digits.length <= 4) {
      const s = digits.slice(0, -2);
      const c = digits.slice(-2);
      formatted = `${s}.${c}`;
    } else {
      const m = digits.slice(0, -4);
      const s = digits.slice(-4, -2);
      const c = digits.slice(-2);
      formatted = `${m}:${s}.${c}`;
    }

    // Find the new position in the formatted string
    let newPos = 0;
    let digitCount = 0;
    while (newPos < formatted.length && digitCount < adjustedDigitsBefore) {
      if (/\d/.test(formatted[newPos])) {
        digitCount++;
      }
      newPos++;
    }

    // If we're at a separator, move past it if we're moving forward
    if (newPos < formatted.length && !/\d/.test(formatted[newPos]) && text.length >= oldText.length) {
      newPos++;
    }

    setUserTime(formatted);
    setSelection({ start: newPos, end: newPos });
  };

  if (showResults) {
    const eventCode = `${selectedDistance}_${selectedStroke}`;
    return (
      <SwipeBackWrapper onSwipeBack={() => setShowResults(false)}>
        <ResultsView
          gender={gender}
          poolType={poolType}
          ageGroup={ageGroup}
          event={eventCode}
          userTime={userTime}
          onBackToInput={() => setShowResults(false)}
        />
      </SwipeBackWrapper>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* Header with Filters */}
        <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) }]}>
          <Text style={styles.title}>SwimCalc++</Text>
          <Text style={styles.subtitle}>Select your race and enter your time</Text>

          <View style={styles.filterBar}>
            <View style={styles.filterRow}>
              <View style={styles.filterGroup}>
                <FilterPill active={gender === "Boy"} label="Boy" onPress={() => setGender("Boy")} />
                <FilterPill active={gender === "Girl"} label="Girl" onPress={() => setGender("Girl")} />
              </View>
              <View style={styles.filterGroup}>
                <FilterPill active={poolType === "SCY"} label="SCY" onPress={() => setPoolType("SCY")} />
                <FilterPill active={poolType === "LCM"} label="LCM" onPress={() => setPoolType("LCM")} />
              </View>
            </View>
            <View style={[styles.filterRow, { marginTop: 10 }]}>
              <View style={styles.filterGroup}>
                {["13-14", "15-16", "17-18", "19+"].map((age) => (
                  <FilterPill key={age} active={ageGroup === (age === "19+" ? "19 & Over" : age)} label={age} onPress={() => setAgeGroup(age === "19+" ? "19 & Over" : age as AgeGroup)} />
                ))}
              </View>
            </View>
          </View>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <View style={styles.mainContent}>
            
            {/* Stroke Selector */}
            <Text style={styles.sectionLabel}>SELECT STROKE</Text>
            <View style={styles.strokesContainer}>
              <View style={styles.strokesRow}>
                {STROKES.map((s) => (
                  <Pressable
                    key={s.id}
                    onPress={() => setSelectedStroke(s.id)}
                    style={[styles.selectorBtn, selectedStroke === s.id && styles.selectorBtnActive]}
                  >
                    <Text style={[styles.selectorText, selectedStroke === s.id && styles.selectorTextActive]}>
                      {s.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Distance Selector */}
            <Text style={styles.sectionLabel}>SELECT DISTANCE</Text>
            <View style={styles.distancesContainer}>
              <View style={styles.distancesRow}>
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
            </View>

            {/* Time Input Area */}
            <View style={styles.inputCard}>
              <View style={styles.inputHeader}>
                <Ionicons name="stopwatch-outline" size={18} color="#0044ee" />
                <Text style={styles.inputActionLabel}>ENTER YOUR TIME</Text>
              </View>
              
              <TextInput
                style={styles.timeInput}
                placeholder="0:00.00"
                placeholderTextColor="#cbd5e1"
                value={userTime}
                onChangeText={handleTimeChange}
                keyboardType="decimal-pad"
                selectTextOnFocus={true}
                selection={selection}
                onSelectionChange={(e) => {
                  if (isInternalUpdate.current) {
                    isInternalUpdate.current = false;
                    return;
                  }
                  setSelection(e.nativeEvent.selection);
                }}
              />

              {timeError ? (
                <Text style={styles.errorText}>{timeError}</Text>
              ) : (
                <Text style={styles.inputHelperText}>
                  {"ex: type \"4855\" → 48.55, type \"170288\" → 17:02.88"}
                </Text>
              )}

              <Pressable
                onPress={handleCompare}
                style={({ pressed }) => [
                  styles.compareBtn,
                  (!userTime.trim() || !!timeError) && styles.compareBtnDisabled,
                  pressed && styles.compareBtnPressed,
                ]}
                disabled={!userTime.trim() || !!timeError}
              >
                <Text style={styles.compareBtnText}>Analyze Performance</Text>
                <Ionicons name="sparkles" size={16} color="#fff" />
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
  container: { flex: 1, backgroundColor: "#f1f5f9" },
  header: {
    backgroundColor: "#0044ee",
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: { fontSize: 28, fontFamily: "PublicSans-Black", fontWeight: "900", color: "white", letterSpacing: -0.5 },
  subtitle: { fontSize: 13, color: "#c7d2fe", marginTop: 4, fontFamily: "PublicSans-Medium", fontWeight: "500" },
  filterBar: { marginTop: 20, width: "100%" },
  filterRow: { flexDirection: "row", gap: 8, width: "100%" },
  filterGroup: { flex: 1, flexDirection: "row", gap: 2, backgroundColor: "rgba(0,0,0,0.1)", padding: 3, borderRadius: 0 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: 0, alignItems: "center", justifyContent: "center" },
  filterBtnActive: { backgroundColor: "white" },
  filterBtnText: { color: "#c7d2fe", fontSize: 13, fontFamily: "PublicSans-Bold", fontWeight: "700" },
  filterBtnTextActive: { color: "#0044ee" },

  mainContent: { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 14 },
  sectionLabel: { fontSize: 11, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", color: "#94a3b8", letterSpacing: 1.2, marginBottom: 10, marginTop: 4 },
  
  // Scrollers -> Now Grids
  strokesContainer: { width: "100%", marginBottom: 16 },
  distancesContainer: { width: "100%" },
  distancesRow: { flexDirection: "row", flexWrap: "nowrap", gap: 4, justifyContent: "space-between" },
  strokesRow: { flexDirection: "row", flexWrap: "nowrap", gap: 4, justifyContent: "space-between" },
  selectorBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  selectorBtnActive: { backgroundColor: "#0044ee", borderColor: "#0044ee" },
  selectorText: { fontSize: 15, fontFamily: "PublicSans-Bold", fontWeight: "700", color: "#64748b" },
  selectorTextActive: { color: "white" },

  distanceBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 2,
    paddingVertical: 9,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  distanceBtnActive: { backgroundColor: "#0044ee", borderColor: "#0044ee" },
  distanceText: { fontSize: 14, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", color: "#64748b" },
  distanceTextActive: { color: "white" },

  // Input Card
  inputCard: {
    backgroundColor: "white",
    borderRadius: 0,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 18,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  inputHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 },
  inputActionLabel: { fontSize: 11, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", color: "#0044ee", letterSpacing: 1 },
  timeInput: {
    fontSize: 48,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    color: "#1e293b",
    textAlign: "center",
    paddingVertical: 4,
    marginBottom: 21,
  },
  compareBtn: {
    backgroundColor: "#0044ee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 0,
    shadowColor: "#0044ee",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  compareBtnDisabled: { backgroundColor: "#94a3b8", shadowOpacity: 0 },
  errorText: {
    color: "#ef4444",
    fontSize: 12,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    marginTop: -4,
    marginBottom: 16,
    marginLeft: 4,
  },
  inputHelperText: {
    color: "#64748b",
    fontSize: 9,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    textAlign: "center",
    marginTop: -4,
    marginBottom: 16,
    opacity: 0.7,
  },
  compareBtnPressed: { transform: [{ scale: 0.98 }] },
  compareBtnText: { color: "white", fontSize: 14, fontFamily: "PublicSans-ExtraBold", fontWeight: "800" },});

