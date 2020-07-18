import React from 'react';
import { Card, ButtonGroup } from 'react-native-elements';
import { View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function NeighborhoodsScreen({ navigation }) {
  return (
    <View>
      <Card>
        <Button title="Almagro" onPress={() => navigation.navigate('Home')} />
        <Button title="Balvanera" onPress={() => navigation.navigate('Home')} />
        <Button title="Belgrano" onPress={() => navigation.navigate('Home')} />
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

export default NeighborhoodsScreen;
