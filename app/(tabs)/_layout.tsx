import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View, DeviceEventEmitter } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0044ee",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Swim Calc",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Ionicons
                name={focused ? "timer" : "timer-outline"}
                size={22}
                color={color}
              />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: () => {
            DeviceEventEmitter.emit("reset-index-tab");
          },
        })}
      />
      <Tabs.Screen
        name="all-standards"
        options={{
          title: "Standard Library",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Ionicons
                name={focused ? "list" : "list-outline"}
                size={22}
                color={color}
              />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: () => {
            DeviceEventEmitter.emit("reset-standards-tab");
          },
        })}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Ionicons
                name={
                  focused
                    ? "information-circle"
                    : "information-circle-outline"
                }
                size={22}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 0,
    height: Platform.OS === "ios" ? 94 : 72,
    paddingBottom: Platform.OS === "ios" ? 32 : 12,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 12,
  },
  tabItem: {
    gap: 10,
  },
  tabLabel: {
    fontSize: 11,
    fontFamily: "PublicSans-Bold",
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapActive: {
    backgroundColor: "#eef2ff",
  },
});

