import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Trip } from "../../types";
import { StatusBadge } from "../ui/StatusBadge";
import { useTheme } from "../../hooks/useTheme";
import {
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
  lightColors,
} from "../../constants/theme";

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.tripIdContainer}>
          <Ionicons name="bus-outline" size={40} color={colors.textPrimary} />
          <View style={styles.idInfo}>
            <Text style={styles.label}>Trip ID</Text>
            <Text style={styles.tripId}>{trip.tripId}</Text>
          </View>
        </View>
        <StatusBadge label="In Transit" />
      </View>

      <View style={styles.routeContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.date}>{trip.startDate}</Text>
          <Text style={styles.location}>{trip.from}</Text>
        </View>

        <View style={styles.arrowContainer}>
          <Ionicons
            name="arrow-forward"
            size={24}
            color={colors.textSecondary}
          />
        </View>

        <View style={[styles.locationContainer, styles.locationRight]}>
          <Text style={styles.date}>{trip.endDate}</Text>
          <Text style={styles.location}>{trip.to}</Text>
        </View>
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
      alignItems: "center",
      marginBottom: spacing.lg,
    },
    tripIdContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
    },
    idInfo: {
      gap: spacing.xs,
    },
    label: {
      fontSize: fontSize.xs,
      color: colors.textSecondary,
    },
    tripId: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
    routeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    locationContainer: {
      flex: 1,
    },
    locationRight: {
      alignItems: "flex-end",
    },
    date: {
      fontSize: fontSize.xs,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
    },
    location: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
    arrowContainer: {
      paddingHorizontal: spacing.md,
    },
  });
