import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Image, Rating } from 'react-native-elements';
import { styles } from './restaurantRanking.styles';
import { Colors } from '../../../../constant/color';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../utils/screenName';

const RestaurantRanking = ({ restaurant, index }) => {
  const navigation = useNavigation();

  const goToRestaurant = () => {
    navigation.navigate(screenName.restaurant.tab, {
      screen: screenName.restaurant.restaurant,
      params: { id: restaurant.id },
    });
  };

  const renderMedal = () => {
    if (index > 2) return null;

    let color = '';
    if (index === 0) color = '#FFD700';
    if (index === 1) color = '#BEBEBE';
    if (index === 2) color = '#CD7F32';

    return (
      <Icon
        type='material-community'
        name='medal-outline'
        color={color}
        containerStyle={styles.medal}
      />
    );
  };

  return (
    <TouchableOpacity onPress={goToRestaurant}>
      <View style={styles.content}>
        <Image source={{ uri: restaurant.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <View style={styles.nameContent}>
            {renderMedal()}
            <Text style={styles.name}>{restaurant.name}</Text>
          </View>
          <Rating
            imageSize={15}
            readonly
            startingValue={restaurant.ratingMedia}
            tintColor={Colors.light}
          />
        </View>
        <Text style={styles.description}>{restaurant.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantRanking;
