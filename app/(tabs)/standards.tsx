import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ResultsView from '../../components/ResultsView';
import { useUserContext, SwimParams } from '../../context/UserContext';

export default function StandardsScreen() {
  const { params } = useUserContext();
  const router = useRouter();

  const defaultParams: SwimParams = {
    gender: 'Boy',
    poolType: 'SCY',
    ageGroup: '15-16',
    event: '100_FR',
    userTime: '', // Empty time
  };

  const activeParams = params || defaultParams;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ResultsView
          gender={activeParams.gender}
          poolType={activeParams.poolType}
          ageGroup={activeParams.ageGroup}
          event={activeParams.event}
          userTime={activeParams.userTime}
          onBackToInput={() => router.push('/')}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

