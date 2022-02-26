import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Challenge from '../components/ChallengeComponent';

export default function ChallengesListScreen() {

  const [challenge, setChallenge] = useState();
  const [challengesItems, setChallengeItems] = useState([]);
  const handleAddChallenge = () => {
    Keyboard.dismiss();
    setChallengeItems([...challengesItems, challenge])
    setChallenge(null);
  }
  const completeChallenge = (index) => {
    let challengesCopy = [...challengesItems];
    challengesCopy.splice(index, 1);
    setChallengeItems(challengesCopy);
  }
  return (
    <View style={styles.container}>
      {/*Task*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Objetivos</Text>
        <View style={StyleSheet.items}>
          {/*Task Location!*/}
          {
            challengesItems.map((item, index) => {
              return (
                  <Challenge key = { index } text = { item } />
              )
                
            })
          }
        </View>
      </View>

      {/*Customize the challenges*/}
      <KeyboardAvoidingView
        style={styles.writeTasksWrapper}>
        <TextInput style={styles.input} placeholder={'Crea un objetivo'} value={challenge} onChangeText={text => setChallenge(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddChallenge()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTasksWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    marginBottom:5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
