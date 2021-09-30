import React from 'react';
import { View, Text } from "react-native";
import Header from "../Header";

const Discover = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} component="Discover" />
      <Text>Discover Page</Text>
    </View>
  )
}

export default Discover;
