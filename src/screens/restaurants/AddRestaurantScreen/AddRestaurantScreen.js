import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';
import { initialValues, validationSchema } from './AddRestaurant.data';
import InfoForm from '../../../components/Restaurant/AddRestaurant/InfoForm/InfoForm';
import UploadImageForm from '../../../components/Restaurant/AddRestaurant/UploadImageForm/UploadImageForm';
import PrincipalImage from '../../../components/Restaurant/AddRestaurant/PrincipalImage/PrincipalImage';
import { styles } from './AddRestaurant.styles';

const AddRestaurantScreen = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const newData = formValues;
        newData.id = uuid();
        newData.createdAt = new Date();

        await setDoc(doc(db, 'restaurants', newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PrincipalImage formik={formik} />
      <InfoForm formik={formik} />
      <UploadImageForm formik={formik} />
      <Button
        title='Add Restaurant'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
};

export default AddRestaurantScreen;
