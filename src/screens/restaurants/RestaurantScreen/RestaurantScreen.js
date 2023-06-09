import React, { useEffect, useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { styles } from './restaurantScreen.styles';
import Carousel from '../../../components/shared/carousel/Carousel';
import Loading from '../../../components/shared/loading/Loading';
import Header from '../../../components/Restaurant/Restaurant/Header/Header';
import Info from '../../../components/Restaurant/Restaurant/Info/Info';
import BtnReviewForm from '../../../components/Restaurant/Restaurant/BtnReviewForm/BtnReviewForm';
import Reviews from '../../../components/Restaurant/Restaurant/Reviews/Reviews';
import BtnFavorites from '../../../components/Restaurant/Restaurant/BtnFavorites/BtnFavorites';

const RestaurantScreen = ({ route }) => {
  const [restaurant, setRestaurant] = useState(null);

  const { width } = Dimensions.get('window');

  useEffect(() => {
    setRestaurant(null);
    onSnapshot(doc(db, 'restaurants', route.params.id), (doc) => {
      setRestaurant(doc.data());
    });
  }, [route.params.id]);

  if (!restaurant) return <Loading show text='Loading restaurant' />;

  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={restaurant.images} width={width} height={250} />
      <Header restaurant={restaurant} />
      <Info restaurant={restaurant} />
      <BtnReviewForm idRestaurant={restaurant.id} />
      <Reviews idRestaurant={route.params.id} />
      <BtnFavorites idRestaurant={route.params.id} />
    </ScrollView>
  );
};

export default RestaurantScreen;
