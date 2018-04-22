import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { darkGray, green, purple, white, red } from "../utils/colors";

const styles = StyleSheet.create({
  reset: {
    color: white,
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    // height: 60,
    borderRadius: 2,
    textAlign: "center"
  },
  primarySubmitBtn: {
    fontSize: 30,
    width: 200,
    color: darkGray,
    backgroundColor: white,
    borderWidth: 2,
    borderColor: darkGray
  },
  secondarySubmitBtn: {
    fontSize: 30,
    width: 200,
    color: white,
    backgroundColor: darkGray
  },
  correctSubmitBtn: {
    fontSize: 30,
    width: 200,
    color: white,
    backgroundColor: green
  },
  incorrectSubmitBtn: {
    fontSize: 30,
    width: 200,
    color: white,
    backgroundColor: red
  }
});

export function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

export function PrimarySubmitButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, styles.primarySubmitBtn, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export function SecondarySubmitButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, styles.secondarySubmitBtn, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export function CorrectSubmitButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, styles.correctSubmitBtn, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export function IncorrectSubmitButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, styles.incorrectSubmitBtn, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
