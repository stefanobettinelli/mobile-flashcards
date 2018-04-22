import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { PrimarySubmitButton } from "../commons/TextButton";
import { bgColor, darkGray, white } from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 70,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: bgColor
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 80
  },
  textInput: {
    fontSize: 28,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: darkGray,
    backgroundColor: white
  },
  btn: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "flex-end"
  }
});

function NewDeck(props) {
  const { title, handleTitleChange, createDeck } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={handleTitleChange}
      />
      <View style={styles.btn}>
        <PrimarySubmitButton onPress={() => createDeck(title)}>
          Submit
        </PrimarySubmitButton>
      </View>
    </View>
  );
}

NewDeck.propTypes = {
  title: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  createDeck: PropTypes.func.isRequired
};

export default NewDeck;
