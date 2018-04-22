import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewDeck from "./NewDeck";
import { addDeck } from "../deck-list/actions";
import { saveDeckTitle } from "../utils/api";

class NewDeckContainer extends React.Component {
  state = {
    title: ""
  };

  handleTitleChange = title => this.setState({ title });

  createDeck = title => {
    const { decks, dispatchCreateDeck, navigation } = this.props;
    if (!title) {
      return;
    }
    if (decks[title.toLowerCase()]) {
      return;
    }
    dispatchCreateDeck(title); // save the deck to the redux store
    saveDeckTitle(title); // save the deck to the local storage
    navigation.navigate("DeckDetail", {
      title
    }); // go to the newly created deck individual view
    this.setState({ title: "" }); // reset title form
  };

  render() {
    const { title } = this.state;
    return (
      <NewDeck
        title={title}
        handleTitleChange={this.handleTitleChange}
        createDeck={this.createDeck}
      />
    );
  }
}

NewDeckContainer.propTypes = {
  decks: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatchCreateDeck: PropTypes.func.isRequired,
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

const mapDispatchToProps = dispatch => ({
  dispatchCreateDeck: title => dispatch(addDeck({ title, cards: [] }))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckContainer);
