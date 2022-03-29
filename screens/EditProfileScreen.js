import React, { useContext, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from "react-native";
import { InputFieldComponent } from "../components/ComponentsIndex";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
import ErrorMessageComponent from "../components/ErrorMessageComponent";

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
          <TouchableOpacity onPress={() => { }}>
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
                  uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              ></ImageBackground>
            </View>
            {updateError ? (
              <ErrorMessageComponent error={updateError} visible={true} />
            ) : null}
          </TouchableOpacity>
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

        <TouchableOpacity
          style={styles.commandButton}
          onPress={updateDisplayName}
        >
          <Text style={styles.panelButtonTitle}>Actualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#192959",
    alignItems: "center",
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
