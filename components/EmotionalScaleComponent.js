import React from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";
import {
  MaterialCommunityIcons
} from "@expo/vector-icons";

const EmotionalScaleComponent = (icon, size, color, setValue) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={setValue}>
        <MaterialCommunityIcons name={icon} size={size} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  icon: {
    padding: 5,
  },
});
export default EmotionalScaleComponent;
