import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import EmotionalScaleComponent from "../components/EmotionalScaleComponent";
import PixelGraphComponent from "../components/PixelGraphComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeelingIconData from "../data/FeelingIconData";
const screenWidth = Dimensions.get("window").width;
export default function EmotionalDiaryScreen({ navigation }) {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoy me siento:</Text>
      <View style={styles.emotionalScaleContainer}>
        {FeelingIconData.map((feeling, index) => {
          return (

            <Pressable key={index} style={styles.icon} onPress={setValue}>
              <MaterialCommunityIcons key={index} name={feeling.icon} size={40} color={feeling.color} />
            </Pressable>

          );
        })}
      </View>
      <Text style={styles.text}>Mi diario emocional</Text>
      <View style={styles.pixelgraph}>
        <PixelGraphComponent />
      </View>
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
  emotionalScaleContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  icon: {
    padding: 10
  },
  pixelgraph: {

    alignSelf: 'center',
    alignItems:'center',
    marginLeft:50,
    marginTop:10
    
  }
});
