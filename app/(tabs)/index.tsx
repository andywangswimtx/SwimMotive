import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import InputForm from '../components/InputForm';
import ResultsView from '../components/ResultsView';
import { Gender, AgeGroup, PoolType } from '../utils/dataManager';

export default function App() {
  const [appState, setAppState] = useState<'input' | 'results'>('input');
  const [params, setParams] = useState<{
    gender: Gender;
    poolType: PoolType;
    ageGroup: AgeGroup;
    event: string;
    userTime: string;
  } | null>(null);

  const handleSubmit = (data: {
    gender: Gender;
    poolType: PoolType;
    ageGroup: AgeGroup;
    event: string;
    userTime: string;
  }) => {
    setParams(data);
    setAppState('results');
  };

  const handleBackToInput = () => {
    setAppState('input');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {appState === 'input' ? (
          <InputForm onSubmit={handleSubmit} />
        ) : (
          params && (
            <ResultsView
              gender={params.gender}
              poolType={params.poolType}
              ageGroup={params.ageGroup}
              event={params.event}
              userTime={params.userTime}
              onBackToInput={handleBackToInput}
            />
          )
        )}
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
