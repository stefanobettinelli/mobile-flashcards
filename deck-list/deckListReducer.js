import { ADD_DECK, RECEIVE_DECKS } from "./actions";

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK: {
      const newDeck = action.deck;
      return {
        ...state,
        [newDeck.title]: { ...newDeck }
      };
    }
    case RECEIVE_DECKS: {
      return {
        ...action.decks
      };
    }
    default: {
      return state;
    }
  }
}

export default decks;
