import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import numeral from "numeral";

const Card = ({ title, today, total, textColor, bgColor }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.9}
      underlayColor={textColor}
      onPress={() => console.log("Pressed")}
      style={{ borderRadius: 10 }}
    >
      <View
        style={[
          styles.cardBody,
          { backgroundColor: bgColor, borderColor: textColor, borderWidth: 2 },
        ]}
      >
        <View style={styles.container}>
          <Text style={{ color: textColor }}>{title}</Text>
          <View style={styles.subContainer}>
            <Text style={[styles.subTitle, { color: textColor }]}>
              + {numeral(today).format("0.0a")} Today
            </Text>
            <Text style={[styles.subTitle, { color: textColor }]}>
              + {numeral(total).format("0.0a")} Total
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardBody: {
    // borderWidth: 2,
    // borderColor: "red",
    // margin: 10,
    width: 100,
    height: 80,
    borderRadius: 10,
    // backgroundColor: "#FDE6EC",
  },
  container: {
    padding: 10,
  },
  subTitle: {
    fontSize: 10,
  },
  subContainer: {
    paddingLeft: 8,
    paddingTop: 5,
  },
});

Card.defaultProps = {
  title: "cases",
  today: "000",
  total: "000",
  textColor: "red",
  bgColor: "#FDE6EC",
};
