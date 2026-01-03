import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GradientBackground } from "@/components/ui/GradientBackground";

import { useTheme } from "@/hooks/useTheme";
import { spacing, fontSize, lightColors } from "@/constants/theme";

export default function BidsScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <GradientBackground>
      <View style={[styles.container]}>
        <View style={styles.content}>
          <Text style={styles.title}>Bids</Text>
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No active bids at the moment</Text>
          </View>
        </View>
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
    title: {
      fontSize: fontSize.xxxl,
      fontWeight: "700",
      color: colors.textPrimary,
      marginBottom: spacing.xl,
    },
    emptyState: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    emptyText: {
      fontSize: fontSize.base,
      color: colors.textSecondary,
    },
  });
