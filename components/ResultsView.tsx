import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  AgeGroup,
  Gender,
  getEventDisplayName,
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

import { EventName } from "../utils/PowerIndex";
import MotivationalStandardsView from "./MotivationalStandardsView";
import PowerIndexView from "./PowerIndexView";
import SingleStandardView from "./SingleStandardView";
import SwipeBackWrapper from "./SwipeBackWrapper";
import TwoStandardView from "./TwoStandardView";

// ─── Types ──────────────────────────────────────────────
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

// ─── Button config ──────────────────────────────────────
interface StandardButtonConfig {
  id: ViewMode;
  icon: string;
  iconLib: "Ionicons" | "MaterialCommunityIcons";
  color: string;
  iconBg: string;
  label: string;
  subtitle: string;
  available: boolean;
}

// ─── Standard Card Component ────────────────────────────
function StandardCard({
  config,
  onPress,
}: {
  config: StandardButtonConfig;
  onPress: () => void;
}) {
  const IconComp =
    config.iconLib === "Ionicons" ? Ionicons : MaterialCommunityIcons;

  if (!config.available) {
    return (
      <View style={[styles.card, styles.cardDisabled]}>
        <View style={[styles.iconBubble, { backgroundColor: "#f1f5f9" }]}>
          <IconComp name={config.icon as any} size={20} color="#cbd5e1" />
        </View>
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, { color: "#94a3b8" }]}>
            {config.label}
          </Text>
          <Text style={[styles.cardSub, { color: "#cbd5e1" }]}>
            Not available for this event
          </Text>
        </View>
        <Ionicons name="lock-closed" size={16} color="#cbd5e1" />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={[styles.iconBubble, { backgroundColor: config.iconBg }]}>
        <IconComp name={config.icon as any} size={20} color={config.color} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{config.label}</Text>
        <Text style={styles.cardSub}>{config.subtitle}</Text>
      </View>
      <View style={[styles.arrowBubble, { backgroundColor: config.iconBg }]}>
        <Ionicons name="chevron-forward" size={16} color={config.color} />
      </View>
    </Pressable>
  );
}

