import React, { useReducer, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SplashScreen from './screens/SplashScreen';
import NeighborhoodsScreen from './screens/NeighborhoodsScreen';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
import AuthContext from './contexts/auth-context';
import * as SecureStore from 'expo-secure-store';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebaseConfig);
}

const Stack = createStackNavigator();
const userTokenName = 'firebaseToken';

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const [loginFormErrors, setLoginFormErrors] = useState([]);

  useEffect(() => {
    // Fetch the token from storage then navigate
    const bootstrapAsync = async () => {
      // ! Falta resolver esta lógica que quedó obsoleta

      dispatch({ type: 'RESTORE_TOKEN', token: 'token' });
    };

    bootstrapAsync();
  }, []);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('Está logueado');

      user.getIdToken().then(function (token) {
        dispatch({ type: 'SIGN_IN', token: token });
      });
    } else {
      console.log('No está logueado');
    }
  });

  const authContext = React.useMemo(
    () => ({
      signIn: (credentials) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .catch(function (error) {
            setLoginFormErrors([error.message]);
          });
      },
      signOut: () => {
        SecureStore.deleteItemAsync(userTokenName);

        firebase
          .auth()
          .signOut()
          .then(function () {
            console.log('Sign-out successful.');
          })
          .catch(function (error) {
            console.log('An error happened.');
          });

        dispatch({ type: 'SIGN_OUT' });
      },
      errors: loginFormErrors,
    }),
    [loginFormErrors]
  );

  function checkIsLogged() {
    const user = firebase.auth().currentUser;

    if (user) {
      console.log('is logged');
    } else {
      console.log('isnt logged');
    }
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <Stack.Screen
              title="Ingresar"
              name="SignIn"
              component={SignInScreen}
            />
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="Neighborhoods"
                component={NeighborhoodsScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
