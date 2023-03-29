import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { size } from 'lodash';
import { db } from '../../../../firebase/firebase';
import { Button } from 'react-native-elements';
import { styles } from './btnReviewForm.styles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../../utils/screenName';
import { Colors } from '../../../../constant/color';

const BtnReviewForm = ({ idRestaurant }) => {
  const [hasLogged, setHasLogged] = useState(false);
  const [hasReview, setHasReview] = useState(false);

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
    if (hasLogged) {
      const q = query(
        collection(db, 'reviews'),
        where('idRestaurant', '==', idRestaurant),
        where('idUser', '==', auth.currentUser.uid)
      );
      onSnapshot(q, (snapshot) => {
        if (size(snapshot.docs) > 0) setHasReview(true);
      });
    }
  }, [hasLogged]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  if (hasLogged && hasReview) {
    return (
      <View style={styles.content}>
        <Text style={styles.textSendReview}>
          You have already done a review
        </Text>
      </View>
    );
  }

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
