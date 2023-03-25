import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { styles } from './changePassword.styles';
import { Colors } from '../../../constant/color';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './ChangePassword.data';
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import Toast from 'react-native-toast-message';

const ChangePassword = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const currentUser = getAuth().currentUser;

        const credentials = EmailAuthProvider.credential(
          currentUser.email,
          formValues.password
        );

        reauthenticateWithCredential(currentUser, credentials);

        await updatePassword(currentUser, formValues.newPassword);

        onClose();
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error changing password',
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder='Current Password'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: Colors.dark,
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder='New Password'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: Colors.dark,
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue('newPassword', text)}
        errorMessage={formik.errors.newPassword}
      />
      <Input
        placeholder='Confirm New Password'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: 'material-community',
          name: showPassword ? 'eye-off-outline' : 'eye-outline',
          color: Colors.dark,
          onPress: onShowPassword,
        }}
        onChangeText={(text) =>
          formik.setFieldValue('confirmNewPassword', text)
        }
        errorMessage={formik.errors.confirmNewPassword}
      />
      <Button
        title='Change Password'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default ChangePassword;
