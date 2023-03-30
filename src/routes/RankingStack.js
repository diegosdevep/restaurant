import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../utils';
import { Colors } from '../constant/color';
import RankingScreen from '../screens/restaurants/RankingScreen/RankingScreen';

const Stack = createNativeStackNavigator();

export function RankingStack() {
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
        name={screenName.ranking.ranking}
        component={RankingScreen}
        options={{ title: ' Ranking' }}
      />
    </Stack.Navigator>
  );
}
