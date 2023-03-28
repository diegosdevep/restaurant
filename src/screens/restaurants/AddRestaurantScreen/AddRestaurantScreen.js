import React from 'react';
import InfoForm from '../../../components/Restaurant/AddRestaurant/InfoForm/InfoForm';
import { Button } from 'react-native-elements';
import { styles } from './AddRestaurant.styles';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './AddRestaurant.data';
import UploadImageForm from '../../../components/Restaurant/AddRestaurant/UploadImageForm/UploadImageForm';
import PrincipalImage from '../../../components/Restaurant/AddRestaurant/PrincipalImage/PrincipalImage';
import { ScrollView } from 'react-native';

const AddRestaurantScreen = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      console.log(formValues);
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
