import React from 'react';
import { Header as HeaderNativeElements } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => (
  <HeaderNativeElements
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'Territorios', style: { color: '#fff' } }}
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: ['orange', 'red'],
      start: { x: 0.9, y: 2 },
      end: { x: 1, y: 0 },
    }}
  />
);

export default Header;
