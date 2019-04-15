import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  btnStyles?: object;
  textStyles?: object;
  textButton: string;
  onPress: any;
  disabled?: boolean;
}

export const Button = (props: Props) => (
  <TouchableOpacity
    style={[styles.container, props.btnStyles]}
    onPress={props.onPress}
    disabled={props.disabled}>
    <Text style={[styles.text, props.textStyles]}>{props.textButton}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    margin: 10,
    width: 300,
  },
  text: {
    color: 'white',
  },
});
