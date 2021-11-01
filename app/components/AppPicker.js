import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { getCountryData, listCountry } from "../redux/actions/covidActions";

const AppPicker = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [countryName, setCountryName] = useState();

  const countryList = useSelector((state) => state.countryList);
  const { loading, countries } = countryList;

  useEffect(() => {
    dispatch(listCountry());
  }, [dispatch]);

  const handleSelectCountry = (item) => {
    setCountryName(item.country);
    let countryCode = item.countryInfo.iso3;
    dispatch(getCountryData(countryCode));
    setModalVisible(false);
  };
  const handleWorldwide = () => {
    setCountryName("Worldwide");
    let countryCode = "worldwide";
    dispatch(getCountryData(countryCode));
    setModalVisible(false);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {countryName ? countryName : "WorldWide"}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <Button title="close" onPress={() => setModalVisible(false)} />
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#f4f4f4"
          onPress={handleWorldwide}
        >
          <Text style={styles.list}>Worldwide</Text>
        </TouchableHighlight>
        <FlatList
          data={countries}
          keyExtractor={(country) => country.country}
          renderItem={({ item }) => (
            <>
              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="#f4f4f4"
                onPress={() => handleSelectCountry(item)}
              >
                <Text style={styles.list}>{item.country}</Text>
              </TouchableHighlight>
            </>
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    borderColor: "#333",
    borderWidth: 1,
    width: "50%",
    borderRadius: 5,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  list: {
    padding: 20,
    borderBottomColor: "#333",
    borderWidth: 0.5,
    fontSize: 18,
    textAlign: "center",
  },
});
