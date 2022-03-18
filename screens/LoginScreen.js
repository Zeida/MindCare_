import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button as RNButton, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ErrorMessage, InputField } from '../components/ComponentsIndex';
import Firebase from '../config/firebase';


const auth = Firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };
  
  const onLoginAnonymously = async () => {
    auth
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../images/welcomeBackgroundWave.png')} style={styles.background}>
        <View style={styles.view}>
          <StatusBar style='dark-content' />
          <Image
            style={styles.tinyLogo}
            source={require('../images/logo.png')}
          />
          <Text style={styles.title}>Bienvenido de nuevo!</Text>
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
          {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
          <Button
            onPress={onLogin}
            backgroundColor='#F27C38'
            title='Iniciar sesión'
            titleColor='#fff'
            titleSize={20}
            containerStyle={{
              marginBottom: 15
            }}
          />
          <Button
            onPress={() => navigation.navigate('Signup')}
            backgroundColor='#BEDEFF'
            title='No tengo cuenta'
            titleColor='#F27C38'
            titleSize={20}
            containerStyle={{
              marginBottom: 15,

            }}
          />
          <RNButton
            onPress={onLoginAnonymously}
            title='Acceder sin registro'
            color='#192959'
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90D0CF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingBottom: 24
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});