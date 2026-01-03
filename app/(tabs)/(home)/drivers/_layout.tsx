import { Stack } from "expo-router";

export default function DriversLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="add-driver" />
    </Stack>
  );
}
