import colors from '@config/colors';
import strings from '@config/strings';
import { Button } from '@shared/components/Button';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux'; // New code

export class LoginScreen extends React.Component<{}> {
  public render() {
    return (
      <Row style={styles.container} size={1}>
        <Text>{strings.WELCOME_TO_LOGIN}</Text>
        <Button btnStyles={styles.loginBtn} textButton="Login" onPress={() => Actions.register()} />
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.DODGER_BLUE,
    justifyContent: 'center',
    flexDirection: 'column',
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
