import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { UserProvider } from "@/contexts/UserContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ThemeProvider>
        <UserProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </UserProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
