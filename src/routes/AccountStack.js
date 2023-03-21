import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../utils';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.account.account}
        component={AccountScreen}
        options={{ title: ' Account' }}
      />
    </Stack.Navigator>
  );
}
