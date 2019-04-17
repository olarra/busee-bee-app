import * as React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    flex: 1,
    justifyContent: 'center',
  },
});

export const MapScreen = () => {
  const instructions = Platform.select({
    android: 'Map Android',
    ios: 'Map Ios',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>{instructions}</Text>
    </SafeAreaView>
  );
};
