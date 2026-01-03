import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Driver } from "../../types";
import { StatusBadge } from "../ui/StatusBadge";
import { VerificationCheck } from "../ui/VerificationCheck";
import { useTheme } from "../../hooks/useTheme";
import {
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
  lightColors,
} from "../../constants/theme";

interface DriverCardProps {
  driver: Driver;
}

export function DriverCard({ driver }: DriverCardProps) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.driverInfo}>
          <Image
            source={{ uri: driver.avatar }}
            style={styles.avatar}
            contentFit="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.label}>Driver Name</Text>
            <Text style={styles.name}>{driver.name}</Text>
          </View>
        </View>
        {driver.status === "assigned" && <StatusBadge label="Assigned" />}
      </View>
      <View style={styles.verificationRow}>
        <VerificationCheck label="License" verified={driver.hasLicense} />
        <VerificationCheck label="Insurance" verified={driver.hasInsurance} />
      </View>
    </View>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      marginBottom: spacing.md,
      ...shadows.md,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: spacing.md,
    },
    driverInfo: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: borderRadius.full,
      marginRight: spacing.md,
    },
    nameContainer: {
      flex: 1,
    },
    label: {
      fontSize: fontSize.xs,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
    },
    name: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
    verificationRow: {
      flexDirection: "row",
      gap: spacing.sm,
    },
  });
