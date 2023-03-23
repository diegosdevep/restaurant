import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';
import { styles } from './login.styles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/screenName';

const LoginScreen = () => {
  const navigation = useNavigation();

  function goToRegister() {
    navigation.navigate(screenName.account.register);
  }

  return (
    <ScrollView>
      <Image
        source={require('../../../../assets/5tenedores.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text onPress={goToRegister}>Register</Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
