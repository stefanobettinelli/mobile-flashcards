import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from "prop-types";
import { bgColor, darkGray, lightGray, white } from "../utils/colors";
import { removeDecks } from "../utils/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    padding: 20,
    backgroundColor: bgColor
  },
  deck: {
    fontSize: 26,
    color: darkGray,
    textAlign: "center",
    backgroundColor: white,
    height: 100,
    padding: 20,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: darkGray
  },
  deckCardNo: {
    color: lightGray
  }
});

function RenderDeck({ item, navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DeckDetail", {
            title: item.title
          })
        }
      >
        <Text style={styles.deck}>
          {item.title}
          <Text style={styles.deckCardNo}>
            {`\n${item.cards.length} Cards`}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function DeckList({ decks, navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => RenderDeck({ item, navigation })}
        ListEmptyComponent={<Text>No decks at the moment</Text>}
        ListFooterComponent={
          <Button title="Delete Decks" onPress={() => removeDecks()} />
        }
      />
    </View>
  );
}

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

RenderDeck.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default DeckList;
