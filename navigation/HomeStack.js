import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
//Screens
import HomeScreen from "../screens/HomeScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";
import StatsScreen from "../screens/StatsScreen.js";
import ToDoListScreen from "../screens/ToDoListScreen";
import AchievementsScreen from "../screens/AchievementsScreen";
import CardsForHelpScreen from "../screens/CardsForHelpScreen.js";
import EditProfileScreen from "../screens/EditProfileScreen.js";
import AboutUsCardScreen from "../screens/AboutUsCardsScreen.js";
import EmotionalDiaryScreen from "../screens/EmotionalDiaryScreen.js";
import SafePlaceScreen from "../screens/SafePlaceScreen.js";
import ResourcesForHelpScreen from "../screens/ResourcesForHelpScreen.js";

//Screens names
const homeScreenName = "Inicio";
const achievementsScreenName = "Insignias";
const statsScreenName = "Estadísticas";
const profileScreenName = "Perfil";
const toDoListScreenName = "Todolist";
const editProfileScreenName = "Mi perfil";
const bottomTabNavigatorName = "BottomTabNavigator";
const cardsForHelpScreenName = "Ayuda";
const aboutUsCardScreenName = "Sobre nosotros";
const emotionalDiaryScreenName = "Diario emocional";
const safePlaceScreenName = "Mi lugar seguro";
const resourcesForHelpScreenName = "Recursos";

const Stack = createStackNavigator();
const BottomNavTabStack = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomNavTabStack.Navigator
      initialRouteName={homeScreenName}
      activeColor="#BEDEFF"
      inactiveColor="#769CD6"
      barStyle={{ backgroundColor: "#192959" }}
    >
      <BottomNavTabStack.Screen
        name={homeScreenName}
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />

      <BottomNavTabStack.Screen
        name={statsScreenName}
        component={StatsScreen}
        options={{
          tabBarLabel: "Estadísticas",
          tabBarIcon: ({ color }) => (
            <Ionicons name="pie-chart" color={color} size={24} />
          ),
        }}
      />

      <BottomNavTabStack.Screen
        name={achievementsScreenName}
        component={AchievementsScreen}
        options={{
          tabBarLabel: "Insignias",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-ribbon" color={color} size={24} />
          ),
        }}
      />

      <BottomNavTabStack.Screen
        name={profileScreenName}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={24} />
          ),
        }}
      />
    </BottomNavTabStack.Navigator>
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={bottomTabNavigatorName}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={toDoListScreenName}
        component={ToDoListScreen}
        options={{
          headerTitle: " ",
          headerStyle: {
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={emotionalDiaryScreenName}
        component={EmotionalDiaryScreen}
        options={{
          headerTitle: " ",
          headerStyle: {
            height: 80,
          },
        }}
      />
      <Stack.Screen name={profileScreenName} component={ProfileScreen} />
      <Stack.Screen
        name={safePlaceScreenName}
        component={SafePlaceScreen}
        options={{
          headerTitle: " ",
          headerStyle: {
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={resourcesForHelpScreenName}
        component={ResourcesForHelpScreen}
        options={{
          headerTitle: " ",
          headerStyle: {
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={editProfileScreenName}
        component={EditProfileScreen}
        options={{
          headerTitle: " ",
          headerStyle: {
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={cardsForHelpScreenName}
        component={CardsForHelpScreen}
        options={{
          headerTitle: " ",
          headerStyle: {
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name={aboutUsCardScreenName}
        component={AboutUsCardScreen}
        options={{
          headerTitle: " ",
          headerStyle: {
            height: 80,
          },
        }}
      />
    </Stack.Navigator>
  );
}
