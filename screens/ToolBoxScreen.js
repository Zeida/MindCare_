import { Entypo } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator, Alert, FlatList, Image, Pressable, SafeAreaView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity, View
} from "react-native";
import { createTool, deleteTool, getTools } from "../api/FirebaseMethods";
import { ORANGE, SOFT_BLUE } from "../constants/Colors";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
import { tool, validateTool } from "../utils/ToolFormat";

export default function ToolBoxScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthenticatedUserContext);
  const [list, setList] = useState([]);
  const [currentTool, setCurrentTool] = useState(tool);
  const [value, setValue] = useState("");

  const updateScreen = () => {
    getTools(user, setList, setIsLoading);
  };

  useEffect(() => {
    updateScreen();
  }, []);

  function addTool() {
    if (!validateTool(currentTool)) {
      Alert.alert("Upss!", "No has escrito nada");
      return;
    }
    setList((prev) => {
      return [...prev, { ...currentTool }];
    });
    createTool(currentTool.tool, user);
    setCurrentTool(tool);
    getTools(user, setList, setIsLoading);
  }

  const deleteAlert = (item, user) => {
    Alert.alert("Borrar herramienta", "¿Quieres eliminarla?", [
      {
        text: "No",
      },
      {
        text: "Si",
        onPress: async () => {
          await deleteTool(user, item.id);
          updateScreen();
        },
      },
    ]);
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Mi caja de herramientas</Text>
      <Image style={styles.image} source={require("../images/toolbox.png")} />
      <Text style={styles.subtext}>Lo que me hace bien cuando estoy mal:</Text>
      <Text style={styles.tiptext}>
        Escribe aquí pequeñas acciones o estrategias que te hagan sentir bien
        como salir a pasear, tomar un baño, llamar a un amigo...
      </Text>
      <FlatList
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onLongPress={() => {
                deleteAlert(item, user);
              }}
              key={index}
            >
              <View style={styles.toolContainer} key={index}>
                <Text style={styles.toolTitle} key={index}>
                  {item.tool}
                </Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.textBoxWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Añadir nueva herramienta"
          placeholderTextColor={"#003131"}
          onChangeText={(value) => [
            setCurrentTool({
              ...currentTool,
              tool: value,
            }),
          ]}
          value={currentTool.tool}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addTool();
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
  tiptext: {
    fontSize: 12,
    color: "black",
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20,
    textAlign: "left",
  },
  image: {
    width: 200,
    height: 250,
    alignSelf: "center",
  },
  flatlist: {
    marginBottom: 5,
  },
  toolContainer: {
    backgroundColor: SOFT_BLUE,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    padding: 5,
  },
  toolTitle: {
    fontSize: 15,
    color: "black",
    textAlign: "left",
    padding:5,
    paddingLeft:15,

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
    backgroundColor:"white"
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
});
