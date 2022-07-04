import { useContext, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { InputFieldComponent } from "../components/ComponentsIndex";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import { ORANGE } from "../constants/Colors";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

export default function EditProfileScreen(props) {
  const [displayName, setDisplayName] = useState();
  const [password, setPassword] = useState("");
  const [updateError, setUpdateError] = useState("");
  const { user, setUser } = useContext(AuthenticatedUserContext);

  const onHandleUpdate = async () => {
    if (displayName == "" || password == "") {
      Alert.alert("Upss!", "No has escrito nada");
      return;
    }
    const update = {
      displayName: displayName,
    };
    try {
      await user.updateProfile(update);
      await user.updatePassword(password);
      setUser(user);
      return props.navigation.goBack(user);
    } catch (error) {
      setUpdateError(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={{
                uri: "https://picsum.photos/700",
              }}
              style={{ height: 100, width: 100 }}
              imageStyle={{ borderRadius: 15 }}
            ></ImageBackground>
          </View>
          {updateError ? (
            <ErrorMessageComponent error={updateError} visible={true} />
          ) : null}
        </View>
        <Text
          style={{
            margin: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Actualizar mi perfil
        </Text>
        <View style={styles.action}>
          <InputFieldComponent
            inputStyle={{
              fontSize: 14,
            }}
            containerStyle={{
              backgroundColor: "#fff",
              marginVertical: 20,
            }}
            leftIcon="account"
            placeholder="Nombre de usuario"
            autoCapitalize="words"
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
              marginBottom: 10,
            }}
            leftIcon="lock-outline"
            placeholder="Contraseña"
            autoCapitalize="none"
            keyboardType="default"
            textContentType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <ButtonComponent
          onPress={onHandleUpdate}
          title={"Actualizar"}
          backgroundColor={ORANGE}
          titleColor={"#fff"}
          titleSize={17}
          containerStyle={{
            backgroundColor: ORANGE,
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
