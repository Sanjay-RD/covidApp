import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "./AppPicker";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Covid-19 Tracker</Text>
      <AppPicker />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
