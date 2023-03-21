import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantsScreen from '../screens/restaurants/RestaurantsScreen';
import { screenName } from '../utils';
import AddRestaurantScreen from '../screens/restaurants/AddRestaurantScreen';

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: ' RestaurantsStack' }}
      />
      <Stack.Screen
        name={screenName.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: ' Add Restaurant' }}
      />
    </Stack.Navigator>
  );
}
