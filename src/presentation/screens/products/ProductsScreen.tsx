import {Text, View} from 'react-native';
import {globalStyles} from '../../themes/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
  },
  {
    id: 4,
    name: 'Product 4',
  },
  {
    id: 5,
    name: 'Product 5',
  },
  {
    id: 6,
    name: 'Product 6',
  },
];

export const ProductsScreens = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() => {navigation.navigate('Product', {id: item.id, name: item.name})}}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Productos</Text>
      <PrimaryButton
        onPress={() => {navigation.navigate('Settings')}}
        label='Ajustes'
      />
    </View>
  );
};
