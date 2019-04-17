import * as React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
});

export const HomeScreen = () => {
  const instructions = Platform.select({
    android:
      'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>{instructions}</Text>
    </SafeAreaView>
  );
};
