import React from "react";
import PropTypes from "prop-types";
import FlipCard from "react-native-flip-card";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { back, bgColor, darkGray, face, lightGray, red } from "../utils/colors";
import {
  CorrectSubmitButton,
  IncorrectSubmitButton,
  PrimarySubmitButton,
  SecondarySubmitButton
} from "../commons/TextButton";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  containerQuizOver: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: bgColor
  },
  quizOverText: {
    textAlign: "center",
    fontSize: 30,
    color: darkGray,
    marginBottom: 50
  },
  face: {
    flex: 1,
    padding: 20,
    width: "100%",
    backgroundColor: face,
    justifyContent: "center",
    alignItems: "center"
  },
  back: {
    flex: 1,
    padding: 20,
    backgroundColor: back,
    justifyContent: "center",
    alignItems: "center"
  },
  qa: {
    textAlign: "center",
    fontSize: 34,
    color: darkGray,
    marginBottom: 50
  },
  viewQA: {
    fontSize: 26,
    color: red
  },
  cardNo: {
    fontSize: 26,
    color: lightGray
  },
  btn: {
    flex: 1,
    justifyContent: "flex-end"
  }
});

class Quiz extends React.Component {
  state = {
    flip: false
  };

  // flip action depends on prev State
  handleFlip = () => this.setState(({ flip }) => ({ flip: !flip }));

  render() {
    const {
      score,
      card,
      nextCard,
      resetQuiz,
      deckSize,
      cardIndex,
      isQuizOver,
      goBackToDeck
    } = this.props;
    const { flip } = this.state;
    const cardNo = cardIndex + 1;

    if (isQuizOver) clearLocalNotification().then(setLocalNotification);

    return isQuizOver ? (
      <View style={styles.containerQuizOver}>
        <Text style={styles.quizOverText}>
          {score} Correct answers out of {deckSize}
        </Text>
        <PrimarySubmitButton
          onPress={resetQuiz}
          style={{ fontSize: 24, marginBottom: 10 }}
        >
          Restart Quiz
        </PrimarySubmitButton>
        <SecondarySubmitButton onPress={goBackToDeck} style={{ fontSize: 24 }}>
          Back to Deck
        </SecondarySubmitButton>
      </View>
    ) : (
      <View style={styles.container}>
        <FlipCard
          flip={flip}
          friction={6}
          perspective={1000}
          flipHorizontal
          flipVertical={false}
          clickable={false}
          style={{ width: "100%" }}
        >
          {/* Face Side */}
          <View style={styles.face}>
            <Text style={styles.cardNo}>{`${cardNo}/${deckSize}`}</Text>
            <Text style={styles.qa}>{card.question}</Text>
            <TouchableOpacity onPress={this.handleFlip}>
              <Text style={styles.viewQA}>View Answer</Text>
            </TouchableOpacity>
            <View style={styles.btn}>
              <CorrectSubmitButton
                onPress={() => nextCard(1)}
                style={{ marginBottom: 10 }}
              >
                Correct
              </CorrectSubmitButton>
              <IncorrectSubmitButton onPress={() => nextCard(0)}>
                Incorrect
              </IncorrectSubmitButton>
            </View>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
            <Text style={styles.cardNo}>{`${cardNo}/${deckSize}`}</Text>
            <Text style={styles.qa}>{card.answer}</Text>
            <TouchableOpacity onPress={this.handleFlip}>
              <Text style={styles.viewQA}>View Question</Text>
            </TouchableOpacity>
          </View>
        </FlipCard>
      </View>
    );
  }
}

Quiz.propTypes = {
  score: PropTypes.number.isRequired,
  card: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string
  }).isRequired,
  nextCard: PropTypes.func.isRequired,
  goBackToDeck: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  deckSize: PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired,
  isQuizOver: PropTypes.bool.isRequired
};

export default Quiz;
