import React from 'react';
import { View } from 'react-native';
import NeighborhoodsList from '../components/NeighborhoodsList';

export default function NeighborhoodsScreen({ navigation }) {
  return (
    <View>
      <NeighborhoodsList navigation={navigation} />
    </View>
  );
}
