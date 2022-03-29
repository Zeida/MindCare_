import React from "react";
import {
  Image, StyleSheet, View, Text
} from "react-native";


export default function AboutUsCardsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Quién está detrás de esta app?</Text>
      <Image
        style={styles.image}
        source={require("../images/team.png")}
      />
      <Text style={styles.subtext}>Un equipo multidisplinar concienciado con la importancia de la salud mental.</Text>
      <Text style={styles.subtextleft}>En el proyecto han trabajado:</Text>
      <Text style={styles.subtextteammembers}>Crisamer Rivero Santana (Psicóloga)</Text>
      <Text style={styles.subtextteammembers}>Zeida de los R. Rguez. Mendoza (Desarrolladora)</Text>
      <Text style={styles.subtextteammembers}>Ana Maria Plácido (Tutora del proyecto)</Text>
      <Text style={styles.subtextteammembers}>Arminda Castellano Quesada (Ilustradora)</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    marginLeft: 40,
    marginRight: 40,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
  },
  subtext: {
    fontSize: 20,
    lineHeight: 25,
    color: "black",
    margin: 5,
    marginLeft: 20,
    textAlign: "center",
  },
  subtextleft:{
    fontSize: 15,
    lineHeight: 30,
    color: "black",
    marginLeft: 20,
    textAlign: "left",
  },
  subtextteammembers:{
    fontSize: 15,
    lineHeight: 30,
    color: "black",
    marginLeft: 20,
    textAlign: "left",
    fontWeight:'bold'
  }
});
