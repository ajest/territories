import React from 'react';
import { View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Map from '../components/Map';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Ir a territorios"
        onPress={() => navigation.navigate('Neighborhoods')}
      />
      <Map />
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
