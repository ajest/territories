import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => (
  <View style={styles.container}>
    <MapView style={styles.mapStyle} />
  </View>
);

export default Map;

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
