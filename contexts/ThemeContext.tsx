import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  setTheme as setAppTheme,
  lightColors,
  darkColors,
} from "../constants/theme";

import { useContext } from "react";

type ThemeMode = "light" | "dark" | "auto";

interface ThemeContextType {
  theme: ThemeMode;
  isDark: boolean;
  colors: typeof lightColors;
  setTheme: (theme: ThemeMode) => void;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setThemeMode] = useState<ThemeMode>("light");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  useEffect(() => {
    const isDarkMode =
      theme === "dark" || (theme === "auto" && systemColorScheme === "dark");
    setIsDark(isDarkMode);
    setAppTheme(isDarkMode ? "dark" : "light");
  }, [theme, systemColorScheme]);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (
        savedTheme &&
        (savedTheme === "light" ||
          savedTheme === "dark" ||
          savedTheme === "auto")
      ) {
        setThemeMode(savedTheme as ThemeMode);
      }
    } catch (error) {
      console.error("Failed to load theme:", error);
    }
  };

  const setTheme = async (newTheme: ThemeMode) => {
    try {
      await AsyncStorage.setItem("theme", newTheme);
      setThemeMode(newTheme);
    } catch (error) {
      console.error("Failed to save theme:", error);
    }
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, isDark, colors, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
