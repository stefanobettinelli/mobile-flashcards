import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "MobileFlashCards:decks";

// return all decks with title, questions and answers
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
    decks => (decks === null ? {} : JSON.parse(decks))
  );
}

// takes in a single ID and returns the deck associated with that ID (let's assume is the lower cased title)
export function getDeck(title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks => (decks === null ? {} : JSON.parse(decks)))
    .then(decks => decks[title.toLowerCase()]);
}

// takes a title argument and add it to the decks
export function saveDeckTitle(title) {
  const newDeck = {
    [title.toLowerCase()]: {
      title,
      cards: []
    }
  };

  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(newDeck));
}

// add the 'card' to the deck with title 'title'
export function addCardToDeck(title, card) {
  return getDeck(title)
    .then(deck => ({
      ...deck,
      cards: [...deck.cards, card]
    }))
    .then(modifiedDeck =>
      AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({ [title.toLowerCase()]: modifiedDeck })
      )
    );
}

export function removeDecks() {
  AsyncStorage.removeItem(DECKS_STORAGE_KEY, () =>
    console.log("decks removed")
  );
}
