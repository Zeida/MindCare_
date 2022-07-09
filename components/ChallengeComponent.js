import Checkbox from "expo-checkbox";
import { useContext } from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { completeChallenge } from "../api/FirebaseMethods";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

export default function ChallengeComponent(props) {
  const { user } = useContext(AuthenticatedUserContext);
  return (
    <Pressable
      style={styles.view}
      onLongPress={() => props.deleteItem(props.index)}
      onPress={() => Alert.alert(props.data.title, props.data.description)}
    >
      <Checkbox
        style={styles.checkbox}
        value={props.data.completed}
        onValueChange={(value) => {
          props.setIsSelected(props.index, value),
            completeChallenge(user, props.index, value);
        }}
      />
      <Text
        style={{
          ...styles.text,
          textDecorationLine: props.data.completed ? "line-through" : "none",
        }}
      >
        {props.data.challenge}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    elevation: 5,
    shadowColor: "#E9E9E9",
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 19,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
    marginBottom: 15,
    marginLeft: 20,
  },
  text: {
    fontSize: 15,
    color: "#000000",
    paddingRight: 40,
  },
  checkbox: {
    height: 26,
    width: 26,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginRight: 15,
  },
});
