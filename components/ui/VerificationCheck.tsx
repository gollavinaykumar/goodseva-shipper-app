import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/useTheme";
import {
  spacing,
  borderRadius,
  fontSize,
  lightColors,
} from "../../constants/theme";

interface VerificationCheckProps {
  label: string;
  verified: boolean;
}

export function VerificationCheck({ label, verified }: VerificationCheckProps) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={[styles.container, verified && styles.verified]}>
      <Text style={styles.text}>{label}</Text>
      {verified && (
        <Ionicons name="checkmark" size={16} color={colors.success} />
      )}
    </View>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: borderRadius.full,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      gap: spacing.xs,
    },
    verified: {
      borderColor: colors.success,
    },
    text: {
      fontSize: fontSize.sm,
      color: colors.textPrimary,
    },
  });
