import React, { useContext, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text, View
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { InputFieldComponent } from "../components/ComponentsIndex";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import Firebase from "../config/firebase";
import { ORANGE } from "../constants/Colors";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
const auth = Firebase.auth();

export default function EditProfileScreen({ navigation }) {
  const [displayName, setDisplayName] = useState("");
  const [updateError, setUpdateError] = useState("");
  const { user } = useContext(AuthenticatedUserContext);
  const updateDisplayName = async () => {
    const update = {
      displayName: displayName,
    };
    try {
      return await user.updateProfile(update);
    } catch (error) {
      console.log(error);
      setUpdateError(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
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
            placeholder="Nombre"
            autoCapitalize="none"
            keyboardType="default"
            textContentType="name"
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
          />
        </View>
        <ButtonComponent
          onPress={updateDisplayName}
          title={"Actualizar"}
          backgroundColor={ORANGE}
          titleColor={"#fff"}
          titleSize={17}
          containerStyle={{
            backgroundColor: ORANGE,
            alignItems: "center",
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
