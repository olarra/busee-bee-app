import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#dfe6e9',
    borderColor: '#b2bec3',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    margin: 10,
    padding: 10,
    width: 300,
  },
});

interface Props {
  name: string;
  inputStyles?: object;
  placeholder?: string;
  secureTextEntry?: boolean;
  value: string;
  onChange: any;
}

export const Input = (props: Props) => (
  <TextInput
    style={[styles.input, props.inputStyles]}
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={props.onChange}
    secureTextEntry={props.secureTextEntry}
    autoCorrect={false}
    placeholderTextColor="#4a69bd"
    autoCapitalize="none"
  />
);
