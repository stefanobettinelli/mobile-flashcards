import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button } from "react-native";

function DeckDetail({ deck, createCard, startQuiz }) {
  return (
    <View>
      <Text>{deck ? deck.title : ""}</Text>
      <Text>cards {deck ? deck.cards.length : 0}</Text>
      <Button title="Add Card" onPress={createCard} />
      <Button title="Start Quiz" onPress={startQuiz} />
    </View>
  );
}

DeckDetail.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  }),
  createCard: PropTypes.func.isRequired,
  startQuiz: PropTypes.func.isRequired
};

DeckDetail.defaultProps = {
  deck: undefined
};

export default DeckDetail;
