import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DeckDetail from "./DeckDetail";

class DeckDetailContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title
    };
  };

  getDeck = () => {
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;
    const deck = decks[title.toLowerCase()];
    return deck;
  };

  createCard = () => {
    const { title } = this.props.navigation.state.params;
    const { navigation } = this.props;
    navigation.navigate("AddCard", {
      title
    });
  };

  startQuiz = () => {
    const deck = this.getDeck();
    const { navigation } = this.props;
    navigation.navigate("Quiz", { deck });
  };

  render() {
    const deck = this.getDeck();
    return (
      <DeckDetail
        deck={deck}
        createCard={this.createCard}
        startQuiz={this.startQuiz}
      />
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

DeckDetailContainer.propTypes = {
  decks: PropTypes.objectOf(PropTypes.object).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(mapStateToProps)(DeckDetailContainer);
