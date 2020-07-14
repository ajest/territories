import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import MapView from 'react-native-maps';

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
          <View style={styles.container}>
            <MapView style={styles.mapStyle} />
          </View>
        </Card>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: '100%',
    height: Dimensions.get('window').height - 200,
  },
});
