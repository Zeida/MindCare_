import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import EmotionalScaleComponent from "../components/EmotionalScaleComponent";
import PixelGraphComponent from "../components/PixelGraphComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EmotionalDiaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoy me siento:</Text>
      <Text style={styles.text}>Mi diario emocional</Text>
      <PixelGraphComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 5,
    textAlign: "center",
  },
});
