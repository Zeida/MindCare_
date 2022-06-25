import Checkbox from "expo-checkbox";
import React from "react";
import { Pressable, StyleSheet, Text, Alert} from "react-native";

export default function ChallengeComponent(props) {
  return (
    <Pressable
      style={styles.view}
      onLongPress={() => props.deleteItem(props.index)}
      onPress={() => Alert.alert(props.data.title, props.data.description)}
    >
      <Checkbox
        style={styles.checkbox}
        value={props.data.isSelected}
        onValueChange={(value) => props.setIsSelected(props.index, value)}
      />
      <Text
        style={{
          ...styles.text,
          textDecorationLine: props.data.isSelected ? "line-through" : "none",
        }}
      >
        {props.data.challenge}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    elevation: 5,
    shadowColor: "#E9E9E9",
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 19,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
    marginBottom: 15,
    marginLeft: 20,
  },
  text: {
    fontSize: 15,
    color: "#000000",
    paddingRight:40,
  },
  checkbox: {
    height: 26,
    width: 26,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginRight: 15,
  },
});
