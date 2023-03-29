import React from 'react';
import { View, Text } from 'react-native';
import { Rating } from 'react-native-elements';
import { styles } from './header.styles';
import { Colors } from '../../../../constant/color';

const Header = ({ restaurant }) => {
  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Rating
          imageSize={20}
          readOnly
          startingValue={4}
          tintColor={Colors.light}
        />
      </View>
      <Text style={styles.description}>{restaurant.description}</Text>
    </View>
  );
};

export default Header;
