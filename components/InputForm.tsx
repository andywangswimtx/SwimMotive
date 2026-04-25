import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useCallback, useRef, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  AgeGroup,
  Gender,
  getEventDisplayName,
  getEventsForPoolType,
  PoolType,
} from "../utils/dataManager";

// ─── Types ──────────────────────────────────────────────
interface InputFormProps {
  onSubmit: (data: {
    gender: Gender;
    poolType: PoolType;
    ageGroup: AgeGroup;
    event: string;
    userTime: string;
  }) => void;
}

// ─── Segmented Control ──────────────────────────────────
interface SegmentOption<T> {
  value: T;
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

function SegmentedControl<T extends string>({
  options,
  selected,
  onSelect,
  activeColor,
}: {
  options: SegmentOption<T>[];
  selected: T;
  onSelect: (value: T) => void;
  activeColor: string;
}) {
  return (
    <View style={styles.segmentedContainer}>
      {options.map((opt) => {
        const isActive = opt.value === selected;
        return (
          <Pressable
            key={opt.value}
            onPress={() => onSelect(opt.value)}
            style={({ pressed }) => [
              styles.segmentedButton,
              isActive && [
                styles.segmentedButtonActive,
                { backgroundColor: activeColor },
              ],
              pressed && !isActive && { opacity: 0.7 },
            ]}
          >
            {opt.icon && (
              <Ionicons
                name={opt.icon}
                size={16}
                color={isActive ? "#fff" : "#94a3b8"}
                style={{ marginRight: 6 }}
              />
            )}
            <Text
              style={[
                styles.segmentText,
                isActive
                  ? styles.segmentTextActive
                  : styles.segmentTextInactive,
              ]}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

// ─── Dropdown Trigger ───────────────────────────────────
function DropdownTrigger({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.dropdownTrigger,
        pressed && { borderColor: "#6366f1", backgroundColor: "#faf5ff" },
      ]}
    >
      <Text style={styles.dropdownText}>{label}</Text>
      <Ionicons name="chevron-down" size={18} color="#94a3b8" />
    </Pressable>
  );
}

// ─── Main Component ─────────────────────────────────────
export default function InputForm({ onSubmit }: InputFormProps) {
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);

  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("15-16");
  const [selectedStroke, setSelectedStroke] = useState("FR");
  const [selectedDistance, setSelectedDistance] = useState("100");
  const [userTime, setUserTime] = useState<string>("");
  const [showAgePicker, setShowAgePicker] = useState(false);

  const allAvailableEvents = getEventsForPoolType(poolType);
  const distancesForStroke = allAvailableEvents
    .filter(evt => evt.endsWith(`_${selectedStroke}`))
    .map(evt => evt.split("_")[0]);

  // Ensure selectedDistance is valid when stroke changes
  React.useEffect(() => {
    if (!distancesForStroke.includes(selectedDistance)) {
      setSelectedDistance(distancesForStroke[0] || "");
    }
  }, [selectedStroke, poolType]);

  const STROKES = [
    { id: "FR", label: "Freestyle", icon: "water" as const },
    { id: "BK", label: "Backstroke", icon: "chevron-up" as const },
    { id: "BR", label: "Breaststroke", icon: "ellipse" as const },
    { id: "FL", label: "Butterfly", icon: "flash" as const },
    { id: "IM", label: "IM", icon: "shuffle" as const },
  ];

  const handlePoolTypeChange = useCallback((newPoolType: PoolType) => {
    setPoolType(newPoolType);
  }, []);

  const handleSubmit = useCallback(() => {
    const eventCode = `${selectedDistance}_${selectedStroke}`;
    if (!userTime.trim()) {
      Alert.alert("Missing Info", "Please enter your time");
      return;
    }
    onSubmit({ gender, poolType, ageGroup, event: eventCode, userTime });
  }, [gender, poolType, ageGroup, selectedStroke, selectedDistance, userTime, onSubmit]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
        <ScrollView
          ref={scrollViewRef}
          style={styles.scroll}
          contentContainerStyle={{
            paddingBottom: 40 + insets.bottom,
            paddingTop: 0,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ────── Header ────── */}
          <View style={[styles.headerBg, { paddingTop: Math.max(insets.top, 20) + 10 }]}>
            <Text style={styles.title}>Swim Time Calculator</Text>
            <Image
              source={require("../assets/images/four-strokes.png")}
              style={styles.headerImage}
            />
          </View>

        {/* ────── Form Card ────── */}
        <View style={styles.card}>
          {/* Gender */}
          <Text style={[styles.fieldLabel, { marginTop: 4 }]}>
            <Ionicons name="people" size={14} color="#64748b" /> Gender
          </Text>
          <SegmentedControl
            options={[
              { value: "Boy" as Gender, label: "Boy", icon: "male" },
              { value: "Girl" as Gender, label: "Girl", icon: "female" },
            ]}
            selected={gender}
            onSelect={setGender}
            activeColor={gender === "Boy" ? "#6366f1" : "#ec4899"}
          />

          {/* Pool Type */}
          <Text style={styles.fieldLabel}>
            <Ionicons name="water" size={14} color="#64748b" /> Pool Type
          </Text>
          <SegmentedControl
            options={[
              { value: "SCY" as PoolType, label: "SCY (Yards)" },
              { value: "LCM" as PoolType, label: "LCM (Meters)" },
            ]}
            selected={poolType}
            onSelect={handlePoolTypeChange}
            activeColor="#0ea5e9"
          />

          {/* Age Group */}
          <Text style={styles.fieldLabel}>
            <Ionicons name="calendar" size={14} color="#64748b" /> Age Group
          </Text>
          {Platform.OS === "ios" ? (
            <DropdownTrigger
              label={`${ageGroup} years old`}
              onPress={() => setShowAgePicker(true)}
            />
          ) : (
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={ageGroup}
                onValueChange={(value) => setAgeGroup(value)}
                style={styles.picker}
              >
                <Picker.Item label="13-14 years old" value="13-14" />
                <Picker.Item label="15-16 years old" value="15-16" />
                <Picker.Item label="17-18 years old" value="17-18" />
              </Picker>
            </View>
          )}

          {/* Stroke Selector */}
          <Text style={styles.fieldLabel}>
            <Ionicons name="water" size={14} color="#64748b" /> Select Stroke
          </Text>
          <View style={styles.strokesContainer}>
            <View style={styles.categoryWrap}>
              {STROKES.slice(0, 3).map((s) => (
                <Pressable
                  key={s.id}
                  onPress={() => setSelectedStroke(s.id)}
                  style={[styles.selectorBtn, selectedStroke === s.id && styles.selectorBtnActive]}
                >
                  <Ionicons name={s.icon} size={14} color={selectedStroke === s.id ? "#fff" : "#64748b"} style={{ marginRight: 6 }} />
                  <Text style={[styles.selectorText, selectedStroke === s.id && styles.selectorTextActive]}>{s.label}</Text>
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
                  <Ionicons name={s.icon} size={14} color={selectedStroke === s.id ? "#fff" : "#64748b"} style={{ marginRight: 6 }} />
                  <Text style={[styles.selectorText, selectedStroke === s.id && styles.selectorTextActive]}>{s.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Distance Selector */}
          <Text style={styles.fieldLabel}>
            <Ionicons name="navigate" size={14} color="#64748b" /> Select Distance
          </Text>
          <View style={styles.categoryWrap}>
            {distancesForStroke.map((d) => (
              <Pressable
                key={d}
                onPress={() => setSelectedDistance(d)}
                style={[styles.distanceBtn, selectedDistance === d && styles.distanceBtnActive]}
              >
                <Text style={[styles.distanceText, selectedDistance === d && styles.distanceTextActive]}>{d}</Text>
              </Pressable>
            ))}
          </View>

          {/* User Time */}
          <Text style={styles.fieldLabel}>
            <Ionicons name="timer" size={14} color="#64748b" /> Your Meet Time
          </Text>
          <View style={styles.timeInputRow}>
            <TextInput
              value={userTime}
              onChangeText={setUserTime}
              placeholder="mm:ss.xx  or  ss.xx"
              style={styles.input}
              placeholderTextColor="#c7d2fe"
              keyboardType="default"
              onFocus={() => {
                setTimeout(() => {
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                }, 300);
              }}
            />
          </View>
          <Text style={styles.helperText}>
            <Ionicons name="information-circle" size={11} color="#94a3b8" />{" "}
            Examples: 1:05.23 or 28.45
          </Text>

          {/* Submit */}
          <Pressable
            style={({ pressed }) => [
              styles.submitButton,
              pressed && styles.submitButtonPressed,
            ]}
            onPress={handleSubmit}
          >
            <Ionicons
              name="analytics"
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.submitText}>ANALYZE MY TIME</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* ────── iOS Age Picker Modal ────── */}
      <Modal visible={showAgePicker} transparent animationType="slide">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowAgePicker(false)}
        >
          <Pressable style={styles.modalContent}>
            <View style={styles.modalHandle} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Age Group</Text>
              <Pressable onPress={() => setShowAgePicker(false)} hitSlop={12}>
                <Text style={styles.doneButton}>Done</Text>
              </Pressable>
            </View>
            <Picker
              selectedValue={ageGroup}
              onValueChange={(value) => setAgeGroup(value)}
              itemStyle={{ color: "#1f2937" }}
            >
              <Picker.Item label="13-14 years old" value="13-14" />
              <Picker.Item label="15-16 years old" value="15-16" />
              <Picker.Item label="17-18 years old" value="17-18" />
            </Picker>
          </Pressable>
        </Pressable>
      </Modal>

      {/* ────── iOS Event Picker Modal ────── */}
      <Modal visible={showEventPicker} transparent animationType="slide">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowEventPicker(false)}
        >
          <Pressable style={styles.modalContent}>
            <View style={styles.modalHandle} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Swim Event</Text>
              <Pressable onPress={() => setShowEventPicker(false)} hitSlop={12}>
                <Text style={styles.doneButton}>Done</Text>
              </Pressable>
            </View>
            <Picker
              selectedValue={event}
              onValueChange={(value) => setEvent(value)}
              itemStyle={{ color: "#1f2937" }}
            >
              {events.map((evt) => (
                <Picker.Item
                  key={evt}
                  label={formatEventName(evt)}
                  value={evt}
                />
              ))}
            </Picker>
          </Pressable>
        </Pressable>
      </Modal>
    </KeyboardAvoidingView>
  );
}

// ─── Styles ─────────────────────────────────────────────
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#f0f4ff",
  },

  // ── Header ──
  headerBg: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  subtitle: {
    color: "#c7d2fe",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: -0.5,
    marginTop: -4,
  },
  headerImage: {
    width: "80%",
    height: 40,
    marginTop: 8,
    resizeMode: "contain",
    tintColor: "rgba(255,255,255,0.8)",
  },

  // ── Form Card ──
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 24,
    padding: 22,
    paddingTop: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },

  // ── Field labels ──
  fieldLabel: {
    fontWeight: "700",
    fontSize: 13,
    color: "#475569",
    marginBottom: 8,
    marginTop: 18,
    letterSpacing: 0.2,
  },

  // ── Segmented Controls ──
  segmentedContainer: {
    flexDirection: "row",
    backgroundColor: "#f1f5f9",
    borderRadius: 14,
    padding: 4,
  },
  segmentedButton: {
    flex: 1,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  segmentedButtonActive: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  segmentText: {
    fontWeight: "700",
    fontSize: 14,
  },
  segmentTextActive: {
    color: "#fff",
  },
  segmentTextInactive: {
    color: "#64748b",
  },

  // ── Selective Grid Styles ──
  strokesContainer: { width: "100%" },
  categoryWrap: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  selectorBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  selectorBtnActive: { backgroundColor: "#6366f1", borderColor: "#4f46e5" },
  selectorText: { fontSize: 13, fontWeight: "700", color: "#64748b" },
  selectorTextActive: { color: "#fff" },

  distanceBtn: {
    minWidth: 50,
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  distanceBtnActive: { backgroundColor: "#6366f1", borderColor: "#4f46e5" },
  distanceText: { fontSize: 13, fontWeight: "800", color: "#64748b" },
  distanceTextActive: { color: "#fff" },

  // ── Dropdowns ──
  dropdownTrigger: {
    borderWidth: 1.5,
    borderColor: "#e2e8f0",
    borderRadius: 14,
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 15,
    color: "#1e293b",
    fontWeight: "600",
  },

  pickerWrapper: {
    borderWidth: 1.5,
    borderColor: "#e2e8f0",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: "100%",
  },

  // ── Time Input ──
  timeInputRow: {
    position: "relative",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#e2e8f0",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#faf5ff",
    color: "#1e293b",
    fontWeight: "600",
  },
  helperText: {
    fontSize: 11,
    color: "#94a3b8",
    marginTop: 6,
    fontWeight: "500",
  },

  // ── Submit ──
  submitButton: {
    backgroundColor: "#4f46e5",
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  submitButtonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  submitText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.8,
  },

  // ── Modals ──
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingBottom: 40,
  },
  modalHandle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#d1d5db",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 4,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1e293b",
  },
  doneButton: {
    color: "#6366f1",
    fontSize: 16,
    fontWeight: "700",
  },
});
