import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { screenName } from '../../../utils/screenName.js';
import { styles } from './UserGuestScreen.styles.js';

const UserGuestScreen = () => {
  const navigation = useNavigation();

  function goToLogin() {
    navigation.navigate(screenName.account.login);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image
            source={require('../../../../assets/guesstimg.png')}
            style={styles.image}
          />
          <Text style={styles.title}>RestoApp</Text>
          <Text style={styles.description}>
            Únete a nuestra comunidad de amantes de la comida. Descubre los
            mejores restaurantes de la ciudad, lee opiniones de otros usuarios,
            pide comida para llevar o a domicilio y accede a ofertas exclusivas.
            ¡Regístrate ahora!
          </Text>
          <Button
            onPress={goToLogin}
            title='Ver tu Perfil'
            buttonStyle={styles.btnStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserGuestScreen;
