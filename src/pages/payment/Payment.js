import React from 'react';
import { View, Text } from "react-native";
import Header from "../Header";

const Payment = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} component="Payment" />
      <Text>Payment Page</Text>
    </View>
  )
}

export default Payment;
