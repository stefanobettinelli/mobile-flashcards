import React, { Component } from "react";
import { View, Text } from "react-native";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title
    };
  };

  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default DeckDetail;
