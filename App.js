import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StatusBar, View } from "react-native";
import { Constants } from "expo";
import { StackNavigator, TabNavigator } from "react-navigation";
import DeckListContainer from "./deck-list/DeckListContainer";
import NewDeckContainer from "./new-deck/NewDeckContainer";
import DeckDetailContainer from "./deck-detail/DeckDetailContainer";
import AddCardContainer from "./add-card/AddCardContainer";
import rootReducer from "./rootReducer";
import { purple } from "./utils/colors";
import QuizContainer from "./start-quiz/QuizContainer";

const store = createStore(rootReducer);

const Tabs = TabNavigator(
  {
    Decks: {
      screen: DeckListContainer
    },
    NewDeck: {
      screen: NewDeckContainer
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const MainNavigation = StackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DeckDetail: {
      screen: DeckDetailContainer
    },
    AddCard: {
      screen: AddCardContainer
    },
    Quiz: {
      screen: QuizContainer
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        // height: 56,
        paddingTop: 10,
        paddingBottom: 10
      }
    }
  }
);

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
