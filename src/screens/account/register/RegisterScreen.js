import { View } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';
import { styles } from './register.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../../components/Auth/registerForm/RegisterForm';

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
