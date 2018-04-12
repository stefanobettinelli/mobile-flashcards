import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DeckDetail from "./DeckDetail";
import { addCardToDeck } from "../utils/api";
import { createCard } from "../deck-list/actions";

class DeckDetailContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title
    };
  };

  createCard = card => {
    const { title } = this.props.navigation.state.params;
    const { navigation } = this.props;
    navigation.navigate("AddCard", {
      title
    });
  };

  startQuiz = () => {
    console.log("start quiz");
  };

  render() {
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;
    const deck = decks[title.toLowerCase()];
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

function mapDispatchToProps(dispatch) {
  return {
    dispatchCreateCard: (title, card) =>
      addCardToDeck(title, card).then(() => dispatch(createCard(title, card)))
  };
}

DeckDetailContainer.propTypes = {
  decks: PropTypes.objectOf(PropTypes.object).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  dispatchCreateCard: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  DeckDetailContainer
);
