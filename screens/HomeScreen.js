import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { IconButton } from '../components/ComponentsIndex';
import app from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider ';



const auth = app.auth();

export default function HomeScreen(props) {
  const challengesScope = [
    { id: 0, scope: 'Aire libre', icon: 'nature-people' },
    { id: 1, scope: 'Deporte', icon: 'arm-flex' },
    { id: 2, scope: 'Hobbies', icon: 'puzzle' },
    { id: 3, scope: 'Descanso', icon: 'bed' },
    { id: 4, scope: 'Salud', icon: 'heart-pulse' },
    { id: 5, scope: 'Social', icon: 'account-group' },
    { id: 6, scope: '', icon: 'lock' },
    { id: 7, scope: '', icon: 'lock' },
    { id: 8, scope: '', icon: 'lock' },
  ];

  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.row}>
        <Text style={styles.title}>Hola {user.email}!</Text>
        <IconButton
          name='logout'
          size={24}
          color='red'
          onPress={handleSignOut}
        />
      </View>
      <Text style={styles.text}>¿Qué área te gustaría mejorar?</Text>
      {challengesScope.map((challengeScope) => {
        return (
          <Pressable key={challengeScope.id} value={challengeScope.scope} style={styles.button}
            onPress={() => {
              props.navigation.navigate('Todolist', { scope: challengeScope.scope });
            }}>
            <MaterialCommunityIcons name={challengeScope.icon} color={'white'} size={30} />
            <Text style={styles.buttonText}>{challengeScope.scope}</Text>
          </Pressable>
        )
      }
      )}
    </SafeAreaView>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});
