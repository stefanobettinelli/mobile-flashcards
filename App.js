import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { View, StatusBar } from "react-native";
import { Constants } from "expo";
import { StackNavigator, TabNavigator } from "react-navigation";
import DeckListContainer from "./deck-list/DeckListContainer";
import NewDeckContainer from "./new-deck/NewDeckContainer";
import DeckDetailContainer from "./deck-detail/DeckDetailContainer";
import AddCardContainer from "./add-card/AddCardContainer";
import rootReducer from "./rootReducer";
import { purple } from "./utils/colors";

const store = createStore(rootReducer);

const Tabs = TabNavigator({
  Decks: {
    screen: DeckListContainer
  },
  NewDeck: {
    screen: NewDeckContainer
  }
});

const MainNavigation = StackNavigator({
  Home: {
    screen: Tabs,
    headerMode: "none",
    header: null,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetailContainer
  },
  AddCard: {
    screen: AddCardContainer
  }
});

function FlashCardsStatusBar(props) {
  const backgroundColor = purple;
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar barStyle="light-content" />
        <MainNavigation />
      </View>
    </Provider>
  );
}

export default App;
