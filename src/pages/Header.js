import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Header = ({ component, navigation }) => {
  return (
    <View>
      {component === "Home" ||
      component === "Discover" ||
      component === "Popular" ||
      component === "Profile" ? (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome color="black" name="bars" size={25} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome color="black" name="arrow-left" size={25} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
        <MaterialCommunityIcons
          name="message-processing-outline"
          color="black"
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    height: 50,
    backgroundColor: "#bad759",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  }
});
