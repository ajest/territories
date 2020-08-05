import React from 'react';
import { Header } from 'react-native-elements';

export default function LayoutHeader({ navigation }) {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => navigation.openDrawer(),
      }}
      centerComponent={{ text: 'Territories', style: { color: '#fff' } }}
      backgroundColor="orange"
    />
  );
}
