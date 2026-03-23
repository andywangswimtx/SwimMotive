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
} from "react-native";
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
  const [gender, setGender] = useState<Gender>("Boy");
  const [poolType, setPoolType] = useState<PoolType>("SCY");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("15-16");
  const [event, setEvent] = useState<string>("100_FR");
  const [userTime, setUserTime] = useState<string>("");

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
    <ScrollView contentContainerStyle={styles.container}>
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
              gender === "Boy" && styles.buttonSelectedBlue,
            ]}
          >
            <Text style={styles.buttonText}>Boy</Text>
          </Pressable>

          <Pressable
            onPress={() => setGender("Girl")}
            style={[
              styles.button,
              gender === "Girl" && styles.buttonSelectedPink,
            ]}
          >
            <Text style={styles.buttonText}>Girl</Text>
          </Pressable>
        </View>

        {/* Pool Type */}
        <Text style={styles.label}>Pool Type</Text>
        <View style={styles.row}>
          <Pressable
            onPress={() => handlePoolTypeChange("SCY")}
            style={[
              styles.button,
              poolType === "SCY" && styles.buttonSelectedCyan,
            ]}
          >
            <Text style={styles.buttonText}>SCY (Yards)</Text>
          </Pressable>

          <Pressable
            onPress={() => handlePoolTypeChange("LCM")}
            style={[
              styles.button,
              poolType === "LCM" && styles.buttonSelectedCyan,
            ]}
          >
            <Text style={styles.buttonText}>LCM (Meters)</Text>
          </Pressable>
        </View>

        {/* Age Group */}
        <Text style={styles.label}>Age Group</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={ageGroup}
            onValueChange={(value) => setAgeGroup(value)}
          >
            <Picker.Item label="13-14 years old" value="13-14" />
            <Picker.Item label="15-16 years old" value="15-16" />
            <Picker.Item label="17-18 years old" value="17-18" />
          </Picker>
        </View>

        {/* Event */}
        <Text style={styles.label}>Swim Event</Text>
        <View style={styles.pickerWrapper}>
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

        {/* User Time */}
        <Text style={styles.label}>Your Meet Time</Text>
        <TextInput
          value={userTime}
          onChangeText={setUserTime}
          placeholder="mm:ss.xx or ss.xx"
          style={styles.input}
        />
        <Text style={styles.helperText}>Examples: 1:05.23 or 28.45</Text>

        {/* Submit */}
        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>ANALYZE MY TIME</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#eef6ff",
  },
  header: {
    backgroundColor: "#2563eb",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#bfdbfe",
    textAlign: "center",
    marginTop: 4,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
  },
  label: {
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 12,
    color: "#374151",
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
  },
  buttonSelectedBlue: {
    backgroundColor: "#2563eb",
  },
  buttonSelectedPink: {
    backgroundColor: "#db2777",
  },
  buttonSelectedCyan: {
    backgroundColor: "#0891b2",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    overflow: "hidden",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  helperText: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
