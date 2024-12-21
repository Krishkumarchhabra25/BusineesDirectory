
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ClerkProvider } from "@clerk/clerk-expo";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import LoginScreen from "@/components/LoginScreen";
import { tokenCache } from "@/cache";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useFonts({
    'outfit': require("./../assets/fonts/Outfit-Black.ttf"),
    'outfit-bold': require("./../assets/fonts/Outfit-Bold.ttf"),
    'outfit-extrabold': require("./../assets/fonts/Outfit-ExtraBold.ttf"),
    'outfit-extralight': require("./../assets/fonts/Outfit-ExtraLight.ttf"),
    'outfit-light': require("./../assets/fonts/Outfit-Light.ttf"),
    'outfit-medium': require("./../assets/fonts/Outfit-Medium.ttf"),
    'outfit-regular': require("./../assets/fonts/Outfit-Regular.ttf"),
    'outfit-semibold': require("./../assets/fonts/Outfit-SemiBold.ttf"),
    'outfit-thin': require("./../assets/fonts/Outfit-Thin.ttf"),
  })
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <SignedIn>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        </SignedIn>
       

        <SignedOut>
          <LoginScreen />
        </SignedOut>
    </ClerkProvider>
  );
}
