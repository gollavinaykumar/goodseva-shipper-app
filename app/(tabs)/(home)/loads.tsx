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

import { useTheme } from "@/hooks/useTheme";
import {
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  shadows,
  lightColors,
} from "@/constants/theme";

interface Load {
  id: string;
  loadId: string;
  from: string;
  to: string;
  pickupDate: string;
  deliveryDate: string;
  weight: string;
  material: string;
  price: string;
  distance: string;
  shipper: string;
  status: "available" | "bidding" | "assigned";
}

const mockLoads: Load[] = [
  {
    id: "1",
    loadId: "LD 8274455",
    from: "Mumbai",
    to: "Delhi",
    pickupDate: "25 Dec 2025",
    deliveryDate: "28 Dec 2025",
    weight: "15 Tons",
    material: "Electronics",
    price: "₹85,000",
    distance: "1,400 km",
    shipper: "ABC Logistics",
    status: "available",
  },
  {
    id: "2",
    loadId: "LD 8274456",
    from: "Bangalore",
    to: "Chennai",
    pickupDate: "26 Dec 2025",
    deliveryDate: "27 Dec 2025",
    weight: "10 Tons",
    material: "Textiles",
    price: "₹35,000",
    distance: "350 km",
    shipper: "XYZ Transport",
    status: "available",
  },
  {
    id: "3",
    loadId: "LD 8274457",
    from: "Hyderabad",
    to: "Pune",
    pickupDate: "24 Dec 2025",
    deliveryDate: "26 Dec 2025",
    weight: "20 Tons",
    material: "Construction Materials",
    price: "₹95,000",
    distance: "560 km",
    shipper: "BuildCo Ltd",
    status: "bidding",
  },
  {
    id: "4",
    loadId: "LD 8274458",
    from: "Kolkata",
    to: "Bhubaneswar",
    pickupDate: "27 Dec 2025",
    deliveryDate: "28 Dec 2025",
    weight: "8 Tons",
    material: "FMCG Products",
    price: "₹28,000",
    distance: "440 km",
    shipper: "FastMove Cargo",
    status: "available",
  },
];

export default function LoadsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [filter, setFilter] = useState<"all" | "available" | "bidding">("all");
  const styles = getStyles(colors);

  const filteredLoads = mockLoads.filter((load) => {
    if (filter === "all") return true;
    return load.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return colors.success;
      case "bidding":
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };

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
                filter === "available" && styles.filterButtonActive,
              ]}
              onPress={() => setFilter("available")}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === "available" && styles.filterTextActive,
                ]}
              >
                Available
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterButton,
                filter === "bidding" && styles.filterButtonActive,
              ]}
              onPress={() => setFilter("bidding")}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === "bidding" && styles.filterTextActive,
                ]}
              >
                Bidding
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {filteredLoads.map((load) => (
            <TouchableOpacity
              key={load.id}
              style={styles.card}
              activeOpacity={0.7}
            >
              <View style={styles.cardHeader}>
                <View style={styles.loadIdContainer}>
                  <Ionicons
                    name="cube-outline"
                    size={24}
                    color={colors.primary}
                  />
                  <View style={styles.idInfo}>
                    <Text style={styles.label}>Load ID</Text>
                    <Text style={styles.loadId}>{load.loadId}</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: `${getStatusColor(load.status)}20` },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      { color: getStatusColor(load.status) },
                    ]}
                  >
                    {load.status.charAt(0).toUpperCase() + load.status.slice(1)}
                  </Text>
                </View>
              </View>

              <View style={styles.routeContainer}>
                <View style={styles.locationContainer}>
                  <Text style={styles.date}>{load.pickupDate}</Text>
                  <Text style={styles.location}>{load.from}</Text>
                </View>

                <View style={styles.arrowContainer}>
                  <Ionicons
                    name="arrow-forward"
                    size={24}
                    color={colors.textSecondary}
                  />
                </View>

                <View style={[styles.locationContainer, styles.locationRight]}>
                  <Text style={styles.date}>{load.deliveryDate}</Text>
                  <Text style={styles.location}>{load.to}</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <View style={styles.detailItem}>
                    <Ionicons
                      name="scale-outline"
                      size={16}
                      color={colors.textSecondary}
                    />
                    <Text style={styles.detailLabel}>{load.weight}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Ionicons
                      name="navigate-outline"
                      size={16}
                      color={colors.textSecondary}
                    />
                    <Text style={styles.detailLabel}>{load.distance}</Text>
                  </View>
                </View>
                <View style={styles.detailRow}>
                  <View style={styles.detailItem}>
                    <Ionicons
                      name="apps-outline"
                      size={16}
                      color={colors.textSecondary}
                    />
                    <Text style={styles.detailLabel}>{load.material}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Ionicons
                      name="business-outline"
                      size={16}
                      color={colors.textSecondary}
                    />
                    <Text style={styles.detailLabel}>{load.shipper}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.footer}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceLabel}>Estimated Price</Text>
                  <Text style={styles.price}>{load.price}</Text>
                </View>
                <TouchableOpacity style={styles.bidButton}>
                  <Text style={styles.bidButtonText}>Place Bid</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={18}
                    color={colors.textInverse}
                  />
                </TouchableOpacity>
              </View>
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
    content: {
      flex: 1,
      paddingHorizontal: spacing.lg,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      marginBottom: spacing.md,
      ...shadows.md,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.lg,
    },
    loadIdContainer: {
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
    loadId: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
    statusBadge: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: borderRadius.full,
    },
    statusText: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.semibold,
    },
    routeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: spacing.lg,
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
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginBottom: spacing.md,
    },
    detailsContainer: {
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    detailItem: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
    },
    detailLabel: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    priceContainer: {
      gap: spacing.xs,
    },
    priceLabel: {
      fontSize: fontSize.xs,
      color: colors.textSecondary,
    },
    price: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.bold,
      color: colors.primary,
    },
    bidButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
      backgroundColor: colors.textPrimary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.full,
    },
    bidButtonText: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textInverse,
    },
  });
