import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import { screenName } from '../utils';
import { Colors } from '../constant/color';

const Stack = createNativeStackNavigator();

export function SearchStack() {
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
        name={screenName.search.search}
        component={SearchScreen}
        options={{ title: ' Search' }}
      />
    </Stack.Navigator>
  );
}
