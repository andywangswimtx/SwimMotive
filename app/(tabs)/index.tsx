import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  DeviceEventEmitter,
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
import ComingSoon from "../../components/ComingSoon";
import ResultsView from "../../components/ResultsView";
import SwipeBackWrapper from "../../components/SwipeBackWrapper";
import { useUserContext } from "../../context/UserContext";
import { colors } from "../../theme/colors";
import {
  AGC_SOURCES,
  AgeGroup,
  Gender,
  getAGCStandard,
  getEventsForPoolType,
  getMotivationalStandards,
  getTagStandards,
  PoolType,
} from "../../utils/dataManager";

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
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("11");
  
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
          if (parsed.ageGroup && ["9&U", "10", "11", "12", "13", "14"].includes(parsed.ageGroup)) {
            setAgeGroup(parsed.ageGroup);
          }
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
  const distanceOptions = distancesForStroke.map((distance) => ({
    distance,
    available:
      getMotivationalStandards(
        gender,
        poolType,
        ageGroup,
        `${distance}_${selectedStroke}`,
      ) !== null ||
      AGC_SOURCES.some(
        (source) =>
          getAGCStandard(
            source.id,
            gender,
            poolType,
            ageGroup,
            `${distance}_${selectedStroke}`,
          ) !== null,
      ) ||
      (() => {
        const tag = getTagStandards(
          gender,
          poolType,
          ageGroup,
          `${distance}_${selectedStroke}`,
        );
        return !!tag.tags || !!tag.bonus;
      })(),
  }));
  const availableDistances = distanceOptions
    .filter((option) => option.available)
    .map((option) => option.distance);

  // Ensure selectedDistance remains a valid event when filters change.
  useEffect(() => {
    if (!availableDistances.includes(selectedDistance)) {
      setSelectedDistance(availableDistances[0] || "");
    }
  }, [availableDistances, selectedDistance]);

  const handleTimeChange = (text: string) => {
    isInternalUpdate.current = true;
    const oldText = userTime;
    const oldSel = selection;

    // 1. Estimate where the cursor is in the raw 'text' input based on previous selection
    let estimatedSel = oldSel.start;
    if (oldSel.start !== oldSel.end) {
      // User replaced a selection
      const deletedLen = oldSel.end - oldSel.start;
      const remainingLen = oldText.length - deletedLen;
      const insertedLen = Math.max(0, text.length - remainingLen);
      estimatedSel = oldSel.start + insertedLen;
    } else {
      // No selection prior to change
      if (text.length > oldText.length) {
        // Insertion
        estimatedSel = oldSel.start + (text.length - oldText.length);
      } else if (text.length < oldText.length) {
        // Deletion
        estimatedSel = Math.max(0, oldSel.start - (oldText.length - text.length));
      }
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
    } else if (digits.length <= 6) {
      const m = digits.slice(0, -4);
      const s = digits.slice(-4, -2);
      const c = digits.slice(-2);
      formatted = `${m}:${s}.${c}`;
    } else {
      // 7+ digits: hour-long times (e.g. 1500/1650 free), h:mm:ss.cc
      const h = digits.slice(0, -6);
      const m = digits.slice(-6, -4);
      const s = digits.slice(-4, -2);
      const c = digits.slice(-2);
      formatted = `${h}:${m}:${s}.${c}`;
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
          <Text style={styles.title}>
            SwimMotiv{" "}
            <Text style={styles.titleAge}> [ Age 14&U ]</Text>
          </Text>
          <Text style={styles.subtitle}>Enter your time and select your event</Text>

          <View style={styles.filterBar}>
            <View style={styles.filterRow}>
              <View style={styles.filterGroup}>
                <FilterPill active={gender === "Boy"} label="Boy" onPress={() => setGender("Boy")} />
                <FilterPill active={gender === "Girl"} label="Girl" onPress={() => setGender("Girl")} />
              </View>
            </View>

            <View style={[styles.filterRow, { marginTop: 10 }]}>
              <View style={styles.filterGroup}>
                {(["9&U", "10", "11", "12", "13", "14"] as AgeGroup[]).map((age) => (
                  <FilterPill key={age} active={ageGroup === age} label={age} onPress={() => setAgeGroup(age)} />
                ))}
              </View>
            </View>

            <View style={[styles.filterRow, { marginTop: 10 }]}>
              <View style={styles.filterGroup}>
                <FilterPill active={poolType === "SCY"} label="SCY" onPress={() => setPoolType("SCY")} />
                <FilterPill active={poolType === "SCM"} label="SCM" onPress={() => setPoolType("SCM")} />
                <FilterPill active={poolType === "LCM"} label="LCM" onPress={() => setPoolType("LCM")} />
              </View>
            </View>
          </View>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <View style={styles.mainContent}>

            {/* Time Input Area */}
            <View style={styles.inputCard}>
              <View style={styles.inputHeader}>
                <Ionicons name="stopwatch-outline" size={18} color={colors.primary} />
                <Text style={styles.inputActionLabel}>ENTER YOUR TIME</Text>
              </View>

              <TextInput
                style={styles.timeInput}
                placeholder="0:00.00"
                placeholderTextColor={colors.textSubtle}
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
                  {"Just type digits \"4855\" → 48.55;  \"170288\" → 17:02.88"}
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

            {/* Stroke Selector */}
            <Text style={styles.sectionLabel}></Text>
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
                {distanceOptions.map(({ distance, available }) => (
                  <Pressable
                    key={distance}
                    onPress={() => setSelectedDistance(distance)}
                    disabled={!available}
                    style={[
                      styles.distanceBtn,
                      !available && styles.distanceBtnDisabled,
                      selectedDistance === distance && available && styles.distanceBtnActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.distanceText,
                        !available && styles.distanceTextDisabled,
                        selectedDistance === distance && available && styles.distanceTextActive,
                      ]}
                    >
                      {distance}
                    </Text>
                  </Pressable>
                ))}
              </View>
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
  container: { flex: 1, backgroundColor: colors.canvas },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {   fontSize: 32,  fontFamily: "PublicSans-Black",  fontWeight: "900",  color: "white",  letterSpacing: -0.5,},
  titleAge: {  fontSize: 20,  color: "#FFF0B8",},
  titleState: { color: "#FFF0B8" },
  subtitle: { fontSize: 15, color: "#FFF0B8", marginTop: 4, fontFamily: "PublicSans-Medium", fontWeight: "500" },
  filterBar: { marginTop: 40, width: "100%" },
  filterRow: { flexDirection: "row", gap: 8, width: "100%" },
  filterGroup: { flex: 1, flexDirection: "row", gap: 2, backgroundColor: "rgba(57,36,7,0.16)", padding: 3, borderRadius: 0 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: 0, alignItems: "center", justifyContent: "center" },
  filterBtnActive: { backgroundColor: colors.surface },
  filterBtnText: { color: "#FFF0B8", fontSize: 13, fontFamily: "PublicSans-Bold", fontWeight: "700" },
  filterBtnTextActive: { color: colors.primary },

  mainContent: { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 20 },
  sectionLabel: { fontSize: 11, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", color: colors.textSubtle, letterSpacing: 1.2, marginBottom: 10, marginTop: 8 },
  
  // Scrollers -> Now Grids
  strokesContainer: { width: "100%", marginBottom: 16 },
  distancesContainer: { width: "100%" },
  distancesRow: { flexDirection: "row", flexWrap: "nowrap", gap: 4, justifyContent: "space-between" },
  strokesRow: { flexDirection: "row", flexWrap: "nowrap", gap: 4, justifyContent: "space-between" },
  selectorBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectorBtnActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  selectorText: { fontSize: 15, fontFamily: "PublicSans-Bold", fontWeight: "700", color: colors.textMuted },
  selectorTextActive: { color: "white" },

  distanceBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: 2,
    paddingVertical: 9,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.border,
  },
  distanceBtnDisabled: { backgroundColor: colors.canvas, borderColor: colors.divider, opacity: 0.65 },
  distanceBtnActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  distanceText: { fontSize: 14, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", color: colors.textMuted },
  distanceTextDisabled: { color: colors.border },
  distanceTextActive: { color: "white" },

  // Input Card
  inputCard: {
    backgroundColor: colors.surface,
    borderRadius: 0,
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 18,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  inputHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 6, marginBottom: 12 },
  inputActionLabel: { fontSize: 11, fontFamily: "PublicSans-ExtraBold", fontWeight: "800", color: colors.primary, letterSpacing: 1 },
  timeInput: {
    fontSize: 48,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    color: colors.text,
    textAlign: "center",
    paddingVertical: 4,
    marginBottom: 21,
  },
  compareBtn: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 0,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  compareBtnDisabled: { backgroundColor: colors.textSubtle, shadowOpacity: 0 },
  errorText: {
    color: colors.danger,
    fontSize: 12,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    marginTop: -4,
    marginBottom: 16,
    marginLeft: 4,
  },
  inputHelperText: {
    color: colors.textMuted,
    fontSize: 12,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    textAlign: "center",
    marginTop: -4,
    marginBottom: 16,
    opacity: 0.7,
  },
  compareBtnPressed: { transform: [{ scale: 0.98 }] },
  compareBtnText: { color: "white", fontSize: 14, fontFamily: "PublicSans-ExtraBold", fontWeight: "800" },});

