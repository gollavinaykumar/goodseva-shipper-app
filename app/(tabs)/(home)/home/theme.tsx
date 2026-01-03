import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
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

export default function ThemeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { theme: selectedTheme, setTheme, colors } = useTheme();
  const styles = getStyles(colors);

  const themes = [
    {
      id: "light" as const,
      label: "Light Mode",
      description: "Clean and bright interface",
      icon: "sunny-outline" as const,
      preview: {
        background: "#FFFFFF",
        card: "#F5F5F5",
        text: "#000000",
      },
    },
    {
      id: "dark" as const,
      label: "Dark Mode",
      description: "Easy on the eyes at night",
      icon: "moon-outline" as const,
      preview: {
        background: "#1A1A1A",
        card: "#2A2A2A",
        text: "#FFFFFF",
      },
    },
    {
      id: "auto" as const,
      label: "Auto",
      description: "Match system settings",
      icon: "phone-portrait-outline" as const,
      preview: {
        background: "linear-gradient",
        card: "#F5F5F5",
        text: "#000000",
      },
    },
  ];

  return (
    <GradientBackground>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>Choose Your Theme</Text>
        <Text style={styles.subtitle}>
          Customize the look and feel of your Goodseva app
        </Text>

        {themes.map((theme) => (
          <TouchableOpacity
            key={theme.id}
            style={[
              styles.themeCard,
              selectedTheme === theme.id && styles.themeCardSelected,
            ]}
            onPress={() => setTheme(theme.id)}
          >
            <View style={styles.themeHeader}>
              <View style={styles.themeIconContainer}>
                <Ionicons name={theme.icon} size={28} color={colors.primary} />
              </View>
              <View style={styles.themeInfo}>
                <Text style={styles.themeLabel}>{theme.label}</Text>
                <Text style={styles.themeDescription}>{theme.description}</Text>
              </View>
              {selectedTheme === theme.id && (
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.success}
                />
              )}
            </View>

            <View style={styles.themePreview}>
              <View
                style={[
                  styles.previewItem,
                  { backgroundColor: theme.preview.background },
                ]}
              >
                <View
                  style={[
                    styles.previewCard,
                    { backgroundColor: theme.preview.card },
                  ]}
                >
                  <View
                    style={[
                      styles.previewLine,
                      { backgroundColor: theme.preview.text, opacity: 0.8 },
                    ]}
                  />
                  <View
                    style={[
                      styles.previewLine,
                      {
                        backgroundColor: theme.preview.text,
                        opacity: 0.5,
                        width: "70%",
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accent Color</Text>
          <View style={styles.colorGrid}>
            {[
              "#3b82f6",
              "#ef4444",
              "#10b981",
              "#f59e0b",
              "#8b5cf6",
              "#ec4899",
            ].map((color) => (
              <TouchableOpacity
                key={color}
                style={[styles.colorSwatch, { backgroundColor: color }]}
              >
                {color === "#3b82f6" && (
                  <Ionicons
                    name="checkmark"
                    size={24}
                    color={colors.textInverse}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => router.back()}
        >
          <Text style={styles.applyButtonText}>Done</Text>
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
    title: {
      fontSize: fontSize.xxxl,
      fontWeight: fontWeight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.sm,
    },
    subtitle: {
      fontSize: fontSize.base,
      color: colors.textSecondary,
      marginBottom: spacing.xl,
    },
    themeCard: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderWidth: 2,
      borderColor: "transparent",
    },
    themeCardSelected: {
      borderColor: colors.success,
    },
    themeHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.md,
      gap: spacing.md,
    },
    themeIconContainer: {
      width: 56,
      height: 56,
      borderRadius: borderRadius.md,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    themeInfo: {
      flex: 1,
    },
    themeLabel: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.xs,
    },
    themeDescription: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
    },
    themePreview: {
      borderRadius: borderRadius.md,
      overflow: "hidden",
      height: 120,
    },
    previewItem: {
      flex: 1,
      padding: spacing.md,
    },
    previewCard: {
      flex: 1,
      borderRadius: borderRadius.sm,
      padding: spacing.md,
    },
    previewLine: {
      height: 12,
      borderRadius: borderRadius.sm,
      marginBottom: spacing.sm,
    },
    section: {
      marginTop: spacing.xl,
      marginBottom: spacing.lg,
    },
    sectionTitle: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.md,
    },
    colorGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.md,
    },
    colorSwatch: {
      width: 56,
      height: 56,
      borderRadius: borderRadius.md,
      justifyContent: "center",
      alignItems: "center",
    },
    applyButton: {
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: colors.textPrimary,
      justifyContent: "center",
      alignItems: "center",
      marginTop: spacing.xl,
    },
    applyButtonText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: colors.textInverse,
    },
  });
