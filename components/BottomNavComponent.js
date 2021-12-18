import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const BottomTab = createBottomTabNavigator();

export default function BottomNavContainer() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName={homeScreenName}
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "grey",
                    tabBarLabelStyle: {
                        "paddingBottom": 7,
                        "fontSize": 10
                    },
                    tabBarStyle: [
                        {
                            "display":"flex"
                        },
                        null
                    ],
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeScreenName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === profileScreenName) {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (rn === statsScreenName) {
                            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
                        } else if (rn === achievementsScreenName){
                            iconName = focused ? 'md-ribbon' : 'md-ribbon-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }

                })}>

                <BottomTab.Screen name={homeScreenName} component={HomeScreen} />
                <BottomTab.Screen name={statsScreenName} component={StatsScreen} />
                <BottomTab.Screen name={achievementsScreenName} component={AchievementsScreen} />
                <BottomTab.Screen name={profileScreenName} component={ProfileScreen} />
                

            </BottomTab.Navigator >
        </NavigationContainer >
    );
}