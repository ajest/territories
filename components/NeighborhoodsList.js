import React from 'react';
import { Card } from 'react-native-elements';
import { Button } from 'react-native';

export default function NeighborhoodsList(props) {
  return (
    <Card>
      <Button
        title="Almagro"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="Balvanera"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="Belgrano"
        onPress={() => props.navigation.navigate('Home')}
      />
    </Card>
  );
}
