import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen.js';
import SignupScreen from '../screens/SignUpScreen.js';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}