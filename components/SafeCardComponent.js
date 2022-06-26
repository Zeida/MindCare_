import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MIDDLE_GREY, SOFT_BLUE } from "../constants/Colors";

const SafeCardComponent = ({ safeCard }) => {
  return (
    <View style={styles.safeCardContainer}>
      <Text style={styles.safeCardTitle}>{safeCard.title}</Text>
      <Text style={styles.safeCardBody}>{safeCard.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeCardContainer: {
    backgroundColor: SOFT_BLUE,
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: MIDDLE_GREY,
    borderRadius: 10,
    padding: 10,
  },
  safeCardTitle: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  safeCardBody: {
    alignSelf: "center",
    color: "black",
    fontSize: 14,
  },
  safeCardDate: {
    alignSelf: "flex-end",
    color: MIDDLE_GREY,
    fontSize: 10,
  },
});

export default SafeCardComponent;
