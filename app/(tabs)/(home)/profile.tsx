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
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { useUser } from "@/hooks/useUser";
import { useTheme } from "@/hooks/useTheme";
import {
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  lightColors,
} from "@/constants/theme";

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { user, updateUser } = useUser();
  const { colors } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });
  const styles = getStyles(colors);

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <GradientBackground>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: user?.avatar }}
              style={styles.avatar}
              contentFit="cover"
            />
            <TouchableOpacity style={styles.avatarEdit}>
              <Ionicons name="camera" size={20} color={colors.textInverse} />
            </TouchableOpacity>
          </View>
          <Text style={styles.role}>{user?.role}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Personal Information</Text>
            <TouchableOpacity
              onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
            >
              <Text style={styles.editButton}>
                {isEditing ? "Save" : "Edit"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Full Name</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={formData.fullName}
                onChangeText={(value) => updateField("fullName", value)}
                placeholder="Enter full name"
                placeholderTextColor={colors.textSecondary}
              />
            ) : (
              <Text style={styles.fieldValue}>{user?.fullName}</Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email Address</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(value) => updateField("email", value)}
                placeholder="Enter email"
                placeholderTextColor={colors.textSecondary}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            ) : (
              <Text style={styles.fieldValue}>{user?.email}</Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Phone Number</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={formData.phone}
                onChangeText={(value) => updateField("phone", value)}
                placeholder="Enter phone"
                placeholderTextColor={colors.textSecondary}
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.fieldValue}>{user?.phone}</Text>
            )}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Documents</Text>

          <TouchableOpacity style={styles.documentItem}>
            <View style={styles.documentIcon}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color={colors.primary}
              />
            </View>
            <View style={styles.documentInfo}>
              <Text style={styles.documentTitle}>License</Text>
              <Text style={styles.documentStatus}>Verified</Text>
            </View>
            <Ionicons
              name="checkmark-circle"
              size={24}
              color={colors.success}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.documentItem}>
            <View style={styles.documentIcon}>
              <Ionicons
                name="shield-checkmark-outline"
                size={24}
                color={colors.primary}
              />
            </View>
            <View style={styles.documentInfo}>
              <Text style={styles.documentTitle}>Insurance</Text>
              <Text style={styles.documentStatus}>Verified</Text>
            </View>
            <Ionicons
              name="checkmark-circle"
              size={24}
              color={colors.success}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.documentItem}>
            <View style={styles.documentIcon}>
              <Ionicons name="card-outline" size={24} color={colors.primary} />
            </View>
            <View style={styles.documentInfo}>
              <Text style={styles.documentTitle}>GST Certificate</Text>
              <Text style={styles.documentStatus}>Verified</Text>
            </View>
            <Ionicons
              name="checkmark-circle"
              size={24}
              color={colors.success}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      padding: spacing.lg,
      paddingBottom: spacing.xxxl,
    },
    avatarSection: {
      alignItems: "center",
      marginBottom: spacing.xl,
    },
    avatarContainer: {
      position: "relative",
      marginBottom: spacing.md,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: borderRadius.full,
      backgroundColor: colors.border,
    },
    avatarEdit: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 36,
      height: 36,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 3,
      borderColor: colors.background,
    },
    role: {
      fontSize: fontSize.base,
      color: colors.textSecondary,
      fontWeight: fontWeight.medium,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.lg,
    },
    cardTitle: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.bold,
      color: colors.textPrimary,
    },
    editButton: {
      fontSize: fontSize.base,
      color: colors.primary,
      fontWeight: fontWeight.semibold,
    },
    fieldContainer: {
      marginBottom: spacing.lg,
    },
    fieldLabel: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
    },
    fieldValue: {
      fontSize: fontSize.base,
      color: colors.textPrimary,
      fontWeight: fontWeight.medium,
    },
    input: {
      fontSize: fontSize.base,
      color: colors.textPrimary,
      fontWeight: fontWeight.medium,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingVertical: spacing.xs,
    },
    documentItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      gap: spacing.md,
    },
    documentIcon: {
      width: 48,
      height: 48,
      borderRadius: borderRadius.md,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    documentInfo: {
      flex: 1,
    },
    documentTitle: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
      marginBottom: spacing.xs,
    },
    documentStatus: {
      fontSize: fontSize.sm,
      color: colors.success,
    },
  });
