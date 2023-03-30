import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './notFoundRestaurant.styles';

const NotFoundRestaurant = () => {
  return (
    <View style={styles.content}>
      <Icon type='material-community' name='alert-outline' size={80} />
      <Text style={styles.text}>You have no restaurants in your list</Text>
    </View>
  );
};

export default NotFoundRestaurant;
