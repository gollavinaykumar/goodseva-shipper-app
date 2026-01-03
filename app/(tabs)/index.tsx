import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { useTheme } from "../../hooks/useTheme";
import {
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  lightColors,
} from "../../constants/theme";

export default function WelcomeScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            G<Text style={styles.logoO}>o</Text>
            <Text style={styles.logoO2}>o</Text>dSeva
            <Text style={styles.logoStar}>◆</Text>
          </Text>
          <Text style={styles.tagline}>Delivering Smiles ~ Hapi Lives</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.push("/language")}
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      paddingVertical: spacing.xxxl * 3,
      paddingHorizontal: spacing.xl,
    },
    logoContainer: {
      alignItems: "center",
      marginTop: spacing.xxxl * 2,
    },
    logoText: {
      fontSize: 48,
      fontWeight: fontWeight.bold,
      color: "#1e3a8a",
      marginBottom: spacing.sm,
    },
    logoO: {
      color: "#ef4444",
    },
    logoO2: {
      color: "#3b82f6",
    },
    logoStar: {
      color: "#ef4444",
      fontSize: 24,
    },
    tagline: {
      fontSize: fontSize.base,
      color: "#dc2626",
      fontStyle: "italic",
    },
    buttonContainer: {
      flexDirection: "row",
      gap: spacing.lg,
    },
    loginButton: {
      flex: 1,
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: colors.textPrimary,
      justifyContent: "center",
      alignItems: "center",
    },
    loginText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
    registerButton: {
      flex: 1,
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: colors.textPrimary,
      justifyContent: "center",
      alignItems: "center",
    },
    registerText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: colors.textInverse,
    },
  });
