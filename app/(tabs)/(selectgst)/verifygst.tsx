import React, { useState } from "react";
import {
  View,
  Text,
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

export default function VerificationScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [hasGST, setHasGST] = useState(true);
  const [gstNumber, setGstNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");

  const handleVerify = () => {
    router.push("/register");
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
          <Text style={styles.title}>Verify Your Identity</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Do you have GST?</Text>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setHasGST(true)}
              >
                <View style={styles.radio}>
                  {hasGST && <View style={styles.radioSelected} />}
                </View>
                <Text style={styles.radioLabel}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setHasGST(false)}
              >
                <View style={styles.radio}>
                  {!hasGST && <View style={styles.radioSelected} />}
                </View>
                <Text style={styles.radioLabel}>No</Text>
              </TouchableOpacity>
            </View>
          </View>

          {hasGST ? (
            <>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="document-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="GST Number"
                  placeholderTextColor={colors.textSecondary}
                  value={gstNumber}
                  onChangeText={setGstNumber}
                />
              </View>

              <TouchableOpacity style={styles.uploadButton}>
                <Ionicons
                  name="cloud-upload-outline"
                  size={24}
                  color={colors.primary}
                />
                <View style={styles.uploadTextContainer}>
                  <Text style={styles.uploadText}>Upload GST Document</Text>
                  <Text style={styles.uploadSubtext}>
                    In JPG, PDF, PNG format, Max 10MB
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="document-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="PAN Number"
                  placeholderTextColor={colors.textSecondary}
                  value={panNumber}
                  onChangeText={setPanNumber}
                />
              </View>

              <TouchableOpacity style={styles.uploadButton}>
                <Ionicons
                  name="cloud-upload-outline"
                  size={24}
                  color={colors.primary}
                />
                <View style={styles.uploadTextContainer}>
                  <Text style={styles.uploadText}>Upload PAN Document</Text>
                  <Text style={styles.uploadSubtext}>
                    In JPG, PDF, PNG format, Max 10MB
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="document-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="AADHAR Number"
                  placeholderTextColor={colors.textSecondary}
                  value={aadharNumber}
                  onChangeText={setAadharNumber}
                />
              </View>

              <TouchableOpacity style={styles.uploadButton}>
                <Ionicons
                  name="cloud-upload-outline"
                  size={24}
                  color={colors.primary}
                />
                <View style={styles.uploadTextContainer}>
                  <Text style={styles.uploadText}>Upload AADHAR Document</Text>
                  <Text style={styles.uploadSubtext}>
                    In JPG, PDF, PNG format, Max 10MB
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
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
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  radioGroup: {
    flexDirection: "row",
    gap: spacing.xl,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: colors.textPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: borderRadius.full,
    backgroundColor: colors.textPrimary,
  },
  radioLabel: {
    fontSize: fontSize.base,
    color: colors.textPrimary,
    fontWeight: fontWeight.medium,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  input: {
    flex: 1,
    fontSize: fontSize.base,
    color: colors.textPrimary,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: "dashed",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  uploadTextContainer: {
    flex: 1,
  },
  uploadText: {
    fontSize: fontSize.base,
    color: colors.primary,
    fontWeight: fontWeight.medium,
    marginBottom: spacing.xs,
  },
  uploadSubtext: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
  verifyButton: {
    height: 56,
    borderRadius: borderRadius.full,
    backgroundColor: colors.textPrimary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },
  verifyButtonText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.textInverse,
  },
});
