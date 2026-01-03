import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
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

type LoginMethod = "password" | "otp";

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("password");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const styles = getStyles(colors);

  const handleSendOTP = () => {
    // Mock OTP sending
    setOtpSent(true);
  };

  const handleLogin = () => {
    router.replace("/(tabs)/(home)/home");
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
            <Text style={styles.title}>Login</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>
                G<Text style={styles.logoO}>o</Text>
                <Text style={styles.logoO2}>o</Text>dSeva
                <Text style={styles.logoStar}>◆</Text>
              </Text>
              <Text style={styles.tagline}>Delivering Smiles ~ Hapi Lives</Text>
            </View>

            <View style={styles.methodToggle}>
              <TouchableOpacity
                style={[
                  styles.methodButton,
                  loginMethod === "password" && styles.methodButtonActive,
                ]}
                onPress={() => {
                  setLoginMethod("password");
                  setOtpSent(false);
                }}
              >
                <Text
                  style={[
                    styles.methodText,
                    loginMethod === "password" && styles.methodTextActive,
                  ]}
                >
                  Password
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.methodButton,
                  loginMethod === "otp" && styles.methodButtonActive,
                ]}
                onPress={() => {
                  setLoginMethod("otp");
                  setOtpSent(false);
                }}
              >
                <Text
                  style={[
                    styles.methodText,
                    loginMethod === "otp" && styles.methodTextActive,
                  ]}
                >
                  OTP
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Ionicons
                  name={
                    loginMethod === "password" ? "mail-outline" : "call-outline"
                  }
                  size={20}
                  color={colors.textSecondary}
                />
                <TextInput
                  style={styles.input}
                  placeholder={
                    loginMethod === "password"
                      ? "Email or Phone"
                      : "Phone Number"
                  }
                  placeholderTextColor={colors.textSecondary}
                  value={identifier}
                  onChangeText={setIdentifier}
                  keyboardType={
                    loginMethod === "password" ? "default" : "phone-pad"
                  }
                  autoCapitalize="none"
                />
              </View>

              {loginMethod === "password" ? (
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
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>
              ) : (
                <>
                  {otpSent && (
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
                  )}
                  {!otpSent && (
                    <TouchableOpacity
                      style={styles.sendOtpButton}
                      onPress={handleSendOTP}
                    >
                      <Text style={styles.sendOtpButtonText}>Send OTP</Text>
                    </TouchableOpacity>
                  )}
                  {otpSent && (
                    <TouchableOpacity onPress={handleSendOTP}>
                      <Text style={styles.resendText}>Resend OTP</Text>
                    </TouchableOpacity>
                  )}
                </>
              )}

              {(loginMethod === "password" || otpSent) && (
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleLogin}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              )}

              {loginMethod === "password" && (
                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => router.push("/language")}>
                <Text style={styles.registerLink}>
                  Do not have an account?{" "}
                  <Text style={styles.registerLinkBold}>Register</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
      justifyContent: "center",
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: spacing.xxxl * 2,
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
    formContainer: {
      gap: spacing.lg,
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
    },
    loginButton: {
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: colors.textPrimary,
      justifyContent: "center",
      alignItems: "center",
      marginTop: spacing.lg,
    },
    loginButtonText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: colors.textInverse,
    },
    registerLink: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
      textAlign: "center",
      marginTop: spacing.md,
    },
    registerLinkBold: {
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
    methodToggle: {
      flexDirection: "row",
      backgroundColor: colors.card,
      borderRadius: borderRadius.full,
      padding: spacing.xs,
      marginBottom: spacing.xl,
      gap: spacing.xs,
    },
    methodButton: {
      flex: 1,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.full,
      alignItems: "center",
    },
    methodButtonActive: {
      backgroundColor: colors.textPrimary,
    },
    methodText: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: colors.textSecondary,
    },
    methodTextActive: {
      color: colors.textInverse,
    },
    sendOtpButton: {
      height: 56,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      marginTop: spacing.lg,
    },
    sendOtpButtonText: {
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
    forgotPassword: {
      fontSize: fontSize.sm,
      color: colors.primary,
      textAlign: "center",
      fontWeight: fontWeight.semibold,
    },
  });
