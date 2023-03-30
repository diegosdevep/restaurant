import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  doc,
  onSnapshot,
  query,
  collection,
  where,
  getDoc,
} from 'firebase/firestore';
import UserNotLogged from '../../../components/Favorites/UserNotLogged/UserNotLogged';
import { size, map } from 'lodash';
import { db } from '../../../firebase/firebase';
import Loading from '../../../components/shared/loading/Loading';
import NotFoundRestaurant from '../../../components/Favorites/NotFoundRestaurant/NotFoundRestaurant';
import RestaurantFavorite from '../../../components/Favorites/RestaurantFavorite/RestaurantFavorite';

const FavoritesScreen = () => {
  const [hasLogged, setHasLogged] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setHasLogged(!!user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const userId = auth.currentUser?.uid;

    if (!userId) return;
    const q = query(collection(db, 'favorites'), where('idUser', '==', userId));

    onSnapshot(q, async (snapshot) => {
      let restaurantArray = [];
      for await (const item of snapshot.docs) {
        const data = item.data();
        const docRef = doc(db, 'restaurants', data.idRestaurant);
        const docSnap = await getDoc(docRef);
        const newData = docSnap.data();
        newData.idFavorite = data.id;

        restaurantArray.push(newData);
      }
      setRestaurants(restaurantArray);
    });
  }, [auth.currentUser]);

  if (!hasLogged) return <UserNotLogged />;

  if (!restaurants) return <Loading show text='Loading...' />;

  if (size(restaurants) === 0) return <NotFoundRestaurant />;

  return (
    <ScrollView>
      {map(restaurants, (restaurant) => {
        return (
          <RestaurantFavorite key={restaurant.name} restaurant={restaurant} />
        );
      })}
    </ScrollView>
  );
};

export default FavoritesScreen;
