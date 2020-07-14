import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Territorios', style: { color: '#fff' } }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['orange', 'red'],
          start: { x: 0.9, y: 2 },
          end: { x: 1, y: 0 },
        }}
      />
      <View>
        <Card title="Mapa general">
          <Text>Aquí estará el mapa general</Text>
        </Card>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
