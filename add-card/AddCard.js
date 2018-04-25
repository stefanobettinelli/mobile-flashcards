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
import { SecondarySubmitButton } from "../commons/TextButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: bgColor
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 80
  },
  qa: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5
  },
  textInput: {
    fontSize: 28,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: darkGray,
    marginBottom: 10,
    backgroundColor: white
  },
  btn: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "flex-end"
  }
});

const createCard = (question, answer) => {
  if (!question || !answer) return null;
  return {
    question,
    answer
  };
};

function AddCard({
  deckTitle,
  handleSubmitNewCard,
  question,
  answer,
  handleQuestionChange,
  handleAnswerChange
}) {
  const newCard = createCard(question, answer);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.text}>{deckTitle}</Text>
      <Text style={styles.qa}>Question</Text>
      <TextInput
        style={styles.textInput}
        value={question}
        onChangeText={handleQuestionChange}
      />
      <Text style={styles.qa}>Answer</Text>
      <TextInput
        style={styles.textInput}
        value={answer}
        onChangeText={handleAnswerChange}
      />
      <View style={{ height: 60 }} />
      <SecondarySubmitButton
        // disabled={!newCard}
        style={{ alignSelf: "center" }}
        onPress={() => handleSubmitNewCard(newCard)}
      >
        Submit
      </SecondarySubmitButton>
    </KeyboardAvoidingView>
  );
}

AddCard.propTypes = {
  handleSubmitNewCard: PropTypes.func.isRequired,
  handleQuestionChange: PropTypes.func.isRequired,
  handleAnswerChange: PropTypes.func.isRequired,
  deckTitle: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default AddCard;
