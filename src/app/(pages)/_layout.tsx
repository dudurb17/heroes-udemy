import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="movies/index" options={{ headerShown: false }} />
      <Stack.Screen name="storybook" options={{ headerShown: false }} />
    </Stack>
  );
}
