import React from 'react';
import { View, Text } from "react-native";
import Header from "../Header";

const Ratings = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} component="Ratings" />
      <Text>Ratings Page</Text>
    </View>
  )
}

export default Ratings;
