import React from "react";
import { Text, View } from "react-native";
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
    const { decks, dispatchCreateDeck } = this.props;
    if (!title) {
      console.log("title is empty");
      return;
    }
    if (decks[title.toLowerCase()]) {
      console.log("deck title already taken");
      return;
    }
    dispatchCreateDeck(title); // save the deck to the redux store
    saveDeckTitle(title); // save the deck to the local storage
  };

  render() {
    const { title } = this.state;
    return (
      <View>
        <Text>What is the title of your deck?</Text>
        <NewDeck
          title={title}
          handleTitleChange={this.handleTitleChange}
          createDeck={this.createDeck}
        />
      </View>
    );
  }
}

NewDeckContainer.propTypes = {
  decks: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatchCreateDeck: PropTypes.func.isRequired
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
