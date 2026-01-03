import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
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

export default function AddTruckScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [formData, setFormData] = useState({
    vehicleNumber: "",
    vehicleType: "",
    capacity: "",
    registrationNumber: "",
    insuranceNumber: "",
    model: "",
    year: "",
    fuelType: "Diesel",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const vehicleTypes = [
    "Container",
    "Flatbed",
    "Tanker",
    "Refrigerated",
    "Dump Truck",
  ];
  const fuelTypes = ["Diesel", "Petrol", "CNG", "Electric"];

  return (
    <GradientBackground>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add New Truck</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Basic Information</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Vehicle Number *</Text>
            <TextInput
              style={styles.input}
              value={formData.vehicleNumber}
              onChangeText={(value) => updateField("vehicleNumber", value)}
              placeholder="e.g., AP32 H 5643"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="characters"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Vehicle Type *</Text>
            <View style={styles.chipContainer}>
              {vehicleTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.chip,
                    formData.vehicleType === type && styles.chipActive,
                  ]}
                  onPress={() => updateField("vehicleType", type)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      formData.vehicleType === type && styles.chipTextActive,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Capacity (Tons) *</Text>
            <TextInput
              style={styles.input}
              value={formData.capacity}
              onChangeText={(value) => updateField("capacity", value)}
              placeholder="e.g., 20"
              placeholderTextColor={colors.textSecondary}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Model</Text>
            <TextInput
              style={styles.input}
              value={formData.model}
              onChangeText={(value) => updateField("model", value)}
              placeholder="e.g., Tata LPT 1918"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Manufacturing Year</Text>
            <TextInput
              style={styles.input}
              value={formData.year}
              onChangeText={(value) => updateField("year", value)}
              placeholder="e.g., 2022"
              placeholderTextColor={colors.textSecondary}
              keyboardType="numeric"
              maxLength={4}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Fuel Type</Text>
            <View style={styles.chipContainer}>
              {fuelTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.chip,
                    formData.fuelType === type && styles.chipActive,
                  ]}
                  onPress={() => updateField("fuelType", type)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      formData.fuelType === type && styles.chipTextActive,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Documents</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Registration Number</Text>
            <TextInput
              style={styles.input}
              value={formData.registrationNumber}
              onChangeText={(value) => updateField("registrationNumber", value)}
              placeholder="Registration certificate number"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons
              name="cloud-upload-outline"
              size={24}
              color={colors.primary}
            />
            <View style={styles.uploadInfo}>
              <Text style={styles.uploadTitle}>Upload Registration</Text>
              <Text style={styles.uploadSubtitle}>
                JPG, PDF, PNG format, Max 10MB
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Insurance Number</Text>
            <TextInput
              style={styles.input}
              value={formData.insuranceNumber}
              onChangeText={(value) => updateField("insuranceNumber", value)}
              placeholder="Insurance policy number"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons
              name="cloud-upload-outline"
              size={24}
              color={colors.primary}
            />
            <View style={styles.uploadInfo}>
              <Text style={styles.uploadTitle}>Upload Insurance</Text>
              <Text style={styles.uploadSubtitle}>
                JPG, PDF, PNG format, Max 10MB
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Add Truck</Text>
        </TouchableOpacity>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: spacing.xxxl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
  },
  placeholder: {
    width: 40,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  fieldContainer: {
    marginBottom: spacing.lg,
  },
  fieldLabel: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  input: {
    fontSize: fontSize.base,
    color: colors.textPrimary,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    fontSize: fontSize.sm,
    color: colors.textPrimary,
    fontWeight: fontWeight.medium,
  },
  chipTextActive: {
    color: colors.textInverse,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: "dashed",
    marginBottom: spacing.lg,
  },
  uploadInfo: {
    flex: 1,
  },
  uploadTitle: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  uploadSubtitle: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
  submitButton: {
    height: 56,
    borderRadius: borderRadius.full,
    backgroundColor: colors.textPrimary,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
  submitButtonText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.textInverse,
  },
});
