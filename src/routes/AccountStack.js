import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../utils';
import AccountScreen from '../screens/account/AccountScreen';
import { Colors } from '../constant/color';
import LoginScreen from '../screens/account/login/LoginScreen';
import RegisterScreen from '../screens/account/register/RegisterScreen';

const Stack = createNativeStackNavigator();

export function AccountStack() {
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
        name={screenName.account.account}
        component={AccountScreen}
        options={{ title: 'Account' }}
      />
      <Stack.Screen
        name={screenName.account.login}
        component={LoginScreen}
        options={{ title: 'Log in' }}
      />
      <Stack.Screen
        name={screenName.account.register}
        component={RegisterScreen}
        options={{ title: 'Create your Account' }}
      />
    </Stack.Navigator>
  );
}
