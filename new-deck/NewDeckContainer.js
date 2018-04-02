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
    const { dispatchCreateDeck } = this.props;
    dispatchCreateDeck(title);
    saveDeckTitle(title);
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
  dispatchCreateDeck: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  dispatchCreateDeck: title => dispatch(addDeck({ title }))
});

export default connect(null, mapDispatchToProps)(NewDeckContainer);
