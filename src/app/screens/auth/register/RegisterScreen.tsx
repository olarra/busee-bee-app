import { Button, Input } from '@shared/components';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';

const styles = StyleSheet.create({
  account: {
    color: '#ffffff',
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#bb0000',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const INITIAL_STATE = {
  email: '',
  pasword: '',
};

export class RegisterScreen extends Component {
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  public onChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  public renderButtons() {
    return (
      <React.Fragment>
        <Button textButton="GoLogin" onPress={() => console.warn('GoLogin')} />
        <Button textButton="Create" onPress={() => console.warn('Create')} />
      </React.Fragment>
    );
  }

  public render() {
    return (
      <Row style={styles.container} size={1}>
        <Text style={styles.account}>Create Account</Text>
        <Input
          name="email"
          placeholder="email@gmail.com"
          onChange={this.onChangeUser}
          value={this.state.user}
        />
        <Input
          placeholder="password"
          secureTextEntry={true}
          onChange={this.onChangePassword}
          value={this.state.password}
        />
        <Text>{this.props.auth.errorCreating}</Text>
        {this.renderButtons()}
      </Row>
    );
  }
}
