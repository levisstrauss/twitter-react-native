import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
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



//Home Screen
// function HomeScreen({ navigation }) {
//   return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             title="Go to Details"
//             onPress={() => navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'anything you want here',
//             })
//             }
//         />
//       </View>
//   );
// }
//
// // Detail Screen
// function DetailsScreen({ route }) {
//   useFocusEffect(
//       React.useCallback(() => {
//          console.log('details screen focused')
//         return () => {
//           console.log('details screen unfocused')
//         };
//       }, [])
//   );

  // const { itemId, otherParam } = route.params;

//   return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {/*<Text>Details Screen for {itemId}</Text>*/}
//         {/*<Text>{otherParam}</Text>*/}
//         <Text>Details Screen</Text>
//       </View>
//   );
// }

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

// <Tab.Screen
//     name="Details"
//     component={DetailsScreen}
//     options={{
//         tabBarLabel: 'Details',
//         tabBarIcon: ({color, size}) => (
//             <Ionicons name="settings" size={size} color={color} />
//         )
//     }}/>





// export default function App() {
//   return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{ title: 'My home' }}
//           />
//           <Stack.Screen name="Details" component={DetailsScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }




