import React, { useState } from "react";
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

import { TripCard } from "@/components/feature/TripCard";
import { useLogistics } from "@/hooks/useLogistics";
import {
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  lightColors,
} from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";

export default function TripsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { trips } = useLogistics();
  const { colors } = useTheme();
  const [filter, setFilter] = useState<"all" | "in-transit" | "scheduled">(
    "all"
  );
  const styles = getStyles(colors);

  const filteredTrips = trips.filter((trip) => {
    if (filter === "all") return true;
    return trip.status === filter;
  });

  return (
    <GradientBackground>
      <View style={[styles.container]}>
        <View style={styles.filterSection}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color={colors.textSecondary} />
          </View>

          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filter === "all" && styles.filterButtonActive,
              ]}
              onPress={() => setFilter("all")}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === "all" && styles.filterTextActive,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterButton,
                filter === "in-transit" && styles.filterButtonActive,
              ]}
              onPress={() => setFilter("in-transit")}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === "in-transit" && styles.filterTextActive,
                ]}
              >
                InTransit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterButton,
                filter === "scheduled" && styles.filterButtonActive,
              ]}
              onPress={() => setFilter("scheduled")}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === "scheduled" && styles.filterTextActive,
                ]}
              >
                No Loads
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color={colors.textInverse} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {filteredTrips.map((trip) => (
            <TouchableOpacity
              key={trip.id}
              onPress={() =>
                router.push({
                  pathname: "/trip-details",
                  params: { id: trip.id },
                })
              }
              activeOpacity={0.7}
            >
              <TripCard trip={trip} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </GradientBackground>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    filterSection: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      gap: spacing.sm,
    },
    searchContainer: {
      width: 40,
      height: 40,
      borderRadius: borderRadius.full,
      backgroundColor: colors.card,
      justifyContent: "center",
      alignItems: "center",
    },
    filterButtons: {
      flex: 1,
      flexDirection: "row",
      gap: spacing.sm,
    },
    filterButton: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.full,
      backgroundColor: colors.card,
    },
    filterButtonActive: {
      backgroundColor: colors.textPrimary,
    },
    filterText: {
      fontSize: fontSize.sm,
      color: colors.textPrimary,
      fontWeight: fontWeight.medium,
    },
    filterTextActive: {
      color: colors.textInverse,
    },
    addButton: {
      width: 44,
      height: 44,
      borderRadius: borderRadius.full,
      backgroundColor: colors.textPrimary,
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.lg,
    },
  });
