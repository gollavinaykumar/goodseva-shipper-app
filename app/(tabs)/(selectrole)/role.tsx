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

const roles = [
  { id: "shipper", title: "Shipper", subtitle: "Post Load" },
  { id: "supplier", title: "Lorry Supplier", subtitle: "Post Truck" },
  { id: "transporter", title: "Transporter", subtitle: "Post Loads & Trucks" },
  // { id: 'dispatcher', title: 'Dispatcher', subtitle: 'Driver' },
];

export default function RoleScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState("supplier");

  const handleContinue = () => {
    router.push("/verifygst");
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
          <Text style={styles.title}>What best describe your role?</Text>
        </View>

        <View style={styles.content}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.roleButton,
                selected === role.id && styles.roleButtonSelected,
              ]}
              onPress={() => setSelected(role.id)}
            >
              <View>
                <Text
                  style={[
                    styles.roleTitle,
                    selected === role.id && styles.roleTextSelected,
                  ]}
                >
                  {role.title}
                </Text>
                <Text
                  style={[
                    styles.roleSubtitle,
                    selected === role.id && styles.roleTextSelected,
                  ]}
                >
                  {role.subtitle}
                </Text>
              </View>
              {selected === role.id && (
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
    flex: 1,
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
  },
  content: {
    flex: 1,
    paddingTop: spacing.xl,
    gap: spacing.md,
  },
  roleButton: {
    minHeight: 72,
    borderRadius: borderRadius.full,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: "transparent",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  roleButtonSelected: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textPrimary,
  },
  roleTitle: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    fontWeight: fontWeight.semibold,
    marginBottom: spacing.xs,
  },
  roleSubtitle: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  roleTextSelected: {
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
