import React, { useEffect, useState } from 'react';
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { map } from 'lodash';
import { View, Text } from 'react-native';
import { styles } from './reviews.styles';
import { db } from '../../../../firebase/firebase';
import Loading from '../../../shared/loading/Loading';
import { AirbnbRating, Avatar, ListItem } from 'react-native-elements';

const Reviews = ({ idRestaurant }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, 'reviews'),
      where('idRestaurant', '==', idRestaurant),
      orderBy('createdAt', 'desc')
    );

    onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs);
    });
  }, []);

  if (!reviews) return <Loading show text='Loading...' />;

  return (
    <View style={styles.content}>
      {map(reviews, (review) => {
        const data = review.data();

        return (
          <ListItem containerStyle={styles.review} key={data.id} bottomDivider>
            <Avatar source={{ uri: data.avatar }} rounded size={50} />
            <ListItem.Content>
              <ListItem.Title style={styles.text}>{data.title}</ListItem.Title>
              <View style={styles.subtitle}>
                <Text style={styles.comment}>{data.description}</Text>
                <View style={styles.contentRating}>
                  <AirbnbRating
                    starContainerStyle={styles.startContainer}
                    defaultRating={data.rating}
                    showRating={false}
                    size={15}
                    isDisabled
                  />
                  <Text style={styles.date}>
                    {data.createdAt.toDate().toLocaleString()}
                  </Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

export default Reviews;
