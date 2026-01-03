import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
  lightColors,
} from "@/constants/theme";

export default function RegisterScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const styles = getStyles(colors);

  const handleSendOTP = () => {
    // Mock OTP sending
    if (formData.phone.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    // Mock OTP verification
    if (otp.length === 6) {
      setOtpVerified(true);
    }
  };

  const handleContinue = () => {
    router.push("/verification");
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={[styles.container, { paddingTop: insets.top }]}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={colors.textPrimary}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Create Account</Text>
          </View>

          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.fullName}
                  onChangeText={(value) => updateField("fullName", value)}
                  autoCapitalize="words"
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.email}
                  onChangeText={(value) => updateField("email", value)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="call-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.phone}
                  onChangeText={(value) => updateField("phone", value)}
                  keyboardType="phone-pad"
                  editable={!otpVerified}
                />
                {otpVerified && (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={colors.success}
                  />
                )}
              </View>

              {!otpSent && formData.phone && (
                <TouchableOpacity
                  style={styles.sendOtpButton}
                  onPress={handleSendOTP}
                >
                  <Text style={styles.sendOtpButtonText}>Send OTP</Text>
                </TouchableOpacity>
              )}

              {otpSent && !otpVerified && (
                <>
                  <View style={styles.inputContainer}>
                    <Ionicons
                      name="keypad-outline"
                      size={20}
                      color={colors.textSecondary}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Enter OTP"
                      placeholderTextColor={colors.textSecondary}
                      value={otp}
                      onChangeText={setOtp}
                      keyboardType="number-pad"
                      maxLength={6}
                    />
                  </View>

                  <TouchableOpacity
                    style={styles.verifyOtpButton}
                    onPress={handleVerifyOTP}
                  >
                    <Text style={styles.verifyOtpButtonText}>Verify OTP</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleSendOTP}>
                    <Text style={styles.resendText}>Resend OTP</Text>
                  </TouchableOpacity>
                </>
              )}

              <View style={styles.inputContainer}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.password}
                  onChangeText={(value) => updateField("password", value)}
                  secureTextEntry
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.confirmPassword}
                  onChangeText={(value) =>
                    updateField("confirmPassword", value)
                  }
                  secureTextEntry
                />
              </View>

              {otpVerified && (
                <TouchableOpacity
                  style={styles.continueButton}
                  onPress={handleContinue}
                >
                  <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text style={styles.loginLink}>
                  Already have an account?{" "}
                  <Text style={styles.loginLinkBold}>Login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    keyboardView: {
      flex: 1,
    },
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
    },
    formContainer: {
      paddingTop: spacing.xl,
      gap: spacing.lg,
      paddingBottom: spacing.xxxl,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      gap: spacing.md,
    },
    input: {
      flex: 1,
      fontSize: fontSize.base,
      color: colors.textPrimary,
      paddingVertical: spacing.sm,
    },
    sendOtpButton: {
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    sendOtpButtonText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: colors.textInverse,
    },
    verifyOtpButton: {
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: colors.success,
      justifyContent: "center",
      alignItems: "center",
    },
    verifyOtpButtonText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: colors.textInverse,
    },
    resendText: {
      fontSize: fontSize.sm,
      color: colors.primary,
      textAlign: "center",
      fontWeight: fontWeight.semibold,
    },
    continueButton: {
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: colors.textPrimary,
      justifyContent: "center",
      alignItems: "center",
      marginTop: spacing.lg,
    },
    continueButtonText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: colors.textInverse,
    },
    loginLink: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
      textAlign: "center",
      marginTop: spacing.md,
    },
    loginLinkBold: {
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
  });
