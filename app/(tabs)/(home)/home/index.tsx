import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GradientBackground } from "@/components/ui/GradientBackground";

import { StatCard } from "@/components/feature/StatCard";
import { TripCard } from "@/components/feature/TripCard";
import { useLogistics } from "@/hooks/useLogistics";
import { useTheme } from "@/hooks/useTheme";
import { spacing, fontSize, fontWeight, lightColors } from "@/constants/theme";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { stats, getInTransitTrips } = useLogistics();
  const { colors } = useTheme();
  const inTransitTrips = getInTransitTrips();
  const styles = getStyles(colors);

  return (
    <GradientBackground>
      <View style={[styles.container, { paddingTop: 15 }]}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.statsGrid}>
            <StatCard
              icon="time-outline"
              label="In Transit"
              value={stats.inTransit}
            />
            <StatCard icon="bus-outline" label="Trucks" value={stats.trucks} />
            <StatCard
              icon="pricetags-outline"
              label="Bids"
              value={stats.bids}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>InTransit</Text>
            {inTransitTrips.slice(0, 1).map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trips</Text>
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No trips scheduled</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Bids</Text>
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No active bids</Text>
            </View>
          </View>
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
    content: {
      flex: 1,
      paddingHorizontal: spacing.lg,
    },
    statsGrid: {
      flexDirection: "row",
      gap: spacing.md,
      marginBottom: spacing.xl,
    },
    section: {
      marginBottom: spacing.xl,
    },
    sectionTitle: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.md,
    },
    emptyState: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: spacing.xxxl,
      alignItems: "center",
      minHeight: 120,
      justifyContent: "center",
    },
    emptyText: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
    },
  });
