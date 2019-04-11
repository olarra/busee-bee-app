import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const Input = props => (
  <TextInput
    style={[styles.input, props.styles]}
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={props.onChange}
    secureTextEntry={props.secureTextEntry}
    autoCorrect={false}
    placeholderTextColor="#4a69bd"
    autoCapitalize="none"
  />
);

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#dfe6e9",
    borderColor: "#b2bec3",
    borderWidth: 1,
    margin: 10,
    padding: 10
  }
});
