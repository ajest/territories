import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NeighborhoodsScreen from './screens/NeighborhoodsScreen';
import Constants from 'expo-constants';

// console.log(Constants.manifest.extra.firebase);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
        <Stack.Screen name="Neighborhoods" component={NeighborhoodsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
