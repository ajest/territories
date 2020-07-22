import React from 'react';
import { View, ImagePropTypes } from 'react-native';
import NeighborhoodsList from '../components/NeighborhoodsList';

function NeighborhoodsScreen({ navigation }) {
  return (
    <View>
      <NeighborhoodsList navigation={navigation} />
    </View>
  );
}

export default NeighborhoodsScreen;
