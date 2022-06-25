import { useState } from "react";
import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  ButtonComponent, PieChartComponent
} from "../components/ComponentsIndex";
import { daydata, weekdata } from "../data/StatsData";

export default function StatsScreen(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
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
          onPress={() => props.navigation.navigate("Diario emocional")}
          width="50%"
          containerStyle={{
            marginLeft: 35,
          }}
        />
      </View>
      <ScrollView style={styles.scrollview}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
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
    alignSelf: "center",
  },
});
