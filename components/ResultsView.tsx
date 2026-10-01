import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, DeviceEventEmitter, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
    AGC_SOURCES,
    AgeGroup,
    Gender,
    getAGCStandard,
    getEventDisplayName,
    getMotivationalStandards,
    getTagStandards,
    PoolType
} from "../utils/dataManager";

import { colors } from "../theme/colors";
import { calculatePowerPoint, getPowerPointsTable, interpretPowerPoints } from "../utils/powerPointManager";
import { timeToSeconds } from "../utils/timeConverter";
import DualCutStandardView from "./DualCutStandardView";
import MotivationalStandardsView from "./MotivationalStandardsView";
import PowerPointsView from "./PowerPointsView";
import SingleStandardView from "./SingleStandardView";
import SwipeBackWrapper from "./SwipeBackWrapper";

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
  | "powerPoint"
  | `agc:${string}`
  | "tags";

// Distinct accent colors cycled across the AGC source cards.
const AGC_CARD_COLORS = [
  { color: colors.primaryPressed, iconBg: "#FFE6AD" },
  { color: "#1D6F42", iconBg: "#D7F2E0" },
  { color: "#1D4E89", iconBg: "#D6E6FA" },
  { color: "#7A3B9C", iconBg: "#EAD9F7" },
  { color: "#8B4513", iconBg: "#F3DFC6" },
  { color: "#0E7C86", iconBg: "#D1F0F2" },
  { color: "#A3341B", iconBg: "#FBDCD2" },
  { color: "#4B5D1E", iconBg: "#E2EBC9" },
  { color: "#B3771E", iconBg: "#FAE6C2" },
];

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
      <View style={[styles.iconBubble, { backgroundColor: config.available ? config.iconBg : colors.surfaceWarm }]}>
        <IconComp name={config.icon as any} size={20} color={config.available ? config.color : colors.border} />
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, !config.available && { color: colors.textSubtle }]}>
          {config.label}
        </Text>
        <Text style={[styles.cardSub, !config.available && { color: colors.border }]}>
          {config.available ? config.subtitle : (config.notAvailableReason || "Not available for this event")}
        </Text>
      </View>

      {config.available ? (
        <View style={[styles.arrowBubble, { backgroundColor: config.iconBg }]}>
          <Ionicons name="chevron-forward" size={16} color={config.color} />
        </View>
      ) : (
        <Ionicons name="lock-closed" size={16} color={colors.border} />
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
  const userSeconds = React.useMemo(() => timeToSeconds(userTime), [userTime]);

  const powerPointTable = React.useMemo(
    () => getPowerPointsTable(gender, poolType, ageGroup, event),
    [gender, poolType, ageGroup, event],
  );

  const powerPointResult = React.useMemo(
    () =>
      powerPointTable && userSeconds !== null
        ? calculatePowerPoint(userSeconds, powerPointTable)
        : null,
    [powerPointTable, userSeconds],
  );

  const { config: ppStyle, barPercent } = React.useMemo(
    () => interpretPowerPoints(powerPointResult),
    [powerPointResult],
  );

  const motivationalStandards = React.useMemo(
    () => getMotivationalStandards(gender, poolType, ageGroup, event),
    [gender, poolType, ageGroup, event],
  );

  const agcStandards = React.useMemo(
    () =>
      AGC_SOURCES.map((source) => ({
        source,
        standard: getAGCStandard(source.id, gender, poolType, ageGroup, event),
      })),
    [gender, poolType, ageGroup, event],
  );

  const tagStandards = React.useMemo(
    () => getTagStandards(gender, poolType, ageGroup, event),
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
  if (viewMode === "powerPoint" && powerPointTable) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <PowerPointsView
          table={powerPointTable}
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

  const matchedAgc = viewMode.startsWith("agc:")
    ? agcStandards.find((entry) => `agc:${entry.source.id}` === viewMode)
    : undefined;

  if (matchedAgc && matchedAgc.standard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <SingleStandardView
          standard={matchedAgc.standard.standard}
          meetName={matchedAgc.standard.meet}
          standardLabel="AGC Cut"
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor={colors.primary}
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  if (viewMode === "tags" && (tagStandards.tags || tagStandards.bonus)) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <DualCutStandardView
          meetName="2026 TAGS Championships"
          cuts={[
            ...(tagStandards.bonus ? [{ id: "bonus", label: "Bonus Cut", time: tagStandards.bonus.standard }] : []),
            ...(tagStandards.tags ? [{ id: "tags", label: "TAGS Cut", time: tagStandards.tags.standard }] : []),
          ]}
          userTime={userTime}
          event={event}
          gender={gender}
          ageGroup={ageGroup}
          poolType={poolType}
          themeColor="#A3341B"
          onBack={goBack}
        />
      </SwipeBackWrapper>
    );
  }

  // ===== Build button configs =====
  const buildAgcButton = (
    { source, standard }: { source: (typeof agcStandards)[number]["source"]; standard: (typeof agcStandards)[number]["standard"] },
    paletteIdx: number,
    icon: string = "location",
  ): StandardButtonConfig => {
    const palette = AGC_CARD_COLORS[paletteIdx % AGC_CARD_COLORS.length];
    const supportsSCM = source.data.some((c) => c.course === "scm");
    return {
      id: `agc:${source.id}` as ViewMode,
      icon,
      iconLib: "Ionicons" as const,
      color: palette.color,
      iconBg: palette.iconBg,
      label: source.label,
      subtitle: `${source.meetName} · ${poolType}`,
      available: !!standard,
      notAvailableReason:
        poolType === "SCM" && !supportsSCM ? "SCY & LCM Only" : "Not available for this event",
    };
  };

  const ncsaEntry = agcStandards.find((entry) => entry.source.id === "ncsa");
  const otherAgcEntries = agcStandards.filter((entry) => entry.source.id !== "ncsa");

  const buttons: StandardButtonConfig[] = [
    {
      id: "motivational",
      icon: "globe",
      iconLib: "Ionicons",
      color: colors.primary,
      iconBg: colors.accentSoft,
      label: "USA Swimming Motivational Levels",
      subtitle: "2024–2028 · B through AAAA",
      available: !!motivationalStandards,
      notAvailableReason:
        ageGroup === "9&U" ? "Not published for 9&U" : "Not available for this event",
    },
    ...(ncsaEntry ? [buildAgcButton(ncsaEntry, 0, "flag")] : []),
    {
      id: "tags" as ViewMode,
      icon: "star",
      iconLib: "Ionicons" as const,
      color: "#A3341B",
      iconBg: "#FBDCD2",
      label: "Texas AGC (TAGS)",
      subtitle: `2026 TAGS Championships · ${poolType}`,
      available: !!(tagStandards.tags || tagStandards.bonus),
      notAvailableReason: poolType === "SCM" ? "SCY & LCM Only" : "Not available for this event",
    },
    ...otherAgcEntries.map((entry, idx) => buildAgcButton(entry, idx + 1)),
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
              color="#FFF0B8"
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
              {formattedEvent}:  {userTime.trim()}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Power Point Card */}
        {powerPointTable ? (
          <Pressable
            onPress={() => {
              if (!userTime || userTime.trim() === "") {
                Alert.alert(
                  "Input Required",
                  "Please enter an event and time in the time input page",
                  [{ text: "OK" }],
                );
                return;
              }
              setViewMode("powerPoint");
            }}
            style={({ pressed }) => [
              styles.ppCard,
              {
                borderColor: ppStyle.border,
                opacity: pressed ? 0.92 : 1,
                transform: [{ scale: pressed ? 0.99 : 1 }],
              },
            ]}
          >
            {/* Title row */}
            <View style={styles.ppHeaderRow}>
              <View style={styles.ppTitleWrap}>
                <Text style={styles.ppLabel}>
                  USA Swimming
                  <Text style={styles.ppRegistered}>®</Text>
                  {" POWER POINT"}
                </Text>
                <Text style={styles.ppSubLabel}>
                  {" (1 = base, 1100 = elite)"}
                </Text>
              </View>
              <View style={styles.ppIconContainer}>
                {ppStyle.iconLib === "Ionicons" ? (
                  <Ionicons
                    name={ppStyle.icon as any}
                    size={22}
                    color={ppStyle.border}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={ppStyle.icon as any}
                    size={22}
                    color={ppStyle.border}
                  />
                )}
              </View>
            </View>

            {/* Score and Label row */}
            <View style={styles.ppScoreRow}>
              <Text style={[styles.ppScore, { color: ppStyle.text }]}>
                {powerPointResult ? powerPointResult.displayPoints : "— —"}
              </Text>
              <Text style={[styles.ppScoreCategory, { color: ppStyle.text }]}>
                {powerPointResult
                  ? ppStyle.label
                  : "Enter time to see score"}
              </Text>
            </View>

            {/* Progress bar */}
            <View style={styles.ppProgressBg}>
              <View
                style={[
                  styles.ppProgressFill,
                  {
                    width: `${barPercent}%`,
                    backgroundColor: ppStyle.border,
                  },
                ]}
              />
            </View>
          </Pressable>
        ) : (
          <View style={styles.piUnavailable}>
            <Ionicons name="analytics-outline" size={18} color="#94a3b8" />
            <Text style={styles.piUnavailableText}>
              USA Swimming
              <Text style={styles.ppRegistered}>®</Text>
              {poolType === "SCM"
                ? " Power Point (SCY & LCM Only)"
                : " Power Point not available for this event"}
            </Text>
          </View>
        )}

        <Text style={styles.sectionLabel}>STANDARDS COMPARISON</Text>

        {buttons.map((btn) => (
          <StandardCard
            key={btn.id}
            config={btn}
            onPress={() => handlePressStandard(btn.id, btn.available)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvas,
  },

  // ── Header ──
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: colors.primary,
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
    color: "#FFF0B8",
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
    color: "#FFF7D6",
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
    color: colors.textSubtle,
    letterSpacing: 1.2,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 4,
  },

  // ── Standard Cards ──
  ppCard: {
    borderRadius: 0,
    padding: 20,
    borderWidth: 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 16,
  },
  ppHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  ppTitleWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  ppLabel: {
    fontSize: 14,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 0.5,
  },
  ppRegistered: {
    fontSize: 10,
    position: "relative",
    top: Platform.OS === "ios" ? -2 : 0,
  },
  ppSubLabel: {
    fontSize: 11,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    color: "#9ca3af",
    marginTop: 2,
  },
  ppIconContainer: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  ppScoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 2,
    marginBottom: 8,
  },
  ppScore: {
    fontSize: 44,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    letterSpacing: -1,
  },
  ppScoreCategory: {
    fontSize: 20,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    marginLeft: 12,
  },
  ppProgressBg: {
    height: 6,
    borderRadius: 0,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    marginTop: 6,
    position: "relative",
  },
  ppProgressFill: {
    height: "100%",
  },
  piUnavailable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 0,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderStyle: "dashed",
  },
  piUnavailableText: {
    fontSize: 13,
    color: "#94a3b8",
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    padding: 14,
    borderRadius: 0,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  cardDisabled: {
    backgroundColor: colors.surfaceWarm,
    shadowOpacity: 0,
    elevation: 0,
    borderColor: colors.border,
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
    color: colors.text,
  },
  cardSub: {
    fontSize: 11,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    color: colors.textSubtle,
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

  comingSoonText: {
    fontSize: 13,
    color: colors.textSubtle,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
  },});

