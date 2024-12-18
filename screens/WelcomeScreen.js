import {
  Button as RNButton,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginAnonymously } from "../api/FirebaseMethods";
import { ButtonComponent } from "../components/ComponentsIndex";

export default function WelcomeScreen({ navigation }) {
  const onHandleLoginAnonymously = async () => {
    loginAnonymously();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image style={styles.logo} source={require("../images/logo.png")} />

        <Text style={styles.title}>¡Bienvenido/a!</Text>
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
          title="Registrarme"
          titleColor="#F27C38"
          titleSize={20}
          containerStyle={{
            marginBottom: 15,
          }}
        />
        <RNButton
          onPress={onHandleLoginAnonymously}
          title="Acceder sin registro"
          color="#192959"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "#192959",
    alignSelf: "center",
    margin: 20,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#606060",
    alignSelf: "center",
    paddingBottom: 24,
    paddingHorizontal: 15,
  },
});
