import { Icon } from 'react-native-elements';
import { screenName } from './screenName';

export function iconOptions(route, color, size) {
  let iconName;

  if (route.name === screenName.restaurant.tab) iconName = 'compass-outline';
  else if (route.name === screenName.favorites.tab) iconName = 'heart-outline';
  else if (route.name === screenName.ranking.tab) iconName = 'star-outline';
  else if (route.name === screenName.search.tab) iconName = 'magnify';
  else if (route.name === screenName.account.tab) iconName = 'account-outline';
  else iconName = 'alert-circle-outline';

  return (
    <Icon type='material-community' name={iconName} color={color} size={size} />
  );
}
