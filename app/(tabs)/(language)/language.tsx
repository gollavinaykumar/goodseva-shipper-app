import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { GradientBackground } from "@/components/ui/GradientBackground";
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
} from "@/constants/theme";

const languages = [
  { id: "en", label: "English" },
  { id: "hi", label: "हिंदी" },
  { id: "ta", label: "தமிழ்" },
  { id: "te", label: "తెలుగు" },
];

export default function LanguageScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState("en");

  const handleContinue = () => {
    router.push("/role");
  };

  return (
    <GradientBackground>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.title}>Select Language</Text>
        </View>

        <View style={styles.content}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.id}
              style={[
                styles.languageButton,
                selected === lang.id && styles.languageButtonSelected,
              ]}
              onPress={() => setSelected(lang.id)}
            >
              <Text
                style={[
                  styles.languageText,
                  selected === lang.id && styles.languageTextSelected,
                ]}
              >
                {lang.label}
              </Text>
              {selected === lang.id && (
                <Ionicons name="checkmark" size={24} color={colors.success} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Ionicons name="arrow-forward" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.lg,
    gap: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
  },
  content: {
    flex: 1,
    paddingTop: spacing.xl,
    gap: spacing.md,
  },
  languageButton: {
    height: 64,
    borderRadius: borderRadius.full,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: "transparent",
    paddingHorizontal: spacing.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  languageButtonSelected: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textPrimary,
  },
  languageText: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    fontWeight: fontWeight.medium,
  },
  languageTextSelected: {
    color: colors.textInverse,
  },
  continueButton: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.full,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: spacing.xl,
  },
});
