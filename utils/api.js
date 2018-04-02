import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "MobileFlashCards:decks";

// return all decks with title, questions and answers
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
    decks =>
      decks === null ? "there are no decks at the moment" : JSON.parse(decks)
  );
}

// takes in a single ID and returns the deck associated with that ID (let's assume is the lower cased title)
export function getDeck(id) {}

// takes a title argument and add it to the decks
export function saveDeckTitle(title) {
  const newDeck = {
    [title.toLowerCase()]: {
      title,
      questionsAndAnswers: []
    }
  };

  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(newDeck));
}

// add the 'card' to the deck with title 'title'
export function addCardToDeck(title, card) {}

export function removeDecks() {
  AsyncStorage.removeItem(DECKS_STORAGE_KEY, () =>
    console.log("decks removed")
  );
}
