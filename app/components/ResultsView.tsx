import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import {
    AgeGroup,
    Gender,
    getFuturesStandard,
    getJrNationalStandard,
    getMotivationalStandards,
    getNCSAStandard,
    getOlympicTrialStandard,
    getTSCStandards,
    getWinterJrStandard,
    mapEventToPowerIndex,
    PoolType,
} from "../utils/dataManager";

import type { EventName } from "../powerIndex";
import MotivationalStandardsView from "./MotivationalStandardsView";
import PowerIndexView from "./PowerIndexView";
import SingleStandardView from "./SingleStandardView";
import TwoStandardView from "./TwoStandardView";

interface ResultsViewProps {
  gender: Gender;
  poolType: PoolType;
  ageGroup: AgeGroup;
  event: string;
  userTime: string;
  onBackToInput: () => void;
}

type ViewMode =
  | "selection"
  | "motivational"
  | "tsc"
  | "futures"
  | "ncsa"
  | "winterJr"
  | "jrNational"
  | "olympicTrial";

export default function ResultsView({
  gender,
  poolType,
  ageGroup,
  event,
  userTime,
  onBackToInput,
}: ResultsViewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("selection");

  const motivationalStandards = getMotivationalStandards(
    gender,
    poolType,
    ageGroup,
    event,
  );
  const tscStandards = getTSCStandards(gender, poolType, event);
  const futuresStandard = getFuturesStandard(gender, poolType, event);
  const ncsaStandard = getNCSAStandard(gender, poolType, event);
  const winterJrStandard = getWinterJrStandard(gender, poolType, event);
  const jrNationalStandard = getJrNationalStandard(gender, poolType, event);
  const olympicTrialStandard = getOlympicTrialStandard(gender, poolType, event);
  const powerIndexEvent = mapEventToPowerIndex(
    poolType,
    event,
  ) as EventName | null;

  // ===== Sub views =====
  if (viewMode === "motivational" && motivationalStandards) {
    return (
      <MotivationalStandardsView
        standards={motivationalStandards}
        userTime={userTime}
        event={event}
        gender={gender}
        ageGroup={ageGroup}
        poolType={poolType}
        onBack={() => setViewMode("selection")}
      />
    );
  }

  if (viewMode === "tsc" && tscStandards) {
    return (
      <TwoStandardView
        standard={tscStandards.Sectional_Standard}
        bonusStandard={tscStandards.Sectional_Bonus_Standard}
        meetName="TSC Sectional Championships"
        standardLabel="Regional"
        bonusLabel="Bonus"
        userTime={userTime}
        event={event}
        gender={gender}
        ageGroup={ageGroup}
        poolType={poolType}
        colorClass="purple"
        onBack={() => setViewMode("selection")}
      />
    );
  }

  if (viewMode === "winterJr" && winterJrStandard) {
    return (
      <TwoStandardView
        standard={winterJrStandard.standard}
        bonusStandard={winterJrStandard.bonus}
        meetName={winterJrStandard.meet}
        standardLabel="Qualifying"
        bonusLabel="Bonus"
        userTime={userTime}
        event={event}
        gender={gender}
        ageGroup={ageGroup}
        poolType={poolType}
        colorClass="rose"
        onBack={() => setViewMode("selection")}
      />
    );
  }

  if (viewMode === "jrNational" && jrNationalStandard) {
    return (
      <TwoStandardView
        standard={jrNationalStandard.standard}
        bonusStandard={jrNationalStandard.bonus}
        meetName={jrNationalStandard.meet}
        standardLabel="Qualifying"
        bonusLabel="Bonus"
        userTime={userTime}
        event={event}
        gender={gender}
        ageGroup={ageGroup}
        poolType={poolType}
        colorClass="orange"
        onBack={() => setViewMode("selection")}
      />
    );
  }

  if (viewMode === "futures" && futuresStandard) {
    return (
      <SingleStandardView
        standard={futuresStandard.standard}
        meetName={futuresStandard.meet}
        standardLabel="Futures Cut"
        userTime={userTime}
        event={event}
        gender={gender}
        ageGroup={ageGroup}
        poolType={poolType}
        colorClass="emerald"
        onBack={() => setViewMode("selection")}
      />
    );
  }

  if (viewMode === "ncsa" && ncsaStandard) {
    return (
      <SingleStandardView
        standard={ncsaStandard.standard}
        meetName={ncsaStandard.meet}
        standardLabel="NCSA Cut"
        userTime={userTime}
        event={event}
        gender={gender}
        ageGroup={ageGroup}
        poolType={poolType}
        colorClass="sky"
        onBack={() => setViewMode("selection")}
      />
    );
  }

  if (viewMode === "olympicTrial" && olympicTrialStandard) {
    return (
      <SingleStandardView
        standard={olympicTrialStandard.standard}
        meetName={olympicTrialStandard.meet}
        standardLabel="Olympic Trial Cut"
        userTime={userTime}
        event={event}
        gender={gender}
        ageGroup={ageGroup}
        poolType={poolType}
        colorClass="indigo"
        onBack={() => setViewMode("selection")}
      />
    );
  }

  // ===== Selection screen =====
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={onBackToInput}>
          <Text style={styles.back}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>Your Results</Text>
        <Text style={styles.subtitle}>Choose a standards comparison</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Power Index */}
        {powerIndexEvent ? (
          <View style={{ marginBottom: 12 }}>
            <PowerIndexView
              gender={gender}
              powerIndexEvent={powerIndexEvent}
              time={userTime}
            />
          </View>
        ) : (
          <View style={styles.disabledBox}>
            <Text style={styles.disabledText}>Power Index not available</Text>
          </View>
        )}

        {/* Buttons */}
        {renderButton(
          "🇺🇸",
          "US Olympic Trial",
          poolType === "LCM" && olympicTrialStandard
            ? () => setViewMode("olympicTrial")
            : null,
        )}

        {renderButton(
          "🏊",
          "Age Group Motivational",
          motivationalStandards ? () => setViewMode("motivational") : null,
        )}

        {renderButton(
          "🏅",
          "Jr. National Cuts",
          jrNationalStandard ? () => setViewMode("jrNational") : null,
        )}

        {renderButton(
          "❄️",
          "Winter Jr. Cuts",
          winterJrStandard ? () => setViewMode("winterJr") : null,
        )}

        {renderButton(
          "⭐",
          "NCSA Cuts",
          ncsaStandard ? () => setViewMode("ncsa") : null,
        )}

        {renderButton(
          "⚡",
          "Futures Cuts",
          futuresStandard ? () => setViewMode("futures") : null,
        )}

        {renderButton(
          "🏆",
          "TSC Regional Cuts",
          tscStandards ? () => setViewMode("tsc") : null,
        )}
      </ScrollView>
    </View>
  );

  function renderButton(
    icon: string,
    label: string,
    onPress: (() => void) | null,
  ) {
    return (
      <Pressable
        onPress={onPress || undefined}
        style={[styles.card, !onPress && styles.disabled]}
      >
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.cardText}>{label}</Text>
        <Text style={styles.arrow}>{onPress ? "→" : "🔒"}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef2ff" },

  header: {
    backgroundColor: "#4f46e5",
    padding: 16,
  },
  back: { color: "white", marginBottom: 6 },
  title: { color: "white", fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "#c7d2fe", fontSize: 12 },

  content: { padding: 16 },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },

  disabled: {
    opacity: 0.5,
  },

  icon: { fontSize: 18, marginRight: 10 },
  cardText: { flex: 1, fontWeight: "600" },
  arrow: { fontSize: 16, color: "#6366f1" },

  disabledBox: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  disabledText: {
    textAlign: "center",
    fontSize: 12,
    color: "#9ca3af",
  },
});
