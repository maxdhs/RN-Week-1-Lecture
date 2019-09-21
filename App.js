import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Drinks from "./Drinks";
import { DrinkDetails } from "./DrinkDetails";
import { createStackNavigator } from "react-navigation";

const DrinkStackNavigator = createStackNavigator({
  Drinks,
  DrinkDetails
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrinkStackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

export default App;
