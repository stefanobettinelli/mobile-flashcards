import React from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";

class QuizContainer extends React.Component {
  static navigationOptions = () => ({ title: "Quiz" });

  state = {
    currentQuizIndexCard: 0,
    score: 0
  };

  nextCard = point => {
    this.setState(({ score, currentQuizIndexCard }) => ({
      score: score + point,
      currentQuizIndexCard: currentQuizIndexCard + 1
    }));
  };

  resetQuiz = () => {
    this.setState({ score: 0, currentQuizIndexCard: 0 });
  };

  goBackToDeck = () => this.props.navigation.goBack();

  render() {
    const { deck } = this.props.navigation.state.params;
    const { currentQuizIndexCard, score } = this.state;
    const card = deck.cards[currentQuizIndexCard];
    const deckSize = deck.cards.length;
    const isQuizOver = deckSize === currentQuizIndexCard;
    return (
      <Quiz
        score={score}
        deckTitle={deck.title}
        card={card || {}}
        nextCard={this.nextCard}
        resetQuiz={this.resetQuiz}
        deckSize={deckSize}
        cardIndex={currentQuizIndexCard}
        isQuizOver={isQuizOver}
        goBackToDeck={this.goBackToDeck}
      />
    );
  }
}

QuizContainer.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  }),
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

QuizContainer.defaultProps = {
  deck: {}
};

export default QuizContainer;
