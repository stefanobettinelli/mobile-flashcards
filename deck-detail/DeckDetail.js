import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import {
  bgColor,
  darkGray,
  disabledGray,
  disabledWhite,
  lightGray
} from "../utils/colors";
import {
  PrimarySubmitButton,
  SecondarySubmitButton
} from "../commons/TextButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 70,
    alignItems: "center",
    backgroundColor: bgColor
  },
  deckTitle: {
    fontSize: 34,
    color: darkGray
  },
  cardNo: {
    fontSize: 26,
    color: lightGray
  },
  btn: {
    flex: 1,
    justifyContent: "flex-end"
  },
  disabled: {
    color: disabledWhite,
    backgroundColor: disabledGray
  },
  enabled: {
    backgroundColor: darkGray
  }
});

function DeckDetail({ deck, createCard, startQuiz }) {
  return (
    <View style={styles.container}>
      <Text style={styles.deckTitle}>{deck ? deck.title : ""}</Text>
      <Text style={styles.cardNo}>cards {deck ? deck.cards.length : 0}</Text>
      <View style={styles.btn}>
        <PrimarySubmitButton onPress={createCard} style={{ marginBottom: 10 }}>
          Add Card
        </PrimarySubmitButton>
        <SecondarySubmitButton
          onPress={startQuiz}
          disabled={deck.cards.length <= 0}
          style={deck.cards.length <= 0 ? styles.disabled : styles.enabled}
        >
          Start Quiz
        </SecondarySubmitButton>
      </View>
      {/* <Text>{JSON.stringify(deck)}</Text> */}
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
