import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../utils';
import { Colors } from '../constant/color';
import AddRestaurantScreen from '../screens/restaurants/AddRestaurantScreen/AddRestaurantScreen';
import RestaurantsScreen from '../screens/restaurants/RestaurantsScreen/RestaurantsScreen';
import RestaurantScreen from '../screens/restaurants/RestaurantScreen/RestaurantScreen';

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
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
        name={screenName.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: ' Restaurants' }}
      />
      <Stack.Screen
        name={screenName.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: ' Add Restaurant' }}
      />
      <Stack.Screen
        name={screenName.restaurant.restaurant}
        component={RestaurantScreen}
        options={{ title: 'Restaurant' }}
      />
    </Stack.Navigator>
  );
}
