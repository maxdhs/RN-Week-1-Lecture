import React from "react";
import { Text } from "react-native";

export const DrinkDetails = props => {
  const drink = props.navigation.state.params.drink;
  return <Text>{drink.description}</Text>;
};
