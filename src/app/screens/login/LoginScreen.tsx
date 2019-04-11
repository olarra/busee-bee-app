import colors from '@config/colors';
import { Button } from '@shared/components/Button';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import strings from '@config/strings';

class LoginScreen extends React.Component<{}> {
  public render() {
    return (
      <View style={styles.container}>
        <Text>{strings.WELCOME_TO_LOGIN}</Text>
        <Button styles={styles.loginBtn} textButton="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.DODGER_BLUE,
    flex: 1,
    justifyContent: 'center',
  },
  loginBtn: {
    backgroundColor: 'indigo',
    borderColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    padding: 12,
  },
});

export default LoginScreen;
