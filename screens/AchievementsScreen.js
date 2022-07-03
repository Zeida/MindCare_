import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getAchievements } from "../api/FirebaseMethods";
import AchievementComponent from "../components/AchievementComponent";
import { ORANGE } from "../constants/Colors";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
export default function AchievementsScreen({ navigation }) {
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthenticatedUserContext);
  useEffect(() => {
    getAchievements(setAchievements, setIsLoading, user);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <ActivityIndicator size="large" color={ORANGE} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Puedo conseguir todo lo que me proponga</Text>
      <Image
        style={styles.image}
        source={require("../images/achievements/achievements.png")}
      />
      <Text style={styles.subtext}>Mis insignias:</Text>
      <ScrollView>
        {achievements.map((achievement) => {
          return (
            <AchievementComponent
              key={achievement.id}
              color={achievement.color}
              size={25}
              name={achievement.icon}
              borderColor={"black"}
              text={achievement.name}
              modalText={achievement.modalText}
              modalTitle={achievement.modalTitle}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 50,
    margin: 10,
    marginHorizontal: 10,
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
  image: {
    width: 300,
    height: 250,
    alignSelf: "center",
  },
});
