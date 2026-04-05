import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import InputForm from '../../components/InputForm';
import { useUserContext, SwimParams } from '../../context/UserContext';

export default function InputScreen() {
  const { setParams } = useUserContext();
  const router = useRouter();

  const handleSubmit = (data: SwimParams) => {
    setParams(data);
    // Navigate to the Standards tab
    router.push('/standards');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <InputForm onSubmit={handleSubmit} />
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

