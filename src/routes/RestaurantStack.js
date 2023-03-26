import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../utils';
import { Colors } from '../constant/color';
import RestaurantsScreen from '../screens/restaurants/RestaurantScreen/RestaurantsScreen';
import AddRestaurantScreen from '../screens/restaurants/AddRestaurantScreen/AddRestaurantScreen';

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
