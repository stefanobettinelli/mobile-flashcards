export const ADD_DECK = "ADD_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const CREATE_CARD = "CREATE_CARD";

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

// title is the deck's title
export function createCard(title, card) {
  return {
    type: CREATE_CARD,
    title,
    card
  };
}
