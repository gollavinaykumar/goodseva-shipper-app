import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../hooks/useUser";
import { useTheme } from "../../hooks/useTheme";
import {
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  lightColors,
} from "../../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Header() {
  const router = useRouter();
  const { user } = useUser();
  const { colors } = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);
  const styles = getStyles(colors);

  const insets = useSafeAreaInsets();

  const menuItems = [
    { label: "Profile", icon: "person-outline" as const, route: "/profile" },
    {
      label: "Settings",
      icon: "settings-outline" as const,
      route: "/(home)/home/settings",
    },
    {
      label: "Theme",
      icon: "color-palette-outline" as const,
      route: "/(home)/home/theme",
    },
    { label: "Logout", icon: "log-out-outline" as const, route: "/" },
  ];

  const handleMenuPress = (route: string) => {
    setMenuVisible(false);
    if (route === "/welcome") {
      router.replace(route);
    } else {
      router.push(route as any);
    }
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: colors.background,
      }}
    >
      <View style={styles.header}>
        <Image
          source={require("../../assets/goodseva-logo.png")}
          style={styles.logo}
          contentFit="contain"
        />

        <TouchableOpacity
          style={styles.userBadge}
          onPress={() => setMenuVisible(true)}
        >
          <Image
            source={{ uri: user?.avatar }}
            style={styles.avatar}
            contentFit="cover"
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName} numberOfLines={1}>
              {user?.fullName}
            </Text>
            <Text style={styles.userRole} numberOfLines={1}>
              {user?.role}
            </Text>
          </View>
          <Ionicons
            name="chevron-down"
            size={20}
            color={colors.textSecondary}
          />
        </TouchableOpacity>

        <Modal
          visible={menuVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setMenuVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setMenuVisible(false)}
          >
            <View style={styles.menuContainer}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={item.label}
                  style={[
                    styles.menuItem,
                    index === menuItems.length - 1 && styles.menuItemLast,
                  ]}
                  onPress={() => handleMenuPress(item.route)}
                >
                  <Ionicons
                    name={item.icon}
                    size={22}
                    color={
                      item.label === "Logout"
                        ? colors.error
                        : colors.textPrimary
                    }
                  />
                  <Text
                    style={[
                      styles.menuLabel,
                      item.label === "Logout" && styles.menuLabelDanger,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
}

const getStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.md,
    },
    logo: {
      width: 150,
      height: 40,
    },
    userBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: borderRadius.full,
      paddingVertical: spacing.xs,
      paddingLeft: spacing.xs,
      paddingRight: spacing.sm,
      gap: spacing.sm,
      maxWidth: 180,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: borderRadius.full,
      backgroundColor: colors.border,
    },
    userInfo: {
      flex: 1,
      minWidth: 0,
    },
    userName: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.semibold,
      color: colors.textPrimary,
    },
    userRole: {
      fontSize: fontSize.xxs,
      color: colors.textSecondary,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "flex-start",
      paddingTop: 60,
      paddingHorizontal: spacing.lg,
    },
    menuContainer: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      overflow: "hidden",
      elevation: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      gap: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    menuItemLast: {
      borderBottomWidth: 0,
    },
    menuLabel: {
      fontSize: fontSize.base,
      color: colors.textPrimary,
      fontWeight: fontWeight.medium,
    },
    menuLabelDanger: {
      color: colors.error,
    },
  });
