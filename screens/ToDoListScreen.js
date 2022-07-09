import { Entypo } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  createChallenge,
  deleteChallenge,
  getChallenges,
} from "../api/FirebaseMethods";
import { ChallengeComponent } from "../components/ComponentsIndex";
import { ORANGE, SOFT_GREY } from "../constants/Colors";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
import { challenge, validateChallenge } from "../utils/ChallengeFormat";

export default function ToDoListScreen({ route }) {
  const { user } = useContext(AuthenticatedUserContext);
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const { title, scope } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [currentChallenge, setCurrentChallenge] = useState(challenge);
  
  const updateScreen = () => {
    getChallenges(user, scope, setList, setIsLoading);
  };

  useEffect(() => {
    updateScreen();
  }, []);

  if (isLoading) {
    return (
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
    );
  }
  function addText() {
    if (!validateChallenge(currentChallenge)) {
      Alert.alert("Upss!", "No has escrito nada");
      return;
    }
    setList((prev) => {
      return [...prev, { ...currentChallenge, isSelected: false }];
    });
    createChallenge(
      currentChallenge.challenge,
      currentChallenge.title,
      currentChallenge.description,
      scope,
      user
    );
    setCurrentChallenge(challenge);
    getChallenges(user, scope, setList, setIsLoading);
  }

  function setIsSelected(index, value) {
    let copy = list.map((item) => {
      if (item.id == index) {
        return { ...item, completed: value };
      }
      return item;
    });
    setList(copy);
  }

  function deleteItem(idx) {
    Alert.alert("Descartar reto", "¿Quieres eliminar este reto?", [
      {
        text: "No",
      },
      {
        text: "Si",
        onPress: () => {
          deleteChallenge(user, idx);
          updateScreen();
        },
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        style={{ flex: 1 }}
        data={list}
        renderItem={({ item, index }) => (
          <ChallengeComponent
            data={item}
            index={item.id}
            setIsSelected={setIsSelected}
            deleteItem={deleteItem}
          />
        )}
        keyExtractor={(item, index) => item.id}
      />

      <View style={styles.textBoxWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Añadir nuevo reto"
          placeholderTextColor={"#003131"}
          onChangeText={(value) =>
            setCurrentChallenge({
              ...currentChallenge,
              challenge: value,
              scope,
              title: "¡Animo!",
              description: "Puedes conseguir todo lo que te propongas",
            })
          }
          value={currentChallenge.challenge}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addText();
          }}
        >
          <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  textBoxWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 19,
    backgroundColor:"white",
  },
  textInput: {
    elevation: 5,
    shadowColor: SOFT_GREY,
    shadowOffset: { width: 5, height: 12 },
    shadowRadius: 12,
    borderRadius: 25,
    backgroundColor: SOFT_GREY,
    height: 42,
    paddingLeft: 15,
    width: "80%",
    color: "#003131",
    marginRight: 15,
    fontSize: 15
  },
  btn: {
    elevation: 7,
    shadowColor: "#192959",
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 10,
    backgroundColor: "#192959",
    height: 42,
    width: 42,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    marginLeft: 20,
  },
});
