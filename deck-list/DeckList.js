import React from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import PropTypes from "prop-types";
import { removeDecks } from "../utils/api";

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
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

function DeckList({ decks, navigation }) {
  return (
    <View>
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
