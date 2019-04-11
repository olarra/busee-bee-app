import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Button = (props: any) => (
  <TouchableOpacity
    style={[styles.container, props.styles]}
    onPress={props.onPress}
    disabled={props.disabled}>
    <View>
      <Text style={[styles.text, props.textStyle]}>{props.textButton}</Text>
    </View>
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
