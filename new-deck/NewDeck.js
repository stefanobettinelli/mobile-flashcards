import React from "react";
import PropTypes from "prop-types";
import { Button, TextInput, View } from "react-native";

function NewDeck(props) {
  const { title, handleTitleChange, createDeck } = props;
  return (
    <View>
      <TextInput value={title} onChangeText={handleTitleChange} />
      <Button title="Submit" onPress={() => createDeck(title)} />
    </View>
  );
}

NewDeck.propTypes = {
  title: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  createDeck: PropTypes.func.isRequired
};

export default NewDeck;
