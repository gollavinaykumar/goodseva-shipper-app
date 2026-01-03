import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Truck } from "../../types";
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

interface TruckCardProps {
  truck: Truck;
}

export function TruckCard({ truck }: TruckCardProps) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.truckInfo}>
          <View style={styles.iconContainer}>
            <Ionicons name="bus-outline" size={40} color={colors.textPrimary} />
          </View>
          <View style={styles.details}>
            <Text style={styles.label}>Vehicle Number</Text>
            <Text style={styles.vehicleNumber}>{truck.vehicleNumber}</Text>
            <Text style={styles.location}>Location : {truck.location}</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <StatusBadge label="In Transit" />
          <View style={styles.mapPlaceholder}>
            <Ionicons name="map" size={40} color={colors.success} />
            <Ionicons
              name="location"
              size={20}
              color={colors.textPrimary}
              style={styles.locationIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.verificationRow}>
        <VerificationCheck
          label="Registration"
          verified={truck.hasRegistration}
        />
        <VerificationCheck label="Insurance" verified={truck.hasInsurance} />
      </View>

      <View style={styles.driverSection}>
        <Image
          source={{ uri: truck.driver.avatar }}
          style={styles.avatar}
          contentFit="cover"
        />
        <View>
          <Text style={styles.label}>Driver Name</Text>
          <Text style={styles.driverName}>{truck.driver.name}</Text>
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
      marginBottom: spacing.md,
    },
    truckInfo: {
      flexDirection: "row",
      flex: 1,
    },
    iconContainer: {
      marginRight: spacing.md,
    },
    details: {
      flex: 1,
    },
    label: {
      fontSize: fontSize.xs,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
    },
    vehicleNumber: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
      marginBottom: spacing.xs,
    },
    location: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
    },
    rightSection: {
      alignItems: "flex-end",
      gap: spacing.sm,
    },
    mapPlaceholder: {
      width: 60,
      height: 60,
      backgroundColor: "#e8f5e9",
      borderRadius: borderRadius.sm,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    locationIcon: {
      position: "absolute",
    },
    verificationRow: {
      flexDirection: "row",
      gap: spacing.sm,
      marginBottom: spacing.md,
    },
    driverSection: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.borderLight,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: borderRadius.full,
      marginRight: spacing.md,
    },
    driverName: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
  });
