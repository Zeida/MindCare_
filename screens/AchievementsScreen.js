import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AchievementComponent from "../components/AchievementComponent";
import AlertModalComponent from "../components/AlertModalComponent";

export default function AchievementsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Puedo conseguir todo lo que me proponga</Text>
      <Image
        style={styles.image}
        source={require("../images/achievements/achievements.png")}
      />
      <Text style={styles.subtext}>Mis insignias:</Text>
      <ScrollView>
        <AlertModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalText={""}
          modalOptionText={""}
        />
        <AchievementComponent
          name="logout"
          size={25}
          color="red"
          borderColor={"black"}
          onPress={() => setModalVisible(true)}
          text={"insignia prueba"}
        />
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
