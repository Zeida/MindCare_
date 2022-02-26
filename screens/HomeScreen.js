import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen(props) {
  const challengesScope = [
    { id: 0, scope: 'Aire libre', icon: 'ios-leaf-outline' },
    { id: 1, scope: 'Deporte', icon: 'barbell-outline' },
    { id: 2, scope: 'Ocio', icon: 'md-cafe-outline' },
    { id: 3, scope: 'Descanso', icon: 'ios-bed-outline' },
    { id: 4, scope: 'Salud', icon: 'md-fitness-outline' },
    { id: 5, scope: 'Social', icon: 'md-people-circle-outline' },
    { id: 6, scope: '', icon: 'lock-closed' },
    { id: 7, scope: '', icon: 'lock-closed' },
    { id: 8, scope: '', icon: 'lock-closed' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Qué área te gustaría mejorar?</Text>
      {challengesScope.map((challengeScope) => {
        return (
          <Pressable key={challengeScope.id} style={styles.button}
            onPress={() => {
              props.navigation.navigate('Objetivos');
            }}>
            <Ionicons name={challengeScope.icon} color={'white'} size={30} />
            <Text style={styles.buttonText}>{challengeScope.scope}</Text>
          </Pressable>
        )
      }
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#BEDEFF',
    borderWidth: 2,
    height: 100,
    width: 100,
    margin: 2,
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