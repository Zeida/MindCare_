import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import HomeScreen from '../screens/HomeScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import StatsScreen from '../screens/StatsScreen.js';
import AchievementsScreen from '../screens/AchievementsScreen';
import ToDoListScreen from '../screens/ToDoListScreen';
import EditProfileScreen from '../screens/EditProfileScreen.js';
import CardsForHelpScreen from '../screens/CardsForHelpScreen.js';

//Screens names
const homeScreenName = 'Inicio';
const achievementsScreenName = 'Insignias';
const statsScreenName = 'Estadísticas';
const profileScreenName = 'Perfil';
const toDoListScreenName = 'Todolist';
const editProfileScreenName = 'Mi perfil';
const bottomTabNavigatorName = 'BottomTabNavigator';
const cardsForHelpScreenName = 'Ayuda';


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
                <Stack.Screen name={bottomTabNavigatorName} component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name={homeScreenName} component={HomeScreen} />
                <Stack.Screen name={toDoListScreenName} component={ToDoListScreen} options={{ headerTitle: " " }} />
                <Stack.Screen name={statsScreenName} component={StatsScreen} />
                <Stack.Screen name={achievementsScreenName} component={AchievementsScreen} />
                <Stack.Screen name={profileScreenName} component={ProfileScreen} />
                <Stack.Screen name={editProfileScreenName} component={EditProfileScreen} options={{ headerTitle: " " }} />
                <Stack.Screen name={cardsForHelpScreenName} component={CardsForHelpScreen} options={{ headerTitle: " " }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}