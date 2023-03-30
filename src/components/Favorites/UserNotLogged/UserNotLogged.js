import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './userNotLogged.styles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/screenName';
import { Button, Icon } from 'react-native-elements';

const UserNotLogged = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screenName.account.tab, {
      screen: screenName.account.login,
    });
  };

  return (
    <View style={styles.content}>
      <Icon type='material-community' name='alert-outline' size={80} />
      <Text style={styles.info}>
        You need to be logged in to see this section
      </Text>
      <Button
        title='Go to login'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={goToLogin}
      />
    </View>
  );
};

export default UserNotLogged;
