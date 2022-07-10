import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Switch,
  Text,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  getCompletedChallenges,
  getDayCompletedChallenges
} from "../api/FirebaseMethods";
import {
  ButtonComponent,
  PieChartComponent
} from "../components/ComponentsIndex";
import { ORANGE } from "../constants/Colors";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

export default function StatsScreen(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { user } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [number, setNumber] = useState(0);
  const [dayNumber, setDayNumber] = useState(0);
  const [dayCompletedChallenge, setDayCompletedChallenges] = useState([]);

  const updateScreen = () => {
    getCompletedChallenges(
      user,
      setCompletedChallenges,
      setIsLoading,
      setNumber
    );
    getDayCompletedChallenges(
      user,
      setDayCompletedChallenges,
      setIsLoading,
      setDayNumber
    );
  };

  useFocusEffect(
    useCallback(() => {
      updateScreen();
    }, [])
  );

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
        <Text style={styles.switchText}>Todos</Text>
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

        <View>
          {isEnabled ? (
            <View>
              <Text style={styles.subtext}>Todos mis retos cumplidos:</Text>
              {isLoading ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    margin: 80,
                  }}
                >
                  <ActivityIndicator size="large" color={ORANGE} />
                </View>
              ) : (
                <PieChartComponent data={completedChallenges} />
              )}
            </View>
          ) : (
            <View>
              <Text style={styles.subtext}>Mis retos cumplidos hoy:</Text>
              {isLoading ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    margin: 80,
                  }}
                >
                  <ActivityIndicator size="large" color={ORANGE} />
                </View>
              ) : (
                <PieChartComponent data={dayCompletedChallenge} />
              )}
            </View>
          )}
        </View>
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
    fontSize: 20,
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
    marginLeft: 40,
    flexDirection: "row",
  },
  switchText: {
    fontSize: 15,
    marginTop: 18,
    paddingRight: 15,
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
