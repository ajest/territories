import React, { useReducer, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SplashScreen from './screens/SplashScreen';
import NeighborhoodsScreen from './screens/NeighborhoodsScreen';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
import AuthContext from './contexts/auth-context';
import DrawerContainer from './components/layout/DrawerContainer';
import { Provider } from 'react-redux';
import rootStore from './redux/stores/rootStore';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebaseConfig);
}

const Drawer = createDrawerNavigator();

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
            console.error('An error happened.');
          });
      },
      errors: loginFormErrors,
    }),
    [loginFormErrors]
  );

  return (
    <Provider store={rootStore}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContainer {...props} />}
          >
            {state.isLoading ? (
              <Drawer.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              <Drawer.Screen
                title="Ingresar"
                name="SignIn"
                component={SignInScreen}
              />
            ) : (
              <>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen
                  name="Neighborhoods"
                  component={NeighborhoodsScreen}
                />
              </>
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}
