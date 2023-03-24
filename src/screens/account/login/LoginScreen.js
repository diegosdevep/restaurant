import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';
import { styles } from './login.styles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/screenName';
import LoginForm from '../../../components/Auth/loginForm/LoginForm';

const LoginScreen = () => {
  const navigation = useNavigation();

  function goToRegister() {
    navigation.navigate(screenName.account.register);
  }

  return (
    <ScrollView centerContent={true}>
      <Image
        source={require('../../../../assets/5tenedores.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <Text onPress={goToRegister} style={styles.textRegister}>
          You don't have an account yet?{' '}
          <Text style={styles.btnRegister}>Sign up</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
