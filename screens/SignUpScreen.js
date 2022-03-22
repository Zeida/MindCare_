import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button as RNButton,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  ErrorMessage,
  InputField,
} from "../components/ComponentsIndex";
import Firebase from "../config/firebase";

const auth = Firebase.auth();

export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [signupError, setSignupError] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth.createUserWithEmailAndPassword(email, password);
        // const currentUser = firebase.auth().currentUser;
        // currentUser.updateProfile({
        //   displayName: setDisplayName(displayName)
        // })
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../images/welcomeBackgroundWave.png")}
        style={styles.background}
      >
        <View style={styles.logoandtitle}>
          <Image
            style={styles.logo}
            source={require("../images/logo.png")}
          />
          <Text style={styles.title}>Crear una cuenta</Text>
        </View>
        <View style={styles.view}>
          <InputField
            inputStyle={{
              fontSize: 14,
            }}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            leftIcon="account"
            placeholder="¿Cómo te llamas?"
            autoCapitalize="none"
            keyboardType="default"
            textContentType="name"
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
          />
          <InputField
            inputStyle={{
              fontSize: 14,
            }}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            leftIcon="email"
            placeholder="Introduce tu correo"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputField
            inputStyle={{
              fontSize: 14,
            }}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            leftIcon="lock"
            placeholder="Contraseña"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            textContentType="password"
            rightIcon={rightIcon}
            value={password}
            onChangeText={(text) => setPassword(text)}
            handlePasswordVisibility={handlePasswordVisibility}
          />
          {signupError ? (
            <ErrorMessage error={signupError} visible={true} />
          ) : null}
          <Button
            onPress={onHandleSignup}
            backgroundColor="#F27C38"
            title="Registrarme"
            titleColor="#fff"
            titleSize={20}
            containerStyle={{
              marginBottom: 15,
            }}
          />
          <Button
            onPress={() => navigation.navigate("Login")}
            backgroundColor="#BEDEFF"
            title="Tengo cuenta"
            titleColor="#F27C38"
            titleSize={20}
            containerStyle={{
              marginBottom: 15,
            }}
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
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

});