// ─── Main Component ─────────────────────────────────────
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
  const navigation = useNavigation<any>();

  // Back gesture → go to selection first
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e: any) => {
      if (viewMode !== "selection") {
        e.preventDefault();
        setViewMode("selection");
      }
    });
    return unsubscribe;
  }, [navigation, viewMode]);

  // Reset on focus
  useFocusEffect(
    useCallback(() => {
      setViewMode("selection");
    }, []),
  );

  // Tab press reset
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      setViewMode("selection");
    });
    return unsubscribe;
  }, [navigation]);

  // Gray out tab when in sub-view
  useEffect(() => {
    navigation.setOptions({
      tabBarActiveTintColor:
        viewMode !== "selection" ? "#9ca3af" : "#4f46e5",
    });
  }, [navigation, viewMode]);

  // Memoized standards
  const {
    motivationalStandards,
    tscStandards,
    futuresStandard,
    ncsaStandard,
    winterJrStandard,
    jrNationalStandard,
    olympicTrialStandard,
    powerIndexEvent,
  } = React.useMemo(
    () => ({
      motivationalStandards: getMotivationalStandards(gender, poolType, ageGroup, event),
      tscStandards: getTSCStandards(gender, poolType, event),
      futuresStandard: getFuturesStandard(gender, poolType, event),
      ncsaStandard: getNCSAStandard(gender, poolType, event),
      winterJrStandard: getWinterJrStandard(gender, poolType, event),
      jrNationalStandard: getJrNationalStandard(gender, poolType, event),
      olympicTrialStandard: getOlympicTrialStandard(gender, poolType, event),
      powerIndexEvent: mapEventToPowerIndex(poolType, event) as EventName | null,
    }),
    [gender, poolType, ageGroup, event],
  );

  const goBack = useCallback(() => setViewMode("selection"), []);

  // ===== Sub views =====
  if (viewMode === "motivational" && motivationalStandards) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <MotivationalStandardsView
          standards={motivationalStandards}
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "tsc" && tscStandards) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <TwoStandardView
          standard={tscStandards.Sectional_Standard}
          bonusStandard={tscStandards.Sectional_Bonus_Standard}
          meetName="TSC Sectionals"
          standardLabel="Regional"
          bonusLabel="Bonus"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          colorClass="purple"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "winterJr" && winterJrStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
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
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "jrNational" && jrNationalStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <SingleStandardView
          standard={jrNationalStandard.standard}
          meetName={jrNationalStandard.meet}
          standardLabel="Qualifying"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          colorClass="orange"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "futures" && futuresStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
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
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "ncsa" && ncsaStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
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
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "olympicTrial" && olympicTrialStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
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
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  // ===== Build button configs =====
  const buttons: StandardButtonConfig[] = [
    {
      id: "motivational",
      icon: "swim",
      iconLib: "MaterialCommunityIcons",
      color: "#3b82f6",
      iconBg: "#eff6ff",
      label: "USA Swimming Motivational Cuts",
      subtitle: "2024–2028 · B through AAAA",
      available: !!motivationalStandards,
    },
    {
      id: "tsc",
      icon: "trophy",
      iconLib: "Ionicons",
      color: "#8b5cf6",
      iconBg: "#f5f3ff",
      label: "TSC Sectionals",
      subtitle: "Sectional & Bonus standards",
      available: !!tscStandards,
    },
    {
      id: "ncsa",
      icon: "star",
      iconLib: "Ionicons",
      color: "#eab308",
      iconBg: "#fefce8",
      label: "NCSA Standards",
      subtitle: "2025 Spring Championships",
      available: !!ncsaStandard,
    },
    {
      id: "futures",
      icon: "flash",
      iconLib: "Ionicons",
      color: "#10b981",
      iconBg: "#ecfdf5",
      label: "Futures",
      subtitle: "2026 TYR Futures Championships",
      available: !!futuresStandard,
    },
    {
      id: "winterJr",
      icon: "snowflake",
      iconLib: "MaterialCommunityIcons",
      color: "#f43f5e",
      iconBg: "#fff1f2",
      label: "Winter Jr.",
      subtitle: "2026 Winter Juniors",
      available: !!winterJrStandard,
    },
    {
      id: "jrNational",
      icon: "medal",
      iconLib: "Ionicons",
      color: "#f97316",
      iconBg: "#fff7ed",
      label: "Jr. National",
      subtitle: "2026 Junior Nationals",
      available: !!jrNationalStandard,
    },
    {
      id: "olympicTrial",
      icon: "flag",
      iconLib: "Ionicons",
      color: "#be123c",
      iconBg: "#fff1f2",
      label: "Olympic Trials",
      subtitle: "2024 US Olympic Trials · LCM only",
      available: !!olympicTrialStandard,
    },
  ];

  // Format event for header subtitle
  const eventDisplay = getEventDisplayName(event);
  const poolSuffix = poolType === "SCY" ? "Y" : "M";
  const formattedEvent = eventDisplay.replace(/^(\d+)/, `$1${poolSuffix}`);

  // ===== Selection screen =====
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 24) }]}>
        <Text style={styles.headerTitle}>Swim Standards</Text>
        <Text style={styles.headerSubtitle}>
          Choose a standard to view
        </Text>

        {/* Context pills */}
        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Ionicons
              name={gender === "Boy" ? "male" : "female"}
              size={12}
              color="#e0e7ff"
            />
            <Text style={styles.pillText}>{gender}</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{poolType}</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{ageGroup}</Text>
          </View>
          <View style={[styles.pill, styles.pillAccent]}>
            <Ionicons name="stopwatch" size={12} color="#fff" />
            <Text style={[styles.pillText, { color: "#fff" }]}>
              {formattedEvent}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Power Index */}
        {powerIndexEvent ? (
          <View style={{ marginBottom: 16 }}>
            <PowerIndexView
              gender={gender}
              powerIndexEvent={powerIndexEvent}
              time={userTime}
            />
          </View>
        ) : (
          <View style={styles.piUnavailable}>
            <Ionicons name="analytics-outline" size={18} color="#94a3b8" />
            <Text style={styles.piUnavailableText}>
              Power Index not available for this event
            </Text>
          </View>
        )}

        {/* Section label */}
        <Text style={styles.sectionLabel}>STANDARDS COMPARISON</Text>

        {/* Standard Buttons */}
        {buttons.map((btn) => (
          <StandardCard
            key={btn.id}
            config={btn}
            onPress={() => setViewMode(btn.id)}
          />
        ))}

        {/* Coming Soon */}
        <Text style={styles.sectionLabel}>COMING SOON</Text>
        <View style={styles.comingSoon}>
          <Ionicons name="time-outline" size={18} color="#94a3b8" />
          <Text style={styles.comingSoonText}>
            More standards being added...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4ff",
  },

  // ── Header ──
  header: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 24,
    paddingBottom: 22,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    zIndex: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    color: "#c7d2fe",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "500",
  },

  // Context pills
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 14,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#e0e7ff",
  },
  pillAccent: {
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  // ── Scroll ──
  scrollContent: {
    padding: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },

  // ── Section labels ──
  sectionLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: 1.2,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 4,
  },

  // ── Standard Cards ──
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 18,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  cardDisabled: {
    backgroundColor: "#f8fafc",
    shadowOpacity: 0,
    elevation: 0,
    borderColor: "#e2e8f0",
  },
  iconBubble: {
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1e293b",
  },
  cardSub: {
    fontSize: 11,
    fontWeight: "500",
    color: "#94a3b8",
    marginTop: 2,
  },
  arrowBubble: {
    width: 28,
    height: 28,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  // ── Power Index unavailable ──
  piUnavailable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 18,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderStyle: "dashed",
  },
  piUnavailableText: {
    fontSize: 13,
    color: "#94a3b8",
    fontWeight: "600",
  },

  // ── Coming Soon ──
  comingSoon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#f8fafc",
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderStyle: "dashed",
  },
  comingSoonText: {
    fontSize: 13,
    color: "#94a3b8",
    fontWeight: "600",
  },
});
