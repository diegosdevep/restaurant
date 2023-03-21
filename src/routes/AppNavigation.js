const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
import RestaurantsScreen from '../screens/RestaurantsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AccountScreen from '../screens/AccountScreen';
import RankingScreen from '../screens/RankingScreen';
import SearchScreen from '../screens/SearchScreen';
import { iconOptions, screenName } from '../utils';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00A680',
        tabBarInactiveTintColor: '#646464',
        tabBarIcon: ({ color, size }) => iconOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screenName.restaurant.tab}
        component={RestaurantsScreen}
        options={{ title: 'Restaurants' }}
      />
      <Tab.Screen
        name={screenName.favorites.tab}
        component={FavoritesScreen}
        options={{ title: 'Favorites' }}
      />
      <Tab.Screen
        name={screenName.ranking.tab}
        component={RankingScreen}
        options={{ title: 'Ranking' }}
      />
      <Tab.Screen
        name={screenName.search.tab}
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name={screenName.account.tab}
        component={AccountScreen}
        options={{ title: 'Account' }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
