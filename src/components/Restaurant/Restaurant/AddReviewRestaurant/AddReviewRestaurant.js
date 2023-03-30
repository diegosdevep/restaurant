import React from 'react';
import { View } from 'react-native';
import { AirbnbRating, Button, Input } from 'react-native-elements';
import { styles } from './addReviewRestaurant.styles';
import { initialValues, validationSchema } from './AddReviewRestaurant.data';
import { map, mean } from 'lodash';
import { useFormik } from 'formik';
import { getAuth } from 'firebase/auth';
import {
  doc,
  collection,
  query,
  setDoc,
  where,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { v4 as uuid } from 'uuid';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const AddReviewRestaurant = ({ route }) => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        const idDoc = uuid();
        const newData = formValue;

        newData.id = idDoc;
        newData.idRestaurant = route.params.idRestaurant;
        newData.idUser = auth.currentUser.uid;
        newData.avatar = auth.currentUser.photoURL;
        newData.createdAt = new Date();

        await setDoc(doc(db, 'reviews', idDoc), newData);
        await updateRestaurant();
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error sending review',
        });
      }
    },
  });

  const updateRestaurant = async () => {
    const q = query(
      collection(db, 'reviews'),
      where('idRestaurant', '==', route.params.idRestaurant)
    );
    onSnapshot(q, async (snapshot) => {
      const reviews = snapshot.docs;
      const arrayStars = map(reviews, (review) => review.data().rating);

      const media = mean(arrayStars);

      const restaurantRef = doc(db, 'restaurants', route.params.idRestaurant);

      await updateDoc(restaurantRef, {
        ratingMedia: media,
      });

      navigation.goBack();
    });
  };

  return (
    <View style={styles.content}>
      <View>
        <View style={styles.ratingContent}>
          <AirbnbRating
            count={5}
            reviews={['Very Poor', 'Poor', 'Average', 'Very Good', 'Excellent']}
            defaultRating={formik.values.rating}
            size={35}
            onFinishRating={(rating) => formik.setFieldValue('rating', rating)}
          />
        </View>

        <View>
          <Input
            placeholder='Title'
            onChangeText={(text) => formik.setFieldValue('title', text)}
            errorMessage={formik.errors.title}
          />
          <Input
            placeholder='Comment'
            multiline
            inputContainerStyle={styles.comment}
            onChangeText={(text) => formik.setFieldValue('description', text)}
            errorMessage={formik.errors.description}
          />
        </View>
      </View>
      <Button
        title='Send Review'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default AddReviewRestaurant;