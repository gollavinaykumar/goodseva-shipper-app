import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { useTheme } from "@/hooks/useTheme";
import {
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  lightColors,
} from "@/constants/theme";

export default function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [autoAccept, setAutoAccept] = useState(false);
  const styles = getStyles(colors);

  const settingsSections = [
    {
      title: "Preferences",
      items: [
        {
          label: "Language",
          icon: "language-outline" as const,
          value: "English",
          onPress: () => router.push("/language"),
        },
        {
          label: "Theme",
          icon: "color-palette-outline" as const,
          value: "Light",
          onPress: () => router.push("/(home)/home/theme"),
        },
      ],
    },
    {
      title: "Notifications",
      items: [
        {
          label: "Push Notifications",
          icon: "notifications-outline" as const,
          toggle: notifications,
          onToggle: setNotifications,
        },
        {
          label: "Email Notifications",
          icon: "mail-outline" as const,
          toggle: true,
          onToggle: () => {},
        },
      ],
    },
    {
      title: "Privacy",
      items: [
        {
          label: "Location Sharing",
          icon: "location-outline" as const,
          toggle: locationSharing,
          onToggle: setLocationSharing,
        },
        {
          label: "Auto-Accept Trips",
          icon: "checkmark-circle-outline" as const,
          toggle: autoAccept,
          onToggle: setAutoAccept,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          label: "Help Center",
          icon: "help-circle-outline" as const,
          onPress: () => {},
        },
        {
          label: "Terms & Conditions",
          icon: "document-text-outline" as const,
          onPress: () => {},
        },
        {
          label: "Privacy Policy",
          icon: "shield-checkmark-outline" as const,
          onPress: () => {},
        },
      ],
    },
    {
      title: "About",
      items: [
        {
          label: "Version",
          icon: "information-circle-outline" as const,
          value: "1.0.0",
        },
      ],
    },
  ];

  return (
    <GradientBackground>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}
      >
        {settingsSections.map((section, sectionIndex) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.card}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={item.label}
                  style={[
                    styles.settingItem,
                    itemIndex === section.items.length - 1 &&
                      styles.settingItemLast,
                  ]}
                  onPress={item.onPress}
                  disabled={!item.onPress && !item.onToggle}
                >
                  <View style={styles.settingIcon}>
                    <Ionicons
                      name={item.icon}
                      size={22}
                      color={colors.primary}
                    />
                  </View>
                  <Text style={styles.settingLabel}>{item.label}</Text>
                  {item.value && (
                    <Text style={styles.settingValue}>{item.value}</Text>
                  )}
                  {item.onToggle !== undefined && (
                    <Switch
                      value={item.toggle}
                      onValueChange={item.onToggle}
                      trackColor={{
                        false: colors.border,
                        true: colors.primary,
                      }}
                      thumbColor={colors.textInverse}
                    />
                  )}
                  {item.onPress && !item.value && !item.onToggle && (
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color={colors.textSecondary}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={22} color={colors.error} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </GradientBackground>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      padding: spacing.lg,
      paddingBottom: spacing.xxxl,
    },
    section: {
      marginBottom: spacing.xl,
    },
    sectionTitle: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.semibold,
      color: colors.textSecondary,
      marginBottom: spacing.md,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      overflow: "hidden",
    },
    settingItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      gap: spacing.md,
    },
    settingItemLast: {
      borderBottomWidth: 0,
    },
    settingIcon: {
      width: 40,
      height: 40,
      borderRadius: borderRadius.md,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    settingLabel: {
      flex: 1,
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
      color: colors.textPrimary,
    },
    settingValue: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
      marginRight: spacing.sm,
    },
    logoutButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      paddingVertical: spacing.lg,
      gap: spacing.md,
      marginTop: spacing.lg,
    },
    logoutText: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.error,
    },
  });
