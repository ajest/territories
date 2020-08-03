import React from 'react';
import { View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Map from '../components/Map';
// import useAsyncStorage from '@rnhooks/async-storage';
// import * as firebase from 'firebase';

// const territories = ['Almagro', 'Balvanera', 'Belgrane'];
// const STORAGE_KEY = '@territories';

export default function HomeScreen({ navigation }) {
  // const [storageItem, updateStorageItem, clearStorageItem] = useAsyncStorage(
  //   STORAGE_KEY
  // );

  // updateStorageItem(JSON.stringify(territories));

  return (
    <View>
      <Button
        title="Ir a territorios"
        onPress={() => {
          navigation.navigate('Neighborhoods');
        }}
      />
      <Map />
      <StatusBar style="auto" />
    </View>
  );
}
