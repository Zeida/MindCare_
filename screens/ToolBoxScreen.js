import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator, Image, SafeAreaView, StyleSheet,
  Text,
  View
} from "react-native";
import { ORANGE } from "../constants/Colors";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

export default function ToolBoxScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthenticatedUserContext);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Mi caja de herramientas</Text>
      <Image style={styles.image} source={require("../images/toolbox.png")} />
      <Text style={styles.subtext}>Lo que me hace bien cuando estoy mal:</Text>
      {isLoading ? (
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
      ) : (
        <Text>EN DESARROLLO</Text>
      )}
    </SafeAreaView>
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
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
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
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  flatlist: {
    marginBottom: 10,
  },
});
