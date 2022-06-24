import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { registration } from "../api/FirebaseMethods";
import {
  ButtonComponent,
  ErrorMessageComponent,
  InputFieldComponent,
} from "../components/ComponentsIndex";

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
    await registration(email, password, displayName, setSignupError);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <Text style={styles.title}>Crear una cuenta</Text>

        <InputFieldComponent
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
          autoCorrect={false}
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
        {signupError ? (
          <ErrorMessageComponent error={signupError} visible={true} />
        ) : null}
        <ButtonComponent
          onPress={onHandleSignup}
          backgroundColor="#F27C38"
          title="Registrarme"
          titleColor="#fff"
          titleSize={20}
          containerStyle={{
            marginBottom: 15,
          }}
        />
        <ButtonComponent
          onPress={() => navigation.navigate("Login")}
          backgroundColor="#BEDEFF"
          title="Iniciar sesión"
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
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
