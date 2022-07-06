import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen.js';
import OnBoardingScreen from '../screens/OnBoardingScreen.js';
import SignupScreen from '../screens/SignUpScreen.js';
import UseTermsScreen from '../screens/UseTermsScreen.js';
import WelcomeScreen from '../screens/WelcomeScreen.js';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='OnBoarding' component={OnBoardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='UseTerms' component={UseTermsScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}