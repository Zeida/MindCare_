import { StatusBar } from "expo-status-bar";
import React, { useContext, useState, useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { IconButtonComponent } from "../components/ComponentsIndex";
import ChallengeScopesData from "../data/ChallengeScopesData";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
import { loggingOut } from "../api/FirebaseMethods";
import { useFocusEffect } from "@react-navigation/native";

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
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    margin: 10,
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
    marginBottom: 2,
  },
});
