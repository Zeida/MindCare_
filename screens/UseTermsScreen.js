import { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { termsofuse } from "../data/UseTerms";

export default function UseTermsScreen(props) {
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const [state, setState] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TÉRMINOS Y CONDICIONES DE USO MINDCARE</Text>
      <ScrollView
        style={styles.tcContainer}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setState(true);
          }
        }}
      >
        <Text style={styles.tcP}>{termsofuse}</Text>
      </ScrollView>
      <TouchableOpacity
        disabled={!state}
        onPress={() => props.navigation.navigate("Welcome")}
        style={state ? styles.button : styles.buttonDisabled}
      >
        <Text style={styles.buttonLabel}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles ={
  container:{
    marginTop:  80,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
      fontSize: 22,
      alignSelf: 'center'
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcP:{
      marginTop: 10,
      fontSize: 12
  },
  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7
  },

  button:{
      backgroundColor: '#136AC7',
      borderRadius: 5,
      padding: 10
  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  },
};
