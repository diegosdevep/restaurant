import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { styles } from './restaurantFavorite.styles';
import { Colors } from '../../../constant/color';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/screenName';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

const RestaurantFavorite = ({ restaurant }) => {
  const navigation = useNavigation();

  const goToRestaurant = () => {
    navigation.navigate(screenName.restaurant.tab, {
      screen: screenName.restaurant.restaurant,
      params: {
        id: restaurant.id,
      },
    });
  };

  const removeFavorite = async () => {
    try {
      await deleteDoc(doc(db, 'favorites', restaurant.idFavorite));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={goToRestaurant}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: restaurant.images[0] }} />
        <View style={styles.infoContent}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Icon
            type='material-community'
            name='heart'
            color={Colors.danger}
            size={35}
            containerStyle={styles.iconContent}
            onPress={removeFavorite}
            key={`icon_${restaurant.idFavorite}`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantFavorite;
