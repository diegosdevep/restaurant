import { View, Text } from 'react-native';
import React from 'react';
import { Icon, ListItem } from 'react-native-elements';
import { map } from 'lodash';
import { Colors } from '../../constant/color';

const AccountOptions = () => {
  const menuOptions = getMenuOptions();

  return (
    <View>
      {map(menuOptions, (menu, index) => {
        return (
          <ListItem key={index} bottomDivider onPress={menu.onPress}>
            <Icon
              type={menu.iconType}
              name={menu.iconNameLeft}
              color={menu.iconColorLeft}
            />
            <ListItem.Content>
              <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
            <Icon
              type={menu.iconType}
              name={menu.iconNameRight}
              color={menu.iconColorRight}
            />
          </ListItem>
        );
      })}
    </View>
  );
};

function getMenuOptions() {
  return [
    {
      title: 'Change Name and Lastname',
      iconType: 'material-community',
      iconNameLeft: 'account-circle',
      iconColorLeft: Colors.dark,
      iconNameRight: 'chevron-right',
      iconColorRight: Colors.dark,
      onPress: () => console.log('change name'),
    },
    {
      title: 'Change Email',
      iconType: 'material-community',
      iconNameLeft: 'at',
      iconColorLeft: Colors.dark,
      iconNameRight: 'chevron-right',
      iconColorRight: Colors.dark,
      onPress: () => console.log('change email'),
    },
    {
      title: 'Change Password',
      iconType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconColorLeft: Colors.dark,
      iconNameRight: 'chevron-right',
      iconColorRight: Colors.dark,
      onPress: () => console.log('change password'),
    },
  ];
}

export default AccountOptions;
