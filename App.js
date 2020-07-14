import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import Header from './components/Header';
import Map from './components/Map';

export default function App() {
  return (
    <View>
      <Header />
      <View>
        <Card title="Mapa general">
          <Map />
        </Card>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
