import * as React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>¿Qué área te gustaría mejorar?</Text>
        <Pressable style={styles.button}>
          <Ionicons name="ios-leaf-outline" color={'white'} size={30} />
          <Text style={styles.buttonText}>{"Aire libre"}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialIcons name="fitness-center" color={'white'} size={30} />
          <Text style={styles.buttonText}>{"Deporte"}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="md-cafe-outline" color={'white'} size={30} />
          <Text style={styles.buttonText}>{"Ocio"}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="ios-bed-outline" color={'white'} size={30} />
          <Text style={styles.buttonText}>{"Descanso"}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="md-fitness-outline" color={'white'} size={30} />
          <Text style={styles.buttonText}>{"Salud"}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="md-people-circle-outline" color={'white'} size={30} />
          <Text style={styles.buttonText}>{"Social"}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="lock-closed" color={'white'} size={30} />
          <Text style={styles.buttonText}>{""}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="lock-closed" color={'white'} size={30} />
          <Text style={styles.buttonText}>{""}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="lock-closed" color={'white'} size={30} />
          <Text style={styles.buttonText}>{""}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BEDEFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#FFF592',
    borderWidth: 2,
    height: 100,
    width: 100,
    margin:2,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom: 5,
  },
  text: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom: 10,
  },
});