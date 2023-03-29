import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './info.styles';
import { map } from 'lodash';
import { Icon, ListItem } from 'react-native-elements';
import { Colors } from '../../../../constant/color';
import Map from '../Map/Map';

const Info = ({ restaurant }) => {
  const listInfo = [
    {
      text: restaurant.address,
      iconType: 'material-community',
      iconName: 'map-marker',
    },
    {
      text: restaurant.phone,
      iconType: 'material-community',
      iconName: 'phone',
    },
    {
      text: restaurant.email,
      iconType: 'material-community',
      iconName: 'at',
    },
  ];

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Restaurant Information</Text>
      <Map location={restaurant.location} name={restaurant.name} />

      {map(listInfo, (item, index) => (
        <ListItem key={index} bottomDivider>
          <Icon type={item.iconType} name={item.iconName} color={Colors.dark} />
          <ListItem.Content>
            <ListItem.Title>{item.text}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default Info;
