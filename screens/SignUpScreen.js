import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button as RNButton, Image, StyleSheet, Text, View } from 'react-native';
import { Button, ErrorMessage, InputField } from '../components/ComponentsIndex';
import Firebase from '../config/firebase';


const auth = Firebase.auth();

export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [signupError, setSignupError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.createUserWithEmailAndPassword(email, password);
        // const currentUser = firebase.auth().currentUser;
        // currentUser.updateProfile({
        //   displayName: setDisplayName(displayName)
        // })
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <Image
        style={styles.tinyLogo}
        source={require('../images/logo.png')}
      />
      <Text style={styles.title}>Crear una cuenta</Text>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='account'
        placeholder='¿Cómo te llamas?'
        autoCapitalize='none'
        keyboardType='default'
        textContentType='name'
        autoFocus={true}
        value={displayName}
        onChangeText={text => setDisplayName(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='email'
        placeholder='Introduce tu correo'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        textContentType='emailAddress'
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='lock'
        placeholder='Contraseña'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      <Button
        onPress={onHandleSignup}
        backgroundColor='#F27C38'
        title='Registrarme'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      />
      <RNButton
        onPress={() => navigation.navigate('Login')}
        title='Tengo cuenta'
        color='#192959'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90D0CF',
    paddingTop: 50,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingBottom: 24
  }
});