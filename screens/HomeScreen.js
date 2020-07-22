import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Map from '../components/Map';
import AsyncStorage from '@react-native-community/async-storage';

const territories = ['Almagro', 'Balvanera', 'Belgrano'];
const STORAGE_KEY = '@territories';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(territories));
  } catch (e) {
    console.warn(e);
  }
};

const readData = async () => {
  try {
    const res = await AsyncStorage.getItem(STORAGE_KEY);
  } catch (e) {
    console.warn(e);
  }
};

function HomeScreen({ navigation }) {
  // useEffect(() => {
  //   storeData(territories);
  // }, []);

  useEffect(() => {
    readData();
  }, []);

  return (
    <View>
      <Button
        title="Ir a territorios"
        onPress={() => navigation.navigate('Neighborhoods')}
      />
      <Map />
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
