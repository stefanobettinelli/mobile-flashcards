import React from "react";
import PropTypes from "prop-types";
import { Text, Button, TextInput, View } from "react-native";

function NewDeck(props) {
  const { title, handleTitleChange, createDeck } = props;
  return (
    <View>
      <Text>What is the title of your deck?</Text>
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
