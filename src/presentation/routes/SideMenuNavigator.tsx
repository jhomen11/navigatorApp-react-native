import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors, globalStyles} from '../themes/theme';
import {View, useWindowDimensions} from 'react-native';
import {ButtonTabNavigator} from './ButtonTabsNavigator';
import {IonIcons} from '../components/shared/IonIcons';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustonDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="bookmark-outline" color={color} />
          ),
        }}
        name="Tabs"
        component={ButtonTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="document-attach-outline" color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustonDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 30,
        }}></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
