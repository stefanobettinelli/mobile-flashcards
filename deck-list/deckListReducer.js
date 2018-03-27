import { ADD_DECK } from "./actions";

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK: {
      const newDeck = action.deck;
      return {
        ...state,
        [newDeck.title]: { ...newDeck }
      };
    }
    default: {
      return state;
    }
  }
}

export default decks;
