import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../utils';
import AccountScreen from '../screens/account/AccountScreen';
import { Colors } from '../constant/color';

const Stack = createNativeStackNavigator();

export function AccountStack() {
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
        name={screenName.account.account}
        component={AccountScreen}
        options={{ title: ' Account' }}
      />
    </Stack.Navigator>
  );
}
