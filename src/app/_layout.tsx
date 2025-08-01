import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/movies");
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Protected guard={__DEV__}>
          <Stack.Screen name="storybook" />
        </Stack.Protected>
        <Stack.Screen name="(pages)" />
      </Stack>
    </SafeAreaView>
  );
}
