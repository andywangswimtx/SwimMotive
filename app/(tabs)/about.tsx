import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import {
  Image,
  LayoutAnimation,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  UIManager,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ─── Types ──────────────────────────────────────────────
interface SectionItem {
  label: string;
  sub?: string;
}

interface AccordionProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBg: string;
  items: SectionItem[];
}

interface InfoRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onPress?: () => void;
}

// ─── Accordion Section ──────────────────────────────────
const AccordionSection = ({
  title,
  icon,
  iconColor,
  iconBg,
  items,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  }, []);

  return (
    <Pressable
      onPress={toggle}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.cardRow}>
        <View style={[styles.iconBubble, { backgroundColor: iconBg }]}>
          <Ionicons name={icon} size={18} color={iconColor} />
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color="#94a3b8"
        />
      </View>

      {expanded && (
        <View style={styles.expandedContent}>
          {items.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <View style={styles.bulletDot} />
              <View style={{ flex: 1 }}>
                <Text style={styles.bulletText}>{item.label}</Text>
                {item.sub && <Text style={styles.bulletSub}>{item.sub}</Text>}
              </View>
            </View>
          ))}
        </View>
      )}
    </Pressable>
  );
};

// ─── Info Row ───────────────────────────────────────────
const InfoRow = ({ icon, label, value, onPress }: InfoRowProps) => (
  <Pressable
    onPress={onPress}
    disabled={!onPress}
    style={({ pressed }) => [
      styles.infoRow,
      pressed && onPress && { opacity: 0.7 },
    ]}
  >
    <Ionicons name={icon} size={16} color="#94a3b8" />
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={[styles.infoValue, onPress && { color: "#6366f1" }]}>
      {value}
    </Text>
    {onPress && (
      <Ionicons
        name="open-outline"
        size={14}
        color="#6366f1"
        style={{ marginLeft: 4 }}
      />
    )}
  </Pressable>
);

// ─── Main Screen ────────────────────────────────────────
export default function AboutScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Gradient-like header background */}
      <View style={styles.headerBg} />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40 + insets.bottom,
          paddingTop: Math.max(insets.top, 20),
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ────── Header ────── */}
        <View style={styles.header}>
          <View style={styles.logoGlow}>
            <Image
              source={require("../../assets/images/favicon.png")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.appTitle}>Swim Time Calculator</Text>
          <Text style={styles.tagline}>Know swim times. Chase your goals.</Text>

          {/* Version pills */}
          <View style={styles.pillRow}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Version 0.3.0</Text>
            </View>
            <View style={[styles.pill, styles.pillAccent]}>
              <Text style={[styles.pillText, styles.pillAccentText]}>
                Build 60404
              </Text>
            </View>
          </View>
        </View>

        {/* ────── Data Sources ────── */}
        <Text style={styles.sectionLabel}>DATA SOURCES</Text>

        <AccordionSection
          title="LSC, Sectionals & Champs"
          icon="trophy"
          iconColor="#f59e0b"
          iconBg="#fef3c7"
          items={[
            {
              label: "Gulf Senior Championships",
              sub: "2025–26 · Texas Gulf Swimming",
            },
            {
              label: "TSC Sectionals",
              sub: "2025 · Texas Senior Circuit",
            },
            {
              label: "NCSA Spring Championships",
              sub: "2025 · National Club Swimming Assoc.",
            },
          ]}
        />

        <AccordionSection
          title="Power Index"
          icon="analytics"
          iconColor="#8b5cf6"
          iconBg="#ede9fe"
          items={[
            {
              label: "Power Index Time Standards",
              sub: "2025 · SwimCloud",
            },
            {
              label: "Power Index Equation",
              sub: "Proprietary formula · SwimCloud",
            },
          ]}
        />

        <AccordionSection
          title="USA Swimming Standards"
          icon="medal"
          iconColor="#ef4444"
          iconBg="#fee2e2"
          items={[
            { label: "Motivational Standards", sub: "2024–2028 cycle" },
            { label: "Futures Championships", sub: "2025 season" },
            { label: "Winter Junior Championships", sub: "2025 season" },
            { label: "Junior National Championships", sub: "2026 season" },
            { label: "Olympic Trials", sub: "2024 · Indianapolis" },
          ]}
        />

        {/* ────── App Info ────── */}
        <Text style={styles.sectionLabel}>APP INFO</Text>

        <View style={styles.card}>
          <InfoRow icon="person" label="Developer" value="Andy L. Wang" />
          <View style={styles.separator} />
          <InfoRow
            icon="mail"
            label="Contact"
            value="andy.wl@outlook.com"
            onPress={() => Linking.openURL("mailto:andy.wl@outlook.com")}
          />
          <View style={styles.separator} />
          <InfoRow
            icon="hardware-chip"
            label="Platform"
            value="iOS · Android"
          />
        </View>

        {/* ────── Footer ────── */}
        <View style={styles.footer}>
          <View style={styles.footerWaveRow}>
            <Text style={styles.footerWave}>🏊‍♂️</Text>
            <Text style={styles.footerWave}>🏊‍♀️</Text>
            <Text style={styles.footerWave}>🏊</Text>
          </View>
          <Text style={styles.footerMotto}>
            By teen swimmers, for teen swimmers!
          </Text>
          <Text style={styles.footerCopy}>
            © 2026 Swim Time Calculator. All rights reserved.
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
    backgroundColor: "#f8fafc",
  },

  // Header background shape
  headerBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 260,
    backgroundColor: "#4f46e5",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  // Header content
  header: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  logoGlow: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    // subtle shadow behind logo
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 18,
    resizeMode: "contain",
  },
  appTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 15,
    color: "#c7d2fe",
    marginTop: 4,
    fontWeight: "500",
  },

  // Version pills
  pillRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
  },
  pill: {
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 14,
    paddingVertical: 5,
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
  pillAccentText: {
    color: "#fff",
  },

  // Section label
  sectionLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: 1.2,
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 10,
  },

  // Cards
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBubble: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  cardTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#1e293b",
  },

  // Expanded accordion content
  expandedContent: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#6366f1",
    marginTop: 6,
    marginRight: 10,
  },
  bulletText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
  },
  bulletSub: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 1,
    fontWeight: "500",
  },

  // Info rows
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
  },
  infoLabel: {
    fontSize: 14,
    color: "#64748b",
    fontWeight: "500",
    marginLeft: 10,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: "#1e293b",
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#f1f5f9",
  },

  // Footer
  footer: {
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 40,
    paddingBottom: 10,
  },
  footerWaveRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 10,
  },
  footerWave: {
    fontSize: 22,
  },
  footerMotto: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748b",
    textAlign: "center",
  },
  footerCopy: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 6,
  },
});
