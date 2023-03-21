const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
import { iconOptions, screenName } from '../utils';
import { RestaurantStack } from './RestaurantStack';
import { FavoritesStack } from './FavoritesStack';
import { RankingStack } from './RankingStack';
import { SearchStack } from './SearchStack';
import { AccountStack } from './AccountStack';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00A680',
        tabBarInactiveTintColor: '#646464',
        tabBarIcon: ({ color, size }) => iconOptions(route, color, size),
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={screenName.restaurant.tab}
        component={RestaurantStack}
        options={{ title: 'Restaurants' }}
      />
      <Tab.Screen
        name={screenName.favorites.tab}
        component={FavoritesStack}
        options={{ title: 'Favorites' }}
      />
      <Tab.Screen
        name={screenName.ranking.tab}
        component={RankingStack}
        options={{ title: 'Ranking' }}
      />
      <Tab.Screen
        name={screenName.search.tab}
        component={SearchStack}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name={screenName.account.tab}
        component={AccountStack}
        options={{ title: 'Account' }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
