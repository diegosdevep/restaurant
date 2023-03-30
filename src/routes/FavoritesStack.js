import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../utils';
import { Colors } from '../constant/color';
import FavoritesScreen from '../screens/restaurants/FavoriteScreen/FavoritesScreen';

const Stack = createNativeStackNavigator();

export function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark,
        },
        headerTintColor: Colors.light,
      }}
    >
      <Stack.Screen
        name={screenName.favorites.favorites}
        component={FavoritesScreen}
        options={{ title: ' Favorites' }}
      />
    </Stack.Navigator>
  );
}
