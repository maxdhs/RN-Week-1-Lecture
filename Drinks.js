import React from "react";
import { Text, View, FlatList } from "react-native";

class Drinks extends React.Component {
  state = {
    drinks: [
      { id: 1, name: "Water", description: "no alchohol" },
      { id: 2, name: "Jameson", description: "a drink with whiskey" },
      { id: 3, name: "Sake", description: "a rice wine" }
    ]
  };

  static navigationOptions = {
    title: "Drinks"
  };

  handlePress = drink => {
    this.props.navigation.navigate("DrinkDetails", { drink: drink });
  };

  handleRender = ({ item }) => {
    return <Text onPress={() => this.handlePress(item)}>{item.name}</Text>;
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.drinks}
          renderItem={this.handleRender}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default Drinks;
