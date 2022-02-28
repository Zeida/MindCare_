import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

//Screens
import HomeScreen from '../screens/HomeScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import StatsScreen from '../screens/StatsScreen.js';
import AchievementsScreen from '../screens/AchievementsScreen';
import ChallengesListScreen from '../screens/ChallengesListScreen';
import ToDoListScreen from '../screens/ToDoListScreen';

//Screens names
const homeScreenName = 'Inicio';
const achievementsScreenName = 'Insignias';
const statsScreenName = 'Estadísticas';
const profileScreenName = 'Perfil';
const challengesListScreenName = 'Objetivos';
const toDoListScreenName = 'Todolist';

const Stack = createNativeStackNavigator();

const BottomNavTabStack = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomNavTabStack.Navigator
            initialRouteName={homeScreenName}
            activeColor="#BEDEFF"
            inactiveColor='#769CD6'
            barStyle={{ backgroundColor: '#192959' }}>

            <BottomNavTabStack.Screen

                name={homeScreenName}
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={24} />
                    ),
                }}
            />

            <BottomNavTabStack.Screen
                name={statsScreenName}
                component={StatsScreen}
                options={{
                    tabBarLabel: 'Estadísticas',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="pie-chart" color={color} size={24} />
                    ),
                }}
            />

            <BottomNavTabStack.Screen
                name={achievementsScreenName}
                component={AchievementsScreen}
                options={{
                    tabBarLabel: 'Insignias',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-ribbon" color={color} size={24} />
                    ),
                }}
            />

            <BottomNavTabStack.Screen
                name={profileScreenName}
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={24} />
                    ),
                }}
            />

        </BottomNavTabStack.Navigator >
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"BottomTabNavigator"} component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name={homeScreenName} component={HomeScreen} />
                <Stack.Screen name={challengesListScreenName} component={ChallengesListScreen} />
                <Stack.Screen name={toDoListScreenName} component={ToDoListScreen}  options={{ headerTitle:" "}}/>
                <Stack.Screen name={statsScreenName} component={StatsScreen} />
                <Stack.Screen name={achievementsScreenName} component={AchievementsScreen} />
                <Stack.Screen name={profileScreenName} component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}