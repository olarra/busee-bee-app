import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Col, Row } from "react-native-easy-grid";

const GoBack = props => (
  <TouchableOpacity onPress={props.onCancel} style={{ margin: 15 }}>
    <View>
      <Text>Cancel</Text>
    </View>
  </TouchableOpacity>
);

const GoNext = props => (
  <TouchableOpacity onPress={props.onNext} style={{ margin: 15 }}>
    <View>
      <Text style={{ color: "blue" }}>Next</Text>
    </View>
  </TouchableOpacity>
);

export const Header = props => {
  return (
    <View style={styles.container}>
      {props.onCancel ? <GoBack {...props} /> : null}
      <Text style={{ margin: 15, fontWeight: "bold" }}>{props.title}</Text>
      {props.onNext ? <GoNext {...props} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#c7ecee",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    marginTop: 40
  }
});
