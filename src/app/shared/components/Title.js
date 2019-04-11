import React from "react";
import { Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux"; // New code

export const Title = props => (
  <Text style={styles.text} onPress={props.onPress}>
    {props.title}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});
