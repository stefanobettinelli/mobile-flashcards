import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { TabNavigator } from "react-navigation";
import DeckListContainer from "./deck-list/DeckListContainer";
import NewDeckContainer from "./new-deck/NewDeckContainer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

const Tabs = TabNavigator({
  Home: {
    screen: DeckListContainer
  },
  NewDeck: {
    screen: NewDeckContainer
  }
});

function App() {
  return (
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
}

export default App;
