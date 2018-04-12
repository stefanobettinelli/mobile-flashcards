import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddCard from "./AddCard";
import { addCardToDeck } from "../utils/api";
import { createCard } from "../deck-list/actions";

class AddCardContainer extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  handleQuestionChange = question => this.setState({ question });

  handleAnswerChange = answer => this.setState({ answer });

  handleSubmitNewCard = card => {
    const { title } = this.props.navigation.state.params;
    const { dispatchCreateCard } = this.props;
    dispatchCreateCard(title, card);
  };

  render() {
    const { title } = this.props.navigation.state.params;
    const { dispatchCreateCard } = this.props;
    const { question, answer } = this.state;
    return (
      <AddCard
        deckTitle={title}
        createCard={dispatchCreateCard}
        question={question}
        answer={answer}
        handleQuestionChange={this.handleQuestionChange}
        handleAnswerChange={this.handleAnswerChange}
        handleSubmitNewCard={this.handleSubmitNewCard}
      />
    );
  }
}

AddCardContainer.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  dispatchCreateCard: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchCreateCard: (title, card) =>
      addCardToDeck(title, card).then(() => dispatch(createCard(title, card)))
  };
}

export default connect(null, mapDispatchToProps)(AddCardContainer);
