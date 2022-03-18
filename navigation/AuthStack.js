import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen.js';
import SignupScreen from '../screens/SignUpScreen.js';
import WelcomeScreen from '../screens/WelcomeScreen.js';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}