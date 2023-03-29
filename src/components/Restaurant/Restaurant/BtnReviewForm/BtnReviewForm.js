import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Button } from 'react-native-elements';
import { styles } from './btnReviewForm.styles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../utils/screenName';
import { Colors } from '../../../../constant/color';

const BtnReviewForm = ({ idRestaurant }) => {
  const [hasLogged, setHasLogged] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screenName.account.tab, {
      screen: screenName.account.login,
    });
  };

  const goToAddReview = () => {
    navigation.navigate(screenName.restaurant.addReviewRestaurant, {
      idRestaurant,
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  return (
    <View style={styles.content}>
      {hasLogged ? (
        <Button
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          title='Write an opinion'
          icon={{
            type: 'material-community',
            name: 'square-edit-outline',
            color: Colors.light,
          }}
          onPress={goToAddReview}
        />
      ) : (
        <Text style={styles.text} onPress={goToLogin}>
          To write an opinion it is necessary to be logged in,{' '}
          <Text style={styles.span}>HERE</Text> to Log In
        </Text>
      )}
    </View>
  );
};

export default BtnReviewForm;
