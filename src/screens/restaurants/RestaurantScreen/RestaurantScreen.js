import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
  doc,
  query,
  onSnapshot,
  collection,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { styles } from './restaurantScreen.styles';

const RestaurantScreen = ({ route }) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setRestaurant(null);
    onSnapshot(doc(db, 'restaurants', route.params.id), (doc) => {
      setRestaurant(doc.data());
    });
  }, [route.params.id]);

  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  );
};

export default RestaurantScreen;
