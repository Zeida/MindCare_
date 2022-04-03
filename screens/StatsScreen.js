import React, { useState } from "react";
import { Text, View, StyleSheet, Switch, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { daydata, weekdata } from "../data/StatsData";
import { PieChartComponent, ButtonComponent } from "../components/ComponentsIndex";

export default function StatsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Día</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#fff", true: "#192959" }}
            thumbColor={isEnabled ? "#F27C38" : "#777777"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.switchText}>Semana</Text>
          <ButtonComponent
            title="Mi diario emocional"
            backgroundColor="#192959"
            onPress={() => navigation.navigate("Diario emocional")}
            width="50%"
            containerStyle={{
              marginLeft: 35,
            }}
          />
        </View>

        <Text style={styles.text}>Mis estadísticas de cuidado</Text>
        <Image style={styles.image} source={require("../images/stats.png")} />
        {isEnabled ? (
          <View>
            <Text style={styles.subtext}>Mis retos cumplidos esta semana:</Text>
            <PieChartComponent data={weekdata} />
          </View>
        ) : (
          <View>
            <Text style={styles.subtext}>Mis retos cumplidos hoy:</Text>
            <PieChartComponent data={daydata} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    textAlign: "center",
  },
  subtext: {
    fontSize: 15,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    margin: 5,
    marginLeft: 20,
    textAlign: "left",
  },
  switchContainer: {
    margin: 10,
    marginTop: 50,
    marginLeft: 20,
    flexDirection: "row",
  },
  switchText: {
    fontSize: 15,
    marginTop: 18,
    paddingRight: 2,
    fontWeight: "bold",
  },
  switch: {
    paddingLeft: 0,
  },
  image: {
    width: 300,
    height: 250,
    marginLeft: 30,
    marginRight: 30,
    alignSelf:'center'
  },
});
