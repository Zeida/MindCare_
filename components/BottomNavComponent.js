import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Screens
import HomeScreen from '../screens/HomeScreen.js';
import StatsScreen from '../screens/StatsScreen.js';
import AchievementsScreen from '../screens/AchievementsScreen';
import ProfileScreen from '../screens/ProfileScreen.js';

//Screens names
const homeScreenName = 'Home';
const achievementsScreenName = 'Achievements';
const statsScreenName = 'Stats';
const profileScreenName = 'Profile';

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomNavContainer() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName="Feed"
                activeColor="#B3F0FF"
                inactiveColor='#769CD6'
                barStyle={{ backgroundColor: '#192959' }}>

                <BottomTab.Screen
                    name={homeScreenName}
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="home" color={color} size={24} />
                        ),
                    }}
                />

                <BottomTab.Screen
                    name={statsScreenName}
                    component={StatsScreen}
                    options={{
                        tabBarLabel: 'Stats',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="pie-chart" color={color} size={24} />
                        ),
                    }}
                />

                <BottomTab.Screen
                    name={achievementsScreenName}
                    component={AchievementsScreen}
                    options={{
                        tabBarLabel: 'Achivements',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="md-ribbon" color={color} size={24} />
                        ),
                    }}
                />

                <BottomTab.Screen
                    name={profileScreenName}
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person" color={color} size={24} />
                        ),
                    }}
                />


            </BottomTab.Navigator >
        </NavigationContainer >
    );
}