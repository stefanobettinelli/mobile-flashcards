import { ADD_DECK, RECEIVE_DECKS, CREATE_CARD } from "./actions";

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK: {
      const newDeck = action.deck;
      return {
        ...state,
        [newDeck.title.toLowerCase()]: { ...newDeck }
      };
    }
    case RECEIVE_DECKS: {
      return {
        ...action.decks
      };
    }
    case CREATE_CARD: {
      const lowerCaseTitle = action.title.toLowerCase();
      return {
        ...state,
        [lowerCaseTitle]: {
          ...state[lowerCaseTitle],
          cards: [...state[lowerCaseTitle].cards, action.card]
        }
      };
    }
    default: {
      return state;
    }
  }
}

export default decks;
