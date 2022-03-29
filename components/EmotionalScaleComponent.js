import React from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";
import {
  Entypo, Ionicons, FontAwesome5
} from "@expo/vector-icons";

const EmotionalScaleComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={console.log("hello")}>
        <FontAwesome5 name="sad-cry" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.icon} onPress={() => { }}>
        <Entypo name="emoji-sad" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.icon} onPress={() => { }}>
        <Entypo name="emoji-neutral" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.icon} onPress={() => { }}>
        <Entypo name="emoji-happy" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.icon} onPress={() => { }}>
        <Ionicons name="happy-outline" size={24} color="black" />
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
