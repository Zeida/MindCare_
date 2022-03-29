import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { IconButtonComponent } from "../components/ComponentsIndex";
import app from "../config/firebase";
import ChallengeScopesData from "../data/ChallengeScopesData";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
const auth = app.auth();

export default function HomeScreen(props) {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark-content" />
      <View style={styles.row}>
        <Text style={styles.title}>Hola {user.displayName}! </Text>

        <IconButtonComponent
          name="logout"
          size={24}
          color="red"
          onPress={handleSignOut}
        />
      </View>
      <Text style={styles.text}>¿Qué área te gustaría mejorar?</Text>
      {ChallengeScopesData.map((challengeScope, index) => {
        return (
          <View key={index}>
            <TouchableRipple
              onPress={() => {
                props.navigation.navigate("Todolist", {
                  title: challengeScope.title,
                });
              }}
              key={index}
            >
              <Image
                style={styles.image}
                source={challengeScope.image}
                key={index}
              />
            </TouchableRipple>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 50,
  },
  text: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    margin:10
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  image: {
    width: 250,
    height: 155,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
});
