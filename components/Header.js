import React from 'react';
import { Header as HeaderNativeElements } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const Header = () => (
  <HeaderNativeElements
    centerComponent={{ text: 'Territorios', style: styles.centerComponent }}
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: ['#f48024', '#a35200'],
      start: { x: 0.9, y: 2 },
      end: { x: 1, y: 0 },
    }}
  />
);

export default Header;

const styles = StyleSheet.create({
  centerComponent: {
    color: '#fff',
    fontSize: 24,
  },
});
