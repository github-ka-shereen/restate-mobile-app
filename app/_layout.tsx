import '@/app/globals.css';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  // SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    'Rubik-Regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('@/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Bold': require('@/assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Italic': require('@/assets/fonts/Rubik-Italic.ttf'),
    'Rubik-Black': require('@/assets/fonts/Rubik-Black.ttf'),
    'Rubik-BlackItalic': require('@/assets/fonts/Rubik-BlackItalic.ttf'),
    'Rubik-BoldItalic': require('@/assets/fonts/Rubik-BoldItalic.ttf'),
    'Rubik-ExtraBold': require('@/assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-ExtraBoldItalic': require('@/assets/fonts/Rubik-ExtraBoldItalic.ttf'),
    'Rubik-Light': require('@/assets/fonts/Rubik-Light.ttf'),
    'Rubik-LightItalic': require('@/assets/fonts/Rubik-LightItalic.ttf'),
    'Rubik-MediumItalic': require('@/assets/fonts/Rubik-MediumItalic.ttf'),
    'Rubik-SemiBold': require('@/assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-SemiBoldItalic': require('@/assets/fonts/Rubik-SemiBoldItalic.ttf'),
    'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Tell the splash screen to hide immediately! If we didn't call this,
      // the splash screen would stay visible until the app is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
