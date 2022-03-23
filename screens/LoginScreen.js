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
  ButtonComponent,
  ErrorMessageComponent,
  InputFieldComponent,
} from "../components/ComponentsIndex";
import Firebase from "../config/firebase";

const auth = Firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Image style={styles.logo} source={require("../images/logo.png")} />
          <Text style={styles.title}>Bienvenido de vuelta</Text>
        
          <InputFieldComponent
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
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputFieldComponent
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
          {loginError ? (
            <ErrorMessageComponent error={loginError} visible={true} />
          ) : null}
          <ButtonComponent
            onPress={onLogin}
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
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#192959",
    alignSelf: "center",
    margin: 20,
    marginTop:60
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    height: 220,
    width: 220,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 10,
    marginTop: 10,
  },
  logoandtitle: {
    
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
