import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => (
  <View style={styles.container}>
    <MapView
      style={styles.mapStyle}
      zoomEnabled={true}
      showsUserLocation={true}
    >
      <Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        title={'title'}
        description={'description'}
      />
    </MapView>
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
