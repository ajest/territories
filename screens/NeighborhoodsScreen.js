import React from 'react';
import { View } from 'react-native';
import NeighborhoodsList from '../components/NeighborhoodsList';
import LayoutHeader from '../components/layout/LayoutHeader';

export default function NeighborhoodsScreen({ navigation }) {
  return (
    <View>
      <LayoutHeader navigation={navigation} />
      <NeighborhoodsList navigation={navigation} />
    </View>
  );
}
