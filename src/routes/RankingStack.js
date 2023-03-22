import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RankingScreen from '../screens/RankingScreen';
import { screenName } from '../utils';
import { Colors } from '../constant/color';

const Stack = createNativeStackNavigator();

export function RankingStack() {
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
        name={screenName.ranking.ranking}
        component={RankingScreen}
        options={{ title: ' Ranking' }}
      />
    </Stack.Navigator>
  );
}
