import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import DeckList from "./DeckList";
import { getDecks } from "../utils/api";
import { receiveDecks } from "./actions";

class DeckListContainer extends Component {
  componentDidMount() {
    const { loadDecks } = this.props;
    loadDecks();
  }

  render() {
    const { decks } = this.props;
    return (
      <DeckList decks={decks} {...this.props} /> // transferring props
    );
  }
}

function mapStateToProps({ decks }) {
  const decksWithKeys = Object.keys(decks).map(deckId => ({
    key: deckId,
    ...decks[deckId]
  }));
  decksWithKeys.sort((deckA, deckB) =>
    deckA.title.toLowerCase().localeCompare(deckB.title.toLowerCase())
  );
  return { decks: decksWithKeys };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDecks: () => {
      getDecks().then(decks => dispatch(receiveDecks(decks)));
    }
  };
}

DeckListContainer.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadDecks: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListContainer);
