import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcons } from '../../components/shared/IonIcons';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      {/* <Icon name="rocket-outline" size={100} /> */}
      <IonIcons name="rocket-outline" />
    </View>
  );
};