import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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

import {
    calculatePowerIndex,
    EventName,
    interpretScore,
    parseTimeString,
} from "../utils/PowerIndex";
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
  const insets = useSafeAreaInsets();
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
        <View style={[styles.header, { paddingTop: Math.max(insets.top, 24) }]}>
          <Pressable onPress={onBackToInput} style={styles.backButton}>
            <Text style={styles.backText}>← Your Time Entry Page</Text>
          </Pressable>
  
          <Text style={styles.title}>Your Results</Text>
          <Text style={styles.subtitle}>Choose a standards comparison</Text>
        </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Power Index Summary Card */}
        {powerIndexEvent ? (
          <View style={{ marginBottom: 20 }}>
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

        {/* Standard Comparison Buttons */}
        {renderButton(
          "swim",
          "MaterialCommunityIcons",
          "#f1f5f9",
          "#3b82f6",
          "Age Group Motivational",
          motivationalStandards ? () => setViewMode("motivational") : null,
        )}

        {renderButton(
          "medal",
          "Ionicons",
          "#fff7ed",
          "#f97316",
          "Jr. National Cuts",
          jrNationalStandard ? () => setViewMode("jrNational") : null,
        )}

        {renderButton(
          "snowflake",
          "MaterialCommunityIcons",
          "#fff1f2",
          "#f43f5e",
          "Winter Jr. Cuts",
          winterJrStandard ? () => setViewMode("winterJr") : null,
        )}

        {renderButton(
          "star",
          "Ionicons",
          "#fefce8",
          "#eab308",
          "NCSA Cuts",
          ncsaStandard ? () => setViewMode("ncsa") : null,
        )}

        {renderButton(
          "flash",
          "Ionicons",
          "#f0fdf4",
          "#10b981",
          "Futures Cuts",
          futuresStandard ? () => setViewMode("futures") : null,
        )}

        {renderButton(
          "trophy",
          "Ionicons",
          "#f5f3ff",
          "#8b5cf6",
          "TSC Regional Cuts",
          tscStandards ? () => setViewMode("tsc") : null,
        )}

        {renderButton(
          "flag",
          "Ionicons",
          "#fef2f2",
          "#be123c",
          "Olympic Trial Cuts",
          olympicTrialStandard ? () => setViewMode("olympicTrial") : null,
        )}

        {/* Coming Soon Section */}
        <Text style={styles.sectionHeader}>COMING SOON</Text>
        <View style={styles.disabledBox}>
            <Text style={styles.disabledText}>More standards being added...</Text>
        </View>
      </ScrollView>
    </View>
  );

  function renderButton(
    icon: string,
    iconLib: "Ionicons" | "MaterialCommunityIcons",
    iconBg: string,
    color: string,
    label: string,
    onPress: (() => void) | null,
  ) {
    const IconComp = iconLib === "Ionicons" ? Ionicons : MaterialCommunityIcons;

    return (
      <Pressable
        onPress={onPress || undefined}
        style={[styles.card, !onPress && styles.disabledCard]}
      >
        <View style={[styles.iconWrapper, { backgroundColor: iconBg }]}>
           <IconComp name={icon as any} size={20} color={color} />
        </View>
        <Text style={[styles.cardText, !onPress && styles.disabledTextSecondary]}>{label}</Text>
        <Ionicons 
            name="arrow-forward" 
            size={18} 
            color={onPress ? color : "#9ca3af"} 
            style={{ opacity: onPress ? 1 : 0.4 }} 
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },

  header: {
    backgroundColor: "#4f46e5",
    padding: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    zIndex: 10,
  },
  backButton: {
    marginBottom: 12,
  },
  backText: {
    color: "#e0e7ff",
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  subtitle: {
    color: "#c7d2fe",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "500",
  },

  content: {
    padding: 20,
    paddingTop: 30,
  },

  sectionHeader: {
    fontSize: 13,
    fontWeight: "800",
    color: "#94a3b8",
    marginTop: 30,
    marginBottom: 12,
    marginLeft: 4,
    letterSpacing: 1,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  cardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
  },

  disabledCard: {
    backgroundColor: "#f1f5f9",
    shadowOpacity: 0,
    elevation: 0,
  },

  disabledTextSecondary: {
    color: "#94a3b8",
  },

  disabledBox: {
    backgroundColor: "#f1f5f9",
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderStyle: "dashed",
  },

  disabledText: {
    textAlign: "center",
    fontSize: 14,
    color: "#94a3b8",
    fontWeight: "600",
  },
});
