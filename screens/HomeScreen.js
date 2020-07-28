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

  // async function logIn() {
  //   try {
  //     await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(
  //         'unemail@mail.com',
  //         'awesomepassword'
  //       )
  //       .then((data) => {
  //         console.log(data);
  //         // Here is the token
  //         // data.stsTokenManager
  //       })
  //       .catch(function (error) {
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function logInWithToken() {
  //   await firebase
  //     .auth()
  //     .signInWithCustomToken(token)
  //     .catch(function (error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // ...
  //     });
  // }

  // function checkIsLogged() {
  //   const user = firebase.auth().currentUser;

  //   if (user) {
  //     console.log('is logged');
  //   } else {
  //     console.log('isnt logged');
  //   }
  // }

  // firebase.auth().signOut().then(function() {
  //   // Sign-out successful.
  // }).catch(function(error) {
  //   // An error happened.
  // });

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
