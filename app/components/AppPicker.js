import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>WorldWide</Text>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <Button title="close" onPress={() => setModalVisible(false)} />
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
});
