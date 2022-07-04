import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";

const AchievementComponent = ({
  color,
  size,
  name,
  borderColor,
  text,
  modalText,
  modalTitle,
}) => {
  return (
    <Pressable
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor: "transparent",
            },
          ];
        }

        return [
          styles.base,
          {
            opacity: 1,
            backgroundColor: "transparent",
            borderColor: borderColor,
          },
        ];
      }}
      onPress={() => Alert.alert(modalTitle, modalText)}
    >
      <AntDesign name={name} size={size} color={color} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    margin:5,
    borderWidth: 1,
    borderRadius: 50,
  },
  text: {
    marginHorizontal: 5,
    fontSize: 20,
  },
});

export default AchievementComponent;
