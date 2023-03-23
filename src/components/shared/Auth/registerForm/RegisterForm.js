import { View, Text } from 'react-native';
import React from 'react';
import { Button, Icon, Input } from 'react-native-elements';
import { styles } from './registerform.styles';

const RegisterForm = () => {
  return (
    <View style={styles.content}>
      <Input
        placeholder='Email'
        containerStyle={styles.input}
        rightIcon={
          <Icon type='material-community' name='at' style={styles.icon} />
        }
      />
      <Input
        placeholder='Password'
        containerStyle={styles.input}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type='material-community'
            name='eye-outline'
            style={styles.icon}
          />
        }
      />
      <Input
        placeholder='Repeat Password'
        containerStyle={styles.input}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type='material-community'
            name='eye-outline'
            style={styles.icon}
          />
        }
      />
      <Button
        title='Register'
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
      />
    </View>
  );
};

export default RegisterForm;
