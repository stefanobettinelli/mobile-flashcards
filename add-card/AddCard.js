import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import { bgColor, darkGray, white } from "../utils/colors";
import { SecondarySubmitButton } from "../commons/TextButton";

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

class AddCard extends React.Component {
  newCard = (question, answer) => {
    if (!question || !answer) return null;
    return {
      question,
      answer
    };
  };

  render() {
    const {
      deckTitle,
      handleSubmitNewCard,
      question,
      answer,
      handleQuestionChange,
      handleAnswerChange
    } = this.props;

    const newCard = this.newCard(question, answer);

    return (
      <View style={styles.container}>
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
        <View style={styles.btn}>
          <SecondarySubmitButton
            // disabled={!newCard}
            onPress={() => handleSubmitNewCard(newCard)}
          >
            Submit
          </SecondarySubmitButton>
        </View>
      </View>
    );
  }
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
