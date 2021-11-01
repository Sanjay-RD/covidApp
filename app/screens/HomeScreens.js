import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Screen from "../components/Screen";

import { useSelector, useDispatch } from "react-redux";
import { getCountryData } from "../redux/actions/covidActions";

const HomeScreens = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countryData);
  const { country } = countryData;
  console.log(country);
  useEffect(() => {
    dispatch(getCountryData("worldwide"));
  }, [dispatch]);
  return (
    <Screen style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.cardContainer}>
          <Card
            title="Cases"
            today={country.todayCases}
            total={country.cases}
            textColor="#0667db"
            bgColor="#b2cceb"
          />
          <Card
            title="Recovered"
            today={country.todayRecovered}
            total={country.recovered}
            textColor="#488904"
            bgColor="#b7c7a780"
          />
          <Card
            title="Deaths"
            today={country.todayDeaths}
            total={country.deaths}
            textColor="red"
            bgColor="#FDE6EC"
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreens;

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
