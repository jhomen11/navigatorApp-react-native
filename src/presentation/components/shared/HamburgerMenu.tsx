import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { IonIcons } from './IonIcons';

export const HamburgerMenu = () => {
    const navigation = useNavigation();

  useEffect(() => {
   navigation.setOptions({
    headerLeft: () => (
      <Pressable
      style={{marginLeft: 10}}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        {/* <Text>Menu</Text> */}
        <IonIcons name="menu-outline" size={30} />
      </Pressable>
    ), 
  })
  }, []);
  return (
    <>
        
    </>
  )
}
