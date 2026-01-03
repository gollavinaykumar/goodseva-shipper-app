import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/useTheme";
import {
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
  lightColors,
} from "../../constants/theme";

interface StatCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: number;
}

export function StatCard({ icon, label, value }: StatCardProps) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={32} color={colors.textPrimary} />
      </View>
      <Text style={styles.value}>{value.toString().padStart(2, "0")}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      alignItems: "center",
      ...shadows.sm,
    },
    iconContainer: {
      marginBottom: spacing.sm,
    },
    value: {
      fontSize: fontSize.xxxl,
      fontWeight: fontWeight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.xs,
    },
    label: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
      fontWeight: fontWeight.medium,
    },
  });
