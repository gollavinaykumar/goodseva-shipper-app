import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  lightColors,
} from "../../constants/theme";

interface StatusBadgeProps {
  label: string;
  variant?: "success" | "warning" | "error";
}

export function StatusBadge({ label, variant = "success" }: StatusBadgeProps) {
  const backgroundColor = {
    success: lightColors.statusInTransit,
    warning: lightColors.warning,
    error: lightColors.error,
  }[variant];

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
  },
  text: {
    color: lightColors.textInverse,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
  },
});
