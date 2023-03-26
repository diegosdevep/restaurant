import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils';
import { Colors } from '../../../constant/color';
import { styles } from './RestaurantScreen.styles';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const RestaurantsScreen = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigation = useNavigation();

  function goToAddRestaurant() {
    navigation.navigate(screenName.restaurant.addRestaurant);
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <View style={styles.content}>
      <Text>RestaurantsScreen</Text>

      {currentUser && (
        <Icon
          reverse
          type='material-community'
          name='plus'
          color={Colors.dark}
          containerStyle={styles.btnContainer}
          onPress={goToAddRestaurant}
        />
      )}
    </View>
  );
};

export default RestaurantsScreen;
