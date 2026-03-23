import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Modal,
    Platform,
    TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    AgeGroup,
    Gender,
    getEventDisplayName,
    getEventsForPoolType,
    PoolType,
} from "../utils/dataManager";

interface InputFormProps {
  onSubmit: (data: {
    gender: Gender;
    poolType: PoolType;
    ageGroup: AgeGroup;
    event: string;
    userTime: string;
  }) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("15-16");
  const [event, setEvent] = useState<string>("100_FR");
  const [userTime, setUserTime] = useState<string>("");
  const [showAgePicker, setShowAgePicker] = useState(false);
  const [showEventPicker, setShowEventPicker] = useState(false);

  const events = getEventsForPoolType(poolType);

  const handlePoolTypeChange = (newPoolType: PoolType) => {
    setPoolType(newPoolType);
    const newEvents = getEventsForPoolType(newPoolType);
    setEvent(newEvents[0]);
  };

  const handleSubmit = () => {
    if (!event || !userTime) {
      Alert.alert("Missing Info", "Please fill in all fields");
      return;
    }

    onSubmit({ gender, poolType, ageGroup, event, userTime });
  };

  return (
    <ScrollView 
        contentContainerStyle={[
            styles.container, 
            { paddingTop: Math.max(insets.top, 16) }
        ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Swim Time Analyzer</Text>
        <Text style={styles.subtitle}>
          Track your progress against USA Swimming standards
        </Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <View style={styles.row}>
          <Pressable
            onPress={() => setGender("Boy")}
            style={[
              styles.button,
              gender === "Boy" ? styles.buttonSelectedBlue : styles.buttonUnselected,
            ]}
          >
            <Text style={[styles.buttonText, gender === "Boy" ? styles.textWhite : styles.textGray]}>Boy</Text>
          </Pressable>

          <Pressable
            onPress={() => setGender("Girl")}
            style={[
              styles.button,
              gender === "Girl" ? styles.buttonSelectedPink : styles.buttonUnselected,
            ]}
          >
            <Text style={[styles.buttonText, gender === "Girl" ? styles.textWhite : styles.textGray]}>Girl</Text>
          </Pressable>
        </View>

        {/* Pool Type */}
        <Text style={styles.label}>Pool Type</Text>
        <View style={styles.row}>
          <Pressable
            onPress={() => handlePoolTypeChange("SCY")}
            style={[
              styles.button,
              poolType === "SCY" ? styles.buttonSelectedCyan : styles.buttonUnselected,
            ]}
          >
            <Text style={[styles.buttonText, poolType === "SCY" ? styles.textWhite : styles.textGray]}>SCY (Yards)</Text>
          </Pressable>

          <Pressable
            onPress={() => handlePoolTypeChange("LCM")}
            style={[
              styles.button,
              poolType === "LCM" ? styles.buttonSelectedCyan : styles.buttonUnselected,
            ]}
          >
            <Text style={[styles.buttonText, poolType === "LCM" ? styles.textWhite : styles.textGray]}>LCM (Meters)</Text>
          </Pressable>
        </View>

        {/* Age Group */}
        <Text style={styles.label}>Age Group</Text>
        {Platform.OS === 'ios' ? (
          <TouchableOpacity 
            style={styles.pickerTrigger} 
            onPress={() => setShowAgePicker(true)}
          >
            <Text style={styles.pickerTriggerText}>{ageGroup} years old</Text>
            <Text style={styles.pickerChevron}>▼</Text>
          </TouchableOpacity>
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

        {/* Event */}
        <Text style={styles.label}>Swim Event</Text>
        {Platform.OS === 'ios' ? (
          <TouchableOpacity 
            style={styles.pickerTrigger} 
            onPress={() => setShowEventPicker(true)}
          >
            <Text style={styles.pickerTriggerText}>{getEventDisplayName(event)}</Text>
            <Text style={styles.pickerChevron}>▼</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={event}
              onValueChange={(value) => setEvent(value)}
              style={styles.picker}
            >
              {events.map((evt) => (
                <Picker.Item
                  key={evt}
                  label={getEventDisplayName(evt)}
                  value={evt}
                />
              ))}
            </Picker>
          </View>
        )}

        {/* User Time */}
        <Text style={styles.label}>Your Meet Time</Text>
        <TextInput
          value={userTime}
          onChangeText={setUserTime}
          placeholder="mm:ss.xx or ss.xx"
          style={styles.input}
          placeholderTextColor="#9ca3af"
        />
        <Text style={styles.helperText}>Examples: 1:05.23 or 28.45</Text>

        {/* Submit */}
        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>ANALYZE MY TIME</Text>
        </Pressable>
      </View>

      {/* iOS Age Picker Modal */}
      <Modal visible={showAgePicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Age Group</Text>
              <TouchableOpacity onPress={() => setShowAgePicker(false)}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
            <Picker
              selectedValue={ageGroup}
              onValueChange={(value) => setAgeGroup(value)}
            >
              <Picker.Item label="13-14 years old" value="13-14" />
              <Picker.Item label="15-16 years old" value="15-16" />
              <Picker.Item label="17-18 years old" value="17-18" />
            </Picker>
          </View>
        </View>
      </Modal>

      {/* iOS Event Picker Modal */}
      <Modal visible={showEventPicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
           <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Swim Event</Text>
                <TouchableOpacity onPress={() => setShowEventPicker(false)}>
                  <Text style={styles.doneButton}>Done</Text>
                </TouchableOpacity>
              </View>
              <Picker
                selectedValue={event}
                onValueChange={(value) => setEvent(value)}
              >
                {events.map((evt) => (
                  <Picker.Item
                    key={evt}
                    label={getEventDisplayName(evt)}
                    value={evt}
                  />
                ))}
              </Picker>
           </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f7ff",
  },
  header: {
    backgroundColor: "#2563eb",
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginBottom: -1, // Overlap for seamless integration
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    color: "#bfdbfe",
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 16,
    color: "#374151",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonUnselected: {
    backgroundColor: "#f3f4f6",
  },
  buttonSelectedBlue: {
    backgroundColor: "#2563eb",
  },
  buttonSelectedPink: {
    backgroundColor: "#2563eb", // Image shows blue for both gender selections if they were selected? Wait, let's use blue for Boy and maybe something similar for Girl if selected. In the image "Boy" is blue.
  },
  buttonSelectedCyan: {
    backgroundColor: "#0891b2",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 15,
  },
  textWhite: {
    color: "white",
  },
  textGray: {
    color: "#6b7280",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  pickerTrigger: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    backgroundColor: "white",
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerTriggerText: {
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "600",
  },
  pickerChevron: {
    color: "#9ca3af",
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  doneButton: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: "white",
    color: "#1f2937",
    fontWeight: "600",
  },
  helperText: {
    fontSize: 11,
    color: "#9ca3af",
    marginTop: 6,
  },
  submitButton: {
    backgroundColor: "#0ea5e9", // A vibrant blue-teal
    padding: 18,
    borderRadius: 12,
    marginTop: 24,
    alignItems: "center",
    shadowColor: "#0ea5e9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitText: {
    color: "white",
    fontWeight: "900",
    fontSize: 17,
    letterSpacing: 0.5,
  },
});
