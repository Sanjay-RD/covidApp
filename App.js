import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./app/components/Card";
import Header from "./app/components/Header";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.cardContainer}>
          <Card
            title="Cases"
            today="23"
            total="125"
            textColor="#0667db"
            bgColor="#b2cceb"
          />
          <Card
            title="Recovered"
            today="134"
            total="219"
            textColor="#488904"
            bgColor="#b7c7a780"
          />
          <Card
            title="Deaths"
            today="23"
            total="19"
            textColor="red"
            bgColor="#FDE6EC"
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
});
