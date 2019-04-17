import { Button, Input } from '@shared/components';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux'; // New code

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

export interface MyState {
  email: string;
  password: string;
}

const INITIAL_STATE = {
  email: '',
  password: '',
};

export class RegisterScreen extends Component<{}, any> {
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
        <Button textButton="GoLogin" onPress={() => Actions.login()} />
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
          onChange={this.onChange}
          value={this.state.email}
        />
        <Input
          name="password"
          placeholder="password"
          secureTextEntry={true}
          onChange={this.onChange}
          value={this.state.password}
        />
        {this.renderButtons()}
      </Row>
    );
  }
}
