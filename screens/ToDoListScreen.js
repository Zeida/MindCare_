import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ChallengeComponent } from "../components/ComponentsIndex";

export default function ToDoListScreen({ route }) {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const { title } = route.params;

  function addText(text) {
    if (value !== "") {
      setList((prev) => {
        return [...prev, { text: text, isSelected: false }];
      });
      setValue("");
    } else {
      Alert.alert("Upss!", "No has escrito nada");
    }
  }

  function setIsSelected(index, value) {
    let data = [];

    for (let i = 0; i < list.length; i++) {
      if (index === i) {
        data.push({ ...list[i], isSelected: value });
      } else {
        data.push(list[i]);
      }
    }

    setList(data);
  }

  function deleteItem(idx) {
    Alert.alert("Descartar reto", "¿Quieres eliminar este reto?", [
      {
        text: "Mantener",
      },
      {
        text: "Si",
        onPress: () => {
          const data = list.filter((item, index) => index !== idx);
          setList(data);
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        style={{ flex: 1 }}
        data={list}
        renderItem={({ item, index }) => (
          <ChallengeComponent
            data={item}
            index={index}
            setIsSelected={setIsSelected}
            deleteItem={deleteItem}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.textBoxWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Añadir nuevo reto"
          placeholderTextColor={"#003131"}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addText(value)}>
          <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
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
  },
  textInput: {
    elevation: 5,
    shadowColor: "#E9E9E9",
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 12,
    borderRadius: 25,
    backgroundColor: "#E9E9E9",
    height: 42,
    paddingLeft: 15,
    width: "80%",
    color: "#003131",
    marginRight: 15,
    fontSize: 15,
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
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    marginLeft: 20,
  },
});
