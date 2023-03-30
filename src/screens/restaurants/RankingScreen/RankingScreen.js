import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  query,
  onSnapshot,
  collection,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import RestaurantRanking from '../../../components/Restaurant/Restaurant/Ranking/RestaurantRanking';
import { map } from 'lodash';

const RankingScreen = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, 'restaurants'),
      orderBy('ratingMedia', 'desc'),
      limit(5)
    );

    onSnapshot(q, (snapshot) => {
      setRestaurants(snapshot.docs);
    });
  }, []);
  return (
    <ScrollView>
      {map(restaurants, (restaurant, index) => (
        <RestaurantRanking
          key={index}
          index={index}
          restaurant={restaurant.data()}
        />
      ))}
    </ScrollView>
  );
};

export default RankingScreen;
