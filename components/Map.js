import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const defaultRegion = {
  latitude: -34.6158037,
  longitude: -58.5033386,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class Map extends Component {
  render() {
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
      </View>
    );
  }
}

export default Map;

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
});
