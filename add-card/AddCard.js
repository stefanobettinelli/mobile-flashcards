import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import PropTypes from "prop-types";

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
      <View>
        <Text>{deckTitle}</Text>
        <TextInput value={question} onChangeText={handleQuestionChange} />
        <TextInput value={answer} onChangeText={handleAnswerChange} />
        <Button
          disabled={!newCard}
          title="Submit"
          onPress={() => handleSubmitNewCard(newCard)}
        />
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
