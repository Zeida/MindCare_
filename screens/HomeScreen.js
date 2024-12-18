import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { loggingOut } from "../api/FirebaseMethods";
import { IconButtonComponent } from "../components/ComponentsIndex";
import ChallengeScopesData from "../data/ChallengeScopesData";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

export default function HomeScreen(props) {
  const { user } = useContext(AuthenticatedUserContext);
  const [displayName, setDisplayName] = useState("");
  const handleLogginOut = async () => {
    loggingOut();
  };

  useFocusEffect(
    React.useCallback(() => {
      setDisplayName(user.displayName);
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark-content" />
      <View style={styles.row}>
        <Text style={styles.title}>¡Hola! </Text>
        <IconButtonComponent
          name="logout"
          size={24}
          color="red"
          onPress={handleLogginOut}
        />
      </View>
      <Text style={styles.text}>¿Qué área te gustaría mejorar?</Text>
      {ChallengeScopesData.map((challengeScope, index) => {
        return (
          <TouchableRipple
            onPress={() => {
              props.navigation.navigate("Todolist", {
                title: challengeScope.title,
                scope: challengeScope.scope,
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
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    margin: 10,
    padding: 30,
    paddingTop:20
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  image: {
    width: 300,
    height: 180,
    alignSelf: "center",
    padding:5,
    margin:10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
});
