import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const defaultRegion = {
  latitude: -34.6158037,
  longitude: -58.5033386,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: '100%',
    width: 20,
  },
});

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        region={defaultRegion}
        zoomEnabled={true}
        zoomControlEnabled={true}
      >
        <Marker
          coordinate={{ latitude: -34.6158037, longitude: -58.5033386 }}
          title={'Supermercado'}
          description={'Avenida Gaona 2120'}
        />
      </MapView>
      <View style={styles.mapDrawerOverlay} />
    </View>
  );
}
