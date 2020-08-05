import React, { useContext } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AuthContext from '../../contexts/auth-context';

export default function DrawerContainer(props) {
  const { signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => {
          props.navigation.closeDrawer();
          signOut();
        }}
      />
    </DrawerContentScrollView>
  );
}
