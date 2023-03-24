import { View } from 'react-native';
import React, { useState } from 'react';
import { Button, Icon, Input } from 'react-native-elements';
import { styles } from './loginform.styles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/screenName';
import { initialValues, validationSchema } from './LoginForm.data';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screenName.account.account);
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Incorrect user or password',
        });
      }
    },
  });

  const showHidePassword = () => setShowPassword((prevState) => !prevState);

  return (
    <View style={styles.content}>
      <Input
        containerStyle={styles.input}
        rightIcon={
          <Icon type='material-community' name='at' iconStyle={styles.icon} />
        }
        placeholder='Email'
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />
      <Input
        containerStyle={styles.input}
        placeholder='Password'
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.icon}
            onPress={showHidePassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title='Login'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default LoginForm;
