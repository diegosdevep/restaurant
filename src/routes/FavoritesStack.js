import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import { screenName } from '../utils';
import { Colors } from '../constant/color';

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
