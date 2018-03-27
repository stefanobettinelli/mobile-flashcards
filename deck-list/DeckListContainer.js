import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import DeckList from "./DeckList";

function DeckListContainer(props) {
  const { decks } = props;
  return <DeckList decks={decks} />;
}

function mapStateToProps({ decks }) {
  const decksWithKeys = Object.keys(decks).map(deckId => ({
    key: deckId,
    ...decks[deckId]
  }));
  return { decks: decksWithKeys };
}

DeckListContainer.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(DeckListContainer);
