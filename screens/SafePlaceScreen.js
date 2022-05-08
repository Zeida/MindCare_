import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import SafeCardComponent from "../components/SafeCardComponent";
import SafeCardModalComponent from "../components/SafeCardModalComponent";
import { ORANGE } from "../constants/Colors";
import { getSafeCards, deleteSafeCard } from "../api/FirebaseMethods";
import { Pressable } from "react-native";

export default function SafePlaceScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [safeCards, setSafeCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateScreen = () => {
    getSafeCards(setSafeCards, setIsLoading);
  };

  useEffect(() => {
    updateScreen();
  }, []);

  const deleteAlert = (item) => {
    Alert.alert("Borrar carta", "¿Quieres eliminarla?", [
      {
        text: "Mantener",
      },
      {
        text: "Si",
        onPress:async () => {
          await deleteSafeCard(item);
          updateScreen();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi lugar seguro</Text>
      <Image style={styles.image} source={require("../images/safeplace.png")} />
      <Text style={styles.subtext}>Mis herramientas para el bienestar:</Text>
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
        <FlatList
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          data={safeCards}
          renderItem={({ item }) => {
            return (
              <Pressable
                onLongPress={() => {
                  deleteAlert(item);
                }}
              >
                <SafeCardComponent safeCard={item} />
              </Pressable>
            );
          }}
          keyExtractor={(safeCard) => safeCard.id}
        />
      )}
      <ButtonComponent
        onPress={() => setModalVisible(true)}
        title={"Añadir"}
        backgroundColor={ORANGE}
        titleColor={"#fff"}
        titleSize={17}
        containerStyle={{
          marginBottom: 25,
          alignItems: "center",
        }}
      />

      <SafeCardModalComponent
        visible={modalVisible}
        setVisible={setModalVisible}
        updateScreen={updateScreen}
      />
    </View>
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
    height: 250,
    marginLeft: 30,
    marginRight: 30,
  },
  flatlist: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 40,
    backgroundColor: ORANGE,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
});
