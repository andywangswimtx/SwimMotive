import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, DeviceEventEmitter, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
    AgeGroup,
    Gender,
    getEventDisplayName,
    getIllinoisAGCStandard,
    getMotivationalStandards,
    PoolType,
} from "../utils/dataManager";

import MotivationalStandardsView from "./MotivationalStandardsView";
import SingleStandardView from "./SingleStandardView";
import SwipeBackWrapper from "./SwipeBackWrapper";
import { colors } from "../theme/colors";

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
  | "tags";

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
  const {
    motivationalStandards,
    tagsStandard,
  } = React.useMemo(
    () => ({
      motivationalStandards: getMotivationalStandards(
        gender,
        poolType,
        ageGroup,
        event,
      ),
      tagsStandard: getIllinoisAGCStandard(gender, poolType, ageGroup, event),
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

  if (viewMode === "tags" && tagsStandard) {
    return (
      <SwipeBackWrapper onSwipeBack={goBack}>
        <SingleStandardView
          standard={tagsStandard.standard}
          meetName={tagsStandard.meet}
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

  // ===== Build button configs =====
  const buttons: StandardButtonConfig[] = [
    {
      id: "motivational",
      icon: "ribbon",
      iconLib: "Ionicons",
      color: colors.primary,
      iconBg: colors.accentSoft,
      label: "USA Swimming Motivational Levels",
      subtitle: "2024–2028 · B through AAAA",
      available: !!motivationalStandards,
    },
    {
      id: "tags" as ViewMode,
      icon: "location",
      iconLib: "Ionicons" as const,
      color: colors.primaryPressed,
      iconBg: "#FFE6AD",
      label: "Illinois AGC Championships",
      subtitle: `2026 Illinois Age Group · ${poolType}`,
      available: !!tagsStandard,
      notAvailableReason: poolType === "SCM" ? "SCY & LCM Only" : "Not available for this event",
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
              {formattedEvent}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
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

