import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./screens/HomeScreen";
import NewTweet from "./screens/NewTweet";
import TweetScreen from "./screens/TweetScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import NotificationScreen from "./screens/NotificationScreen";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true, headerBackTitleVisible: false}}
        >
            <Stack.Screen
                name="Tab"
                component={TabNavigator}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="New Tweet"
                component={NewTweet}
                options={{ title: ''}}
            />
            <Stack.Screen
                name="Tweet Screen"
                component={TweetScreen}
                options={{ title: ''}}
            />
            <Stack.Screen
                name="Profile Screen"
                component={ProfileScreen}
                options={{ title:''}}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false}}>
            <Tab.Screen name="Home1" component={HomeScreen}
                options={{tabBarLabel: 'My Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" size={size} color={color} />
                   ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{tabBarLabel: 'My Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{tabBarLabel: 'My Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="notifications" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: true}}
          >
              <Drawer.Screen
                  name="Home"
                  component={HomeStackNavigator}
              />
              <Drawer.Screen
                  name="Settings"
                  component={SettingsScreen}
              />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}





