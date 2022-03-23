import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button as RNButton } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonComponent } from "../components/ComponentsIndex";
import Firebase from "../config/firebase";
const auth = Firebase.auth();
export default function WelcomeScreen({ navigation }) {
  const onLoginAnonymously = async () => {
    auth
      .signInAnonymously()
      .then(() => {
        console.log("User signed in anonymously");
      })
      .catch((error) => {
        if (error.code === "auth/operation-not-allowed") {
          console.log("Enable anonymous in your firebase console.");
        }

        console.error(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../images/background.png")}
        style={styles.background}
      >
        <View style={styles.logoandtitle}>
          <Image style={styles.logo} source={require("../images/logo.png")} />
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Bienvenid@!</Text>
          <Text style={styles.subtitle}>
            Estas a un paso de darle al cuidado emocional la importancia que se
            merece.
          </Text>
          <ButtonComponent
            onPress={() => navigation.navigate("Login")}
            backgroundColor="#F27C38"
            title="Iniciar sesión"
            titleColor="#fff"
            titleSize={20}
            containerStyle={{
              marginBottom: 15,
            }}
          />
          <ButtonComponent
            onPress={() => navigation.navigate("Signup")}
            backgroundColor="#BEDEFF"
            title="No tengo cuenta"
            titleColor="#F27C38"
            titleSize={20}
            containerStyle={{
              marginBottom: 15,
            }}
          />
          <RNButton
            onPress={onLoginAnonymously}
            title="Acceder sin registro"
            color="#192959"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90D0CF",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 220,
    width: 220,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 5,
    marginTop: 10,
  },
  logoandtitle: {
    margin: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 24,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
