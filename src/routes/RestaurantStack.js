import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantsScreen from '../screens/restaurants/RestaurantsScreen';
import { screenName } from '../utils';
import AddRestaurantScreen from '../screens/restaurants/AddRestaurantScreen';
import { Colors } from '../constant/color';

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark,
        },
        headerTintColor: Colors.ligth,
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
