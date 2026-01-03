import { Stack } from "expo-router";
import { Header } from "@/components/header/Header";

export default function TabsLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
