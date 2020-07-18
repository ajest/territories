import React from 'react';
import { Card } from 'react-native-elements';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Map from '../components/Map';

function HomeScreen() {
  return (
    <View>
      <Map />
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
