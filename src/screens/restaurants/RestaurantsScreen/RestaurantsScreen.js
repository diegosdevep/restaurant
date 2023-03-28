import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils';
import { Colors } from '../../../constant/color';
import { styles } from './RestaurantScreen.styles';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { query, onSnapshot, collection, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import Loading from '../../../components/shared/loading/Loading';
import ListRestaurants from '../../../components/Restaurant/ListRestaurants/ListRestaurants';

const RestaurantsScreen = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const navigation = useNavigation();

  function goToAddRestaurant() {
    navigation.navigate(screenName.restaurant.addRestaurant);
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'restaurants'));
    orderBy('createdAt', 'desc');

    onSnapshot(q, (snapshopt) => {
      setRestaurants(snapshopt.docs);
    });
  }, []);

  return (
    <View style={styles.content}>
      {!restaurants ? (
        <Loading show text='Loading...' />
      ) : (
        <ListRestaurants restaurants={restaurants} />
      )}

      {currentUser && (
        <Icon
          reverse
          type='material-community'
          name='plus'
          color={Colors.dark}
          containerStyle={styles.btnContainer}
          onPress={goToAddRestaurant}
        />
      )}
    </View>
  );
};

export default RestaurantsScreen;
