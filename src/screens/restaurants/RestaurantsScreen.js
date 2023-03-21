import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils';

const RestaurantsScreen = () => {
  const navigation = useNavigation();

  function goToAddRestaurant() {
    navigation.navigate(screenName.restaurant.addRestaurant);

    // Para navegar a otro stack
    // navigation.navigate(screenName.account.tab, {screen: screenName.account.account})
  }

  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <Button title='Add Restaurant' onPress={goToAddRestaurant} />
    </View>
  );
};

export default RestaurantsScreen;
