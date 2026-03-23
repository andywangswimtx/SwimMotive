import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import InputForm from "./components/InputForm";
import ResultsView from "./components/ResultsView";
import { AgeGroup, Gender, PoolType } from "./utils/dataManager";

type AppState = "input" | "results";

interface SwimData {
  gender: Gender;
  poolType: PoolType;
  ageGroup: AgeGroup;
  event: string;
  userTime: string;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>("input");
  const [swimData, setSwimData] = useState<SwimData | null>(null);

  const handleSubmit = (data: SwimData) => {
    setSwimData(data);
    setAppState("results");
  };

  const handleBackToInput = () => {
    setAppState("input");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneFrame}>
        {appState === "input" ? (
          <InputForm onSubmit={handleSubmit} />
        ) : swimData ? (
          <ResultsView
            gender={swimData.gender}
            poolType={swimData.poolType}
            ageGroup={swimData.ageGroup}
            event={swimData.event}
            userTime={swimData.userTime}
            onBackToInput={handleBackToInput}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2937", // Tailwind gray-800
    justifyContent: "center",
    alignItems: "center",
  },
  phoneFrame: {
    flex: 1,
    width: "100%",
    // Optional: simulate phone frame (usually NOT needed in native)
    // maxWidth: 390,
    // maxHeight: 844,
    // borderRadius: 40,
    // borderWidth: 4,
    // borderColor: '#374151',
    // overflow: 'hidden',
  },
});
