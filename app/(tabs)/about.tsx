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
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../theme/colors";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ─── Swimcloud Copyright Text Helper ──────────────────────
const renderSwimcloudText = (text: string, baseStyle?: any) => {
  const parts = text.split(/(swimcloud)/i);
  return (
    <Text style={baseStyle}>
      {parts.map((part, index) => {
        if (part.toLowerCase() === "swimcloud") {
          return (
            <Text key={index} style={baseStyle}>
              Swimcloud
              <Text style={{ fontSize: 11, position: "relative", top: Platform.OS === "ios" ? -2 : 0, verticalAlign: "top" }}>®</Text>
            </Text>
          );
        }
        return part;
      })}
    </Text>
  );
};

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
  children?: React.ReactNode;
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
  children,
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
        {renderSwimcloudText(title, styles.cardTitle)}
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={colors.textSubtle}
        />
      </View>

      {expanded && (
        <View style={styles.expandedContent}>
          {items.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <View style={styles.bulletDot} />
              <View style={{ flex: 1 }}>
                {renderSwimcloudText(item.label, styles.bulletText)}
                {item.sub && renderSwimcloudText(item.sub, styles.bulletSub)}
              </View>
            </View>
          ))}
          {children}
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
    <Ionicons name={icon} size={16} color={colors.textSubtle} />
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={[styles.infoValue, onPress && { color: colors.primary }]}>
      {value}
    </Text>
    {onPress && (
      <Ionicons
        name="open-outline"
        size={14}
        color={colors.primary}
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
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40 + insets.bottom,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ────── Header ────── */}
        <View style={[styles.headerBg, { paddingTop: Math.max(insets.top, 20) }]}>
          <View style={styles.header}>
            <View style={styles.logoGlow}>
              <Image
                source={require("../../assets/images/favicon.png")}
                style={styles.logo}
              />
            </View>
            <Text style={styles.appTitle}>
              SwimMotiv (<Text style={styles.appTitleState}>IL</Text>)
            </Text>
            <Text style={styles.tagline}>Know your times, Chase your goals</Text>

            {/* Version pills */}
            <View style={styles.pillRow}>
              <View style={styles.pill}>
                <Text style={styles.pillText}>App Version 0.1.0</Text>
              </View>
              <View style={[styles.pill, styles.pillAccent]}>
                <Text style={[styles.pillText, styles.pillAccentText]}>
                  Build 91126
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* ────── Data Sources ────── */}
        <Text style={styles.sectionLabel}>DATA SOURCES</Text>

        <AccordionSection
          title="USA Swimming Standards"
          icon="medal"
          iconColor={colors.primaryPressed}
          iconBg="#FFE2B6"
          items={[
            { label: "Motivational Standards", sub: "2024–2028 cycle · USA Swimming (10&U, 11-12, 13-14)" },
          ]}
        />

        <AccordionSection
          title="State/LSC Age Group Champs"
          icon="trophy"
          iconColor={colors.primary}
          iconBg={colors.accentSoft}
          items={[
            {
              label: "Illinois Age Group Championships",
              sub: "2026 · Illinois Age Group Swimming Standards (9&U, 10, 11, 12, 13, 14)",
            },
          ]}
        />

        {/* ────── App Info ────── */}
        <Text style={styles.sectionLabel}>APP INFO</Text>

        <View style={[styles.card, styles.infoCard]}>
          <InfoRow icon="person" label="Developer" value="Andy L. Wang" />
          <View style={styles.separator} />
          <InfoRow
            icon="mail"
            label="Contact"
            value="andywang.swimtx@gmail.com"
            onPress={() => Linking.openURL("mailto:andywang.swimtx@gmail.com")}
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
          {/* Removed swimming emojis */}
          <Text style={styles.footerMotto}>
            Made by a high school swimmer
          </Text>
          <Text style={styles.footerCopy}>
            © 2026 SwimMotiv. All rights reserved.
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
    backgroundColor: colors.canvas,
  },

  // Header background shape
  headerBg: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  // Header content
  header: {
    alignItems: "center",
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  logoGlow: {
    width: 80,
    height: 80,
    borderRadius: 0,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
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
    borderRadius: 0,
    resizeMode: "contain",
  },
  appTitle: {
    fontSize: 26,
    fontFamily: "PublicSans-Black",
    fontWeight: "900",
    color: "#fff",
    letterSpacing: -0.5,
  },
  appTitleState: {
    color: "#FFF0B8",
  },
  tagline: {
    fontSize: 15,
    color: "#FFF0B8",
    marginTop: 4,
    fontFamily: "PublicSans-Medium",
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
  pillAccentText: {
    color: "#fff",
  },

  // Section label
  sectionLabel: {
    fontSize: 12,
    fontFamily: "PublicSans-ExtraBold",
    fontWeight: "800",
    color: colors.textSubtle,
    letterSpacing: 1.2,
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 10,
  },

  // Cards
  card: {
    backgroundColor: colors.surface,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 0,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoCard: {
    paddingTop: 6,
    paddingBottom: 6,
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
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  cardTitle: {
    flex: 1,
    fontSize: 15,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    color: colors.text,
  },

  // Expanded accordion content
  expandedContent: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 0,
    backgroundColor: colors.primary,
    marginTop: 6,
    marginRight: 10,
  },
  bulletText: {
    fontSize: 14,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    color: colors.text,
  },
  bulletSub: {
    fontSize: 12,
    color: colors.textSubtle,
    marginTop: 1,
    fontFamily: "PublicSans-Medium",
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
    color: colors.textMuted,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    marginLeft: 10,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: colors.text,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: colors.divider,
  },
  authorizedCard: {
    backgroundColor: colors.surfaceWarm,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  authorizedText: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: "PublicSans-Medium",
    fontWeight: "500",
    flex: 1,
    lineHeight: 16,
  },

  // Footer
  footer: {
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 40,
    paddingBottom: 10,
  },


  footerMotto: {
    fontSize: 14,
    fontFamily: "PublicSans-SemiBold",
    fontWeight: "600",
    color: colors.textMuted,
    textAlign: "center",
  },
  footerCopy: {
    fontSize: 12,
    color: colors.textSubtle,
    textAlign: "center",
    marginTop: 6,
  },});

