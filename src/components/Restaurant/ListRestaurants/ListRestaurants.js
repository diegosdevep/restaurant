import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { styles } from './listRestaurants.styles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/screenName';

const ListRestaurants = ({ restaurants }) => {
  const navigation = useNavigation();

  const goToRestaurant = (restaurant) => {
    navigation.navigate(screenName.restaurant.restaurant, {
      id: restaurant.id,
    });
  };

  return (
    <FlatList
      data={restaurants}
      renderItem={(doc) => {
        const restaurant = doc.item.data();
        return (
          <TouchableOpacity onPress={() => goToRestaurant(restaurant)}>
            <View style={styles.restaurant}>
              <Image
                source={{ uri: restaurant.images[0] }}
                style={styles.image}
              />
              <View>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.info}>{restaurant.address}</Text>
                <Text style={styles.info}>{restaurant.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ListRestaurants;
