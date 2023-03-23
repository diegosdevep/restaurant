import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';
import { styles } from './register.styles';
import RegisterForm from '../../../components/shared/Auth/registerForm/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView centerContent={true}>
      <Image
        source={require('../../../../assets/5tenedores.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
