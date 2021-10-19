import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

const Screen = ({ children, style }) => {
  return (
    <View>
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
