import React, { useEffect } from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../themes/theme';
import {DrawerActions, NavigationProp, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
   navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{marginLeft: 10}}>
          <Text>Menu</Text>
        </Pressable>
      ),
    })
  }, [])
  

  return (
    <View style={globalStyles.container}>
      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable> */}

      <PrimaryButton
        label="Productos"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
