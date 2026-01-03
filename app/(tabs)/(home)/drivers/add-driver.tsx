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

export default function AddDriverScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    licenseNumber: "",
    licenseExpiry: "",
    experience: "",
    bloodGroup: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

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
          <Text style={styles.headerTitle}>Add New Driver</Text>
          <View style={styles.placeholder} />
        </View>

        <TouchableOpacity style={styles.avatarSection}>
          <View style={styles.avatarPlaceholder}>
            <Ionicons name="camera" size={32} color={colors.textSecondary} />
          </View>
          <Text style={styles.avatarText}>Upload Photo</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Full Name *</Text>
            <TextInput
              style={styles.input}
              value={formData.fullName}
              onChangeText={(value) => updateField("fullName", value)}
              placeholder="Enter full name"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Phone Number *</Text>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={(value) => updateField("phone", value)}
              placeholder="+91 98765 43210"
              placeholderTextColor={colors.textSecondary}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(value) => updateField("email", value)}
              placeholder="driver@example.com"
              placeholderTextColor={colors.textSecondary}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Address</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.address}
              onChangeText={(value) => updateField("address", value)}
              placeholder="Enter complete address"
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Blood Group</Text>
            <View style={styles.chipContainer}>
              {bloodGroups.map((group) => (
                <TouchableOpacity
                  key={group}
                  style={[
                    styles.chip,
                    formData.bloodGroup === group && styles.chipActive,
                  ]}
                  onPress={() => updateField("bloodGroup", group)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      formData.bloodGroup === group && styles.chipTextActive,
                    ]}
                  >
                    {group}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Professional Details</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>License Number *</Text>
            <TextInput
              style={styles.input}
              value={formData.licenseNumber}
              onChangeText={(value) => updateField("licenseNumber", value)}
              placeholder="DL number"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="characters"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>License Expiry Date</Text>
            <TextInput
              style={styles.input}
              value={formData.licenseExpiry}
              onChangeText={(value) => updateField("licenseExpiry", value)}
              placeholder="DD/MM/YYYY"
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
              <Text style={styles.uploadTitle}>Upload License</Text>
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
            <Text style={styles.fieldLabel}>Driving Experience (Years)</Text>
            <TextInput
              style={styles.input}
              value={formData.experience}
              onChangeText={(value) => updateField("experience", value)}
              placeholder="e.g., 5"
              placeholderTextColor={colors.textSecondary}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Documents</Text>

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

          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons
              name="cloud-upload-outline"
              size={24}
              color={colors.primary}
            />
            <View style={styles.uploadInfo}>
              <Text style={styles.uploadTitle}>Upload AADHAR</Text>
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
          <Text style={styles.submitButtonText}>Add Driver</Text>
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
  avatarSection: {
    alignItems: "center",
    paddingVertical: spacing.xl,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: borderRadius.full,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  avatarText: {
    fontSize: fontSize.sm,
    color: colors.primary,
    fontWeight: fontWeight.medium,
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
  textArea: {
    height: 80,
    textAlignVertical: "top",
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
