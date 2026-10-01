import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import {
  useFonts,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
  PublicSans_800ExtraBold,
  PublicSans_900Black,
} from '@expo-google-fonts/public-sans';

import { UserProvider } from '../context/UserContext';
import { colors } from '../theme/colors';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'PublicSans-Regular': PublicSans_400Regular,
    'PublicSans-Medium': PublicSans_500Medium,
    'PublicSans-SemiBold': PublicSans_600SemiBold,
    'PublicSans-Bold': PublicSans_700Bold,
    'PublicSans-ExtraBold': PublicSans_800ExtraBold,
    'PublicSans-Black': PublicSans_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const renderContent = () => (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );

  if (Platform.OS === 'web') {
    return (
      <UserProvider>
        <View style={styles.webContainer}>
          <View style={styles.webPreview}>
            {renderContent()}
          </View>
        </View>
      </UserProvider>
    );
  }

  return (
    <UserProvider>
      {renderContent()}
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  webPreview: {
    width: 440, // iPhone 16/18 Pro Max viewport width
    height: 1014, // iPhone 16/18 Pro Max viewport height + 6% (956 * 1.04 * 1.02)
    backgroundColor: colors.canvas,
    overflow: 'hidden',
  },
});




