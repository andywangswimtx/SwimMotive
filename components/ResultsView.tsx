import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Platform, Pressable, ScrollView, StyleSheet, Text, View, DeviceEventEmitter } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  AgeGroup,
  Gender,
  getEventDisplayName,
  getFutures18UStandard,
  getFutures19OStandard,
  getGulfSeniorStandard,
  getGulfStandard,
  getJrNationalStandard,
  getMotivationalStandards,
  getNCSAStandard,
  getOlympicStandard,
  getOlympicTrialStandard,
  getProSwim18UStandard,
  getProSwim19OStandard,
  getTAGSStandard,
  getTSCStandards,
  getToyotaNational18UStandard,
  getToyotaNational19OStandard,
  getUSOpenStandard,
  getWinterJrStandard,
  mapEventToPowerIndex,
  PoolType,
} from "../utils/dataManager";

import { EventName } from "../utils/PowerIndex";
import ComingSoon from "./ComingSoon";
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
  | "olympicTrial"
  | "olympic"
  | "tags"
  | "gulf"
  | "gulfSenior"
  | "toyotaNational18U"
  | "usOpen"
  | "proSwim19O";

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
  notAvailableReason?: string;
}

// ─── Standard Card Component ────────────────────────────
function StandardCard({
  config,
  onPress,
}: {
  config: StandardButtonConfig;
  onPress: () => void;
}) {
  const IconComp = config.iconLib === "Ionicons" ? Ionicons : MaterialCommunityIcons;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        !config.available && styles.cardDisabled,
        pressed && config.available && styles.cardPressed,
      ]}
    >
      <View style={[styles.iconBubble, { backgroundColor: config.available ? config.iconBg : "#f1f5f9" }]}>
        <IconComp name={config.icon as any} size={20} color={config.available ? config.color : "#cbd5e1"} />
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, !config.available && { color: "#94a3b8" }]}>
          {config.label}
        </Text>
        <Text style={[styles.cardSub, !config.available && { color: "#cbd5e1" }]}>
          {config.available ? config.subtitle : (config.notAvailableReason || "Not available for this event")}
        </Text>
      </View>

      {config.available ? (
        <View style={[styles.arrowBubble, { backgroundColor: config.iconBg }]}>
          <Ionicons name="chevron-forward" size={16} color={config.color} />
        </View>
      ) : (
        <Ionicons name="lock-closed" size={16} color="#cbd5e1" />
      )}
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
    const sub = DeviceEventEmitter.addListener("reset-index-tab", () => {
      setViewMode("selection");
    });
    return () => {
      unsubscribe();
      sub.remove();
    };
  }, [navigation]);



  // Memoized standards
  const {
    motivationalStandards,
    tscStandards,
    futuresStandard,
    ncsaStandard,
    winterJrStandard,
    jrNationalStandard,
    olympicTrialStandard,
    tagsStandard,
    gulfStandard,
    gulfSeniorStandard,
    toyotaNationalStandard,
    usOpenStandard,
    proSwimStandard,
    olympicStandard,
    powerIndexEvent,
  } = React.useMemo(
    () => ({
      motivationalStandards: getMotivationalStandards(
        gender,
        poolType,
        ageGroup,
        event,
      ),
      tscStandards: getTSCStandards(gender, poolType, event),
      futuresStandard: ageGroup === "19 & Over"
        ? getFutures19OStandard(gender, poolType, event)
        : getFutures18UStandard(gender, poolType, event),
      ncsaStandard: getNCSAStandard(gender, poolType, event),
      winterJrStandard: getWinterJrStandard(gender, poolType, event),
      jrNationalStandard: getJrNationalStandard(gender, poolType, event),
      olympicTrialStandard: getOlympicTrialStandard(gender, poolType, event),
      tagsStandard: getTAGSStandard(gender, poolType, ageGroup, event),
      gulfStandard: getGulfStandard(gender, poolType, ageGroup, event),
      gulfSeniorStandard: getGulfSeniorStandard(gender, poolType, event),
      toyotaNationalStandard: ageGroup === "19 & Over"
        ? getToyotaNational19OStandard(gender, poolType, event)
        : getToyotaNational18UStandard(gender, poolType, event),
      usOpenStandard: getUSOpenStandard(gender, poolType, event),
      proSwimStandard: ageGroup === "19 & Over"
        ? getProSwim19OStandard(gender, poolType, event)
        : getProSwim18UStandard(gender, poolType, event),
      olympicStandard: getOlympicStandard(gender, poolType, event),
      powerIndexEvent: mapEventToPowerIndex(
        poolType,
        event,
      ) as EventName | null,
    }),
    [gender, poolType, ageGroup, event],
  );

  const goBack = useCallback(() => setViewMode("selection"), []);

  const handlePressStandard = useCallback((targetMode: ViewMode, isAvailable: boolean) => {
    if (!userTime || userTime.trim() === "") {
      Alert.alert(
        "Input Required",
        "Please enter an event and time in the time input page",
        [{ text: "OK" }]
      );
      return;
    }
    if (isAvailable) {
      setViewMode(targetMode);
    }
  }, [userTime]);

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
          standard={tscStandards.Sectionals_Standard}
          bonusStandard={tscStandards.Sectionals_Bonus_Standard}
          meetName="TSC Sectionals"
          standardLabel="TSC Sectionals"
          bonusLabel="Bonus"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#8b5cf6"
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
          themeColor="#3b82f6"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "jrNational" && jrNationalStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
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
          themeColor="#f43f5e"
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
          themeColor="#f59e0b"
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
          themeColor="#06b6d4"
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
          themeColor="#be123c"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "tags" && tagsStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <TwoStandardView
          standard={tagsStandard.standard}
          bonusStandard={tagsStandard.bonus}
          meetName={tagsStandard.meet}
          standardLabel="TAGS Cut"
          bonusLabel="TAGS Bonus"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#14b8a6"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "gulf" && gulfStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <SingleStandardView
          standard={gulfStandard.standard}
          meetName={gulfStandard.meet}
          standardLabel="Gulf Cut"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#0284c7"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "gulfSenior" && gulfSeniorStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <SingleStandardView
          standard={gulfSeniorStandard.standard}
          meetName={gulfSeniorStandard.meet}
          standardLabel="Gulf Senior Cut"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#2e4057"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "toyotaNational18U" && toyotaNationalStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <SingleStandardView
          standard={toyotaNationalStandard.standard}
          meetName={toyotaNationalStandard.meet}
          standardLabel="National Cut"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#ea580c"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "usOpen" && usOpenStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <TwoStandardView
          standard={usOpenStandard.standard}
          bonusStandard={usOpenStandard.bonus}
          meetName={usOpenStandard.meet}
          standardLabel="Qualifying"
          bonusLabel="18U Bonus"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#4338ca"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "proSwim19O" && proSwimStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <SingleStandardView
          standard={proSwimStandard.standard}
          meetName={proSwimStandard.meet}
          standardLabel="TYR Pro Swim Cut"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#ec4899"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "olympic" && olympicStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <TwoStandardView
          standard={olympicStandard.standard}
          bonusStandard={olympicStandard.bonus}
          meetName={olympicStandard.meet}
          standardLabel="A cut"
          bonusLabel="B cut"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#b45309"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  // ===== Build button configs =====
  const buttons: StandardButtonConfig[] = [
    {
      id: "motivational",
      icon: "ribbon",
      iconLib: "Ionicons",
      color: "#10b981",
      iconBg: "#ecfdf5",
      label: "USA Swimming Motivational Cuts",
      subtitle: "2024–2028 · B through AAAA",
      available: !!motivationalStandards,
    },
    // 1. Gulf Age Group (only for 13-14)
    ...(ageGroup === "13-14" ? [{
      id: "gulf" as ViewMode,
      icon: "water",
      iconLib: "Ionicons" as const,
      color: "#0284c7",
      iconBg: "#f0f9ff",
      label: "Gulf Championships",
      subtitle: `2025 Gulf Age Group · ${poolType}`,
      available: !!gulfStandard,
    }] : []),
    // 2. Gulf Senior (for 15 & over)
    ...(ageGroup !== "13-14" ? [{
      id: "gulfSenior" as ViewMode,
      icon: "water",
      iconLib: "Ionicons" as const,
      color: "#2e4057",
      iconBg: "#f0f4f8",
      label: "Gulf Senior Champs",
      subtitle: `2025–26 Gulf Senior · ${poolType}`,
      available: !!gulfSeniorStandard,
    }] : []),
    // 3. TAGS (only for 13-14)
    ...(ageGroup === "13-14" ? [{
      id: "tags" as ViewMode,
      icon: "location",
      iconLib: "Ionicons" as const,
      color: "#14b8a6",
      iconBg: "#f0fdfa",
      label: "TAGS Championships",
      subtitle: `2026 Texas Age Group · ${poolType}`,
      available: !!tagsStandard,
    }] : []),
    // 4. Sectionals (TSC)
    {
      id: "tsc",
      icon: "trophy",
      iconLib: "Ionicons",
      color: "#8b5cf6",
      iconBg: "#f5f3ff",
      label: "TSC Sectionals",
      subtitle: "Sectionals & Bonus standards",
      available: !!tscStandards,
    },
    // 5. NCSA Standards
    {
      id: "ncsa",
      icon: "star",
      iconLib: "Ionicons",
      color: "#06b6d4",
      iconBg: "#ecfeff",
      label: "NCSA Standards",
      subtitle: "2025 Spring Championships",
      available: !!ncsaStandard,
    },
    // 6. Futures
    {
      id: "futures",
      icon: "rocket",
      iconLib: "Ionicons",
      color: "#f59e0b",
      iconBg: "#fffbeb",
      label: "Futures",
      subtitle: "2026 Futures Championships",
      available: !!futuresStandard,
    },
    // 7. Winter Jr.
    {
      id: "winterJr",
      icon: "snow",
      iconLib: "Ionicons",
      color: "#3b82f6",
      iconBg: "#eff6ff",
      label: "Winter Jr.",
      subtitle: "2026 Speedo Winter Juniors",
      available: !!winterJrStandard,
    },
    // 8. Pro Swim
    {
      id: "proSwim19O",
      icon: "flame",
      iconLib: "Ionicons",
      color: "#ec4899",
      iconBg: "#fdf2f8",
      label: ageGroup === "19 & Over" ? "TYR Pro Swim Series (19+)" : "TYR Pro Swim Series (18U)",
      subtitle: ageGroup === "19 & Over" ? "2026 TYR Pro Swim Series (19 & Over)" : "2026 TYR Pro Swim Series (18 & Under)",
      available: !!proSwimStandard,
    },
    // 9. Jr. National
    {
      id: "jrNational",
      icon: "flag",
      iconLib: "Ionicons",
      color: "#f43f5e",
      iconBg: "#fff1f2",
      label: "Jr. National",
      subtitle: "2026 Speedo Junior Nationals",
      available: !!jrNationalStandard,
    },
    // 10. U.S. Open
    {
      id: "usOpen",
      icon: "shield-checkmark",
      iconLib: "Ionicons",
      color: "#4338ca",
      iconBg: "#e0e7ff",
      label: "U.S. Open",
      subtitle: "2026 Toyota U.S. Open Championships",
      available: !!usOpenStandard,
    },
    // 11. National Champs
    {
      id: "toyotaNational18U",
      icon: "trophy",
      iconLib: "Ionicons",
      color: "#ea580c",
      iconBg: "#fff7ed",
      label: ageGroup === "19 & Over" ? "National Championships (19+)" : "National Championships (18U)",
      subtitle: ageGroup === "19 & Over" ? "2026 Toyota National Championships (19+)" : "2026 Toyota National Championships (18U)",
      available: !!toyotaNationalStandard,
    },
    // 12. Olympic Trials
    {
      id: "olympicTrial",
      icon: "medal",
      iconLib: "Ionicons",
      color: "#be123c",
      iconBg: "#fef2f2",
      label: "Olympic Trials",
      subtitle: "2024 US Olympic Trials Standards",
      available: !!olympicTrialStandard,
      notAvailableReason: poolType === "SCY" ? "LCM Only" : "Not available for this event",
    },
    // 13. Olympic Standards
    {
      id: "olympic",
      icon: "globe",
      iconLib: "Ionicons",
      color: "#b45309",
      iconBg: "#fef3c7",
      label: "LA28 Olympic Games",
      subtitle: "LA28 Olympic Entry Standards",
      available: !!olympicStandard,
      notAvailableReason: poolType === "SCY" ? "LCM Only" : "Not available for this event",
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
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 14) }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>Swim Standards</Text>
            <Text style={styles.headerSubtitle}>tap on a standard to see details</Text>
          </View>
          <Pressable onPress={onBackToInput} style={styles.headerBackBtn}>
            <Ionicons name="chevron-back" size={20} color="#fff" />
            <Text style={styles.headerBackText}>Input</Text>
          </Pressable>
        </View>

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
              Swimcloud
              <Text style={{ fontSize: 11, position: "relative", top: Platform.OS === "ios" ? -2 : 0, verticalAlign: "top" }}>®</Text>
              {" Power Index not available for this event"}
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
            onPress={() => handlePressStandard(btn.id, btn.available)}
          />
        ))}

        <ComingSoon />
      </ScrollView>
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  // ── Header ──
  header: {
    backgroundColor: "#0044ee",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "#0044ee",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    zIndex: 10,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBackBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 0,
    gap: 2,
  },
  headerBackText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    letterSpacing: -0.5,
    marginLeft: 4,
  },
  headerSubtitle: {
    color: "#c7d2fe",
    fontSize: 14,
    marginTop: 4,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    marginLeft: 4,
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
    borderRadius: 0,
  },
  pillText: {
    fontSize: 12,
    fontFamily: "PublicSans-Bold",
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
    fontFamily: "PublicSans-ExtraBold",
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
    borderRadius: 0,
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
    borderColor: "#f1f5f9",
  },
  iconBubble: {
    width: 42,
    height: 42,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#1e293b",
  },
  cardSub: {
    fontSize: 11,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    color: "#94a3b8",
    marginTop: 2,
  },
  arrowBubble: {
    width: 28,
    height: 28,
    borderRadius: 0,
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
    borderRadius: 0,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    borderStyle: "dashed",
  },
  piUnavailableText: {
    fontSize: 13,
    color: "#94a3b8",
    fontFamily: "PublicSans-SemiBold",
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
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    borderStyle: "dashed",
  },
  comingSoonText: {
    fontSize: 13,
    color: "#94a3b8",
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
  },});

