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

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebaseConfig);
}

const Stack = createStackNavigator();

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
            isLoading: false,
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
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        user.getIdToken().then(function (token) {
          dispatch({ type: 'SIGN_IN', token: token });
        });
      } else {
        dispatch({ type: 'RESTORE_TOKEN', token: null });
      }
    });
  }, []);

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
        firebase
          .auth()
          .signOut()
          .then(function () {
            dispatch({ type: 'SIGN_OUT' });
          })
          .catch(function (error) {
            console.log('An error happened.');
          });
      },
      errors: loginFormErrors,
    }),
    [loginFormErrors]
  );

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
