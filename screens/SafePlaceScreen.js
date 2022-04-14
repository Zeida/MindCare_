import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import SafeCardComponent from "../components/SafeCardComponent";
import SafeCardModalComponent from "../components/SafeCardModalComponent";
import { ORANGE } from "../constants/Colors";
import { getSafeCards } from "../api/FirebaseMethods";

export default function SafePlaceScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [safeCards, setSafeCards] = useState([]);

  useEffect(() => {
    getSafeCards(setSafeCards);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi lugar seguro</Text>
      <Image style={styles.image} source={require("../images/safeplace.png")} />
      <Text style={styles.subtext}>Mis herramientas para el bienestar:</Text>
      <FlatList
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        data={safeCards}
        renderItem={({ item }) => <SafeCardComponent safeCard={item} />}
        keyExtractor={(safeCard) => safeCard.body}
      />
      <ButtonComponent
        onPress={() => setModalVisible(true)}
        title={"Añadir"}
        backgroundColor={ORANGE}
        titleColor={"#fff"}
        titleSize={17}
        containerStyle={{
          marginBottom: 10,
          alignItems: "center",
        }}
      />
      <SafeCardModalComponent
        visible={modalVisible}
        setVisible={setModalVisible}
        setSafeCards={setSafeCards}
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
