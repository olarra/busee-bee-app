import colors from '@config/colors';
import strings from '@config/strings';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoginScreen extends React.Component<{}> {
  public render() {
    return (
      <View style={styles.container}>
        <Text>{strings.WELCOME_TO_LOGIN}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    flex: 1,
    justifyContent: 'center'
  }
});

export default LoginScreen;
