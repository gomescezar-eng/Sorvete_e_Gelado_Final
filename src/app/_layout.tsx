import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import LoginScreen from '../components/LoginScreen';
import { AppProvider, useApp } from '../context/AppContext';
import "../global.css";

SplashScreen.preventAutoHideAsync();

function Root() {
  const { user } = useApp();
  if (!user) return <LoginScreen />;
  return <AppTabs />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppProvider>
        <Root />
      </AppProvider>
    </ThemeProvider>
  );
}
