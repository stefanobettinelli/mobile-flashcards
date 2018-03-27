import React from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";

function RenderDeck({ item }) {
  const itemWithKey = { ...item };
  itemWithKey.key = item.id;
  return <Text> {itemWithKey.title} </Text>;
}

function DeckList({ decks }) {
  return (
    <View>
      <FlatList data={decks} renderItem={RenderDeck} />
    </View>
  );
}

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired
};

RenderDeck.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DeckList;
