import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import { RouterComponent } from './RouterComponent';

export const MainScreen = () => (
  <Grid>
    <RouterComponent />
  </Grid>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    borderColor: 'coral',
    borderWidth: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
});
