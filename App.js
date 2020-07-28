import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NeighborhoodsScreen from './screens/NeighborhoodsScreen';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
import SignInScreen from './screens/SignInScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen title="Ingresar" name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Neighborhoods" component={NeighborhoodsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
