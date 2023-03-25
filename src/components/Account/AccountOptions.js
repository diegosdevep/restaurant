import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Icon, ListItem } from 'react-native-elements';
import { map } from 'lodash';
import { Colors } from '../../constant/color';
import Modal from '../shared/modal/Modal';
import ChangeDisplayName from './changeDisplayName/ChangeDisplayName';
import ChangeEmail from './changeEmail/ChangeEmail';

const AccountOptions = ({ onReload }) => {
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const onCloseModal = () => setShowModal((prevState) => !prevState);

  const selectedComponent = (key) => {
    console.log(key);
    if (key === 'displayName') {
      setRenderComponent(
        <ChangeDisplayName onClose={onCloseModal} onReload={onReload} />
      );
    }
    if (key === 'email') {
      setRenderComponent(
        <ChangeEmail onClose={onCloseModal} onReload={onReload} />
      );
    }
    if (key === 'password') {
      selectedComponent(<Text>Cambiando password</Text>);
    }

    onCloseModal();
  };

  const menuOptions = getMenuOptions(selectedComponent);

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
      <Modal show={showModal} close={() => onCloseModal()}>
        {renderComponent}
      </Modal>
    </View>
  );
};

function getMenuOptions(selectedComponent) {
  return [
    {
      title: 'Change Name and Lastname',
      iconType: 'material-community',
      iconNameLeft: 'account-circle',
      iconColorLeft: Colors.dark,
      iconNameRight: 'chevron-right',
      iconColorRight: Colors.dark,
      onPress: () => selectedComponent('displayName'),
    },
    {
      title: 'Change Email',
      iconType: 'material-community',
      iconNameLeft: 'at',
      iconColorLeft: Colors.dark,
      iconNameRight: 'chevron-right',
      iconColorRight: Colors.dark,
      onPress: () => selectedComponent('email'),
    },
    {
      title: 'Change Password',
      iconType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconColorLeft: Colors.dark,
      iconNameRight: 'chevron-right',
      iconColorRight: Colors.dark,
      onPress: () => selectedComponent('password'),
    },
  ];
}

export default AccountOptions;
