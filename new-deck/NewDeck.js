import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import PropTypes from "prop-types";
import { bgColor, darkGray, white } from "../utils/colors";
import { PrimarySubmitButton } from "../commons/TextButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: bgColor
  },
  textInput: {
    height: 50,
    marginBottom: 30,
    fontSize: 28,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: darkGray,
    backgroundColor: white
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 80
  }
});

const NewDeck = ({ title, handleTitleChange, createDeck }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <Text style={styles.text}>What is the title of your new deck?</Text>
    <TextInput
      style={styles.textInput}
      value={title}
      onChangeText={handleTitleChange}
    />
    <View style={{ height: 60 }} />
    <PrimarySubmitButton
      style={{ alignSelf: "center" }}
      onPress={() => createDeck(title)}
    >
      Submit
    </PrimarySubmitButton>
  </KeyboardAvoidingView>
);

NewDeck.propTypes = {
  title: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  createDeck: PropTypes.func.isRequired
};

export default NewDeck;
