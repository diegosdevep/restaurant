import { View } from 'react-native';
import React from 'react';
import InfoForm from '../../../components/Restaurant/AddRestaurant/InfoForm/InfoForm';
import { Button } from 'react-native-elements';
import { styles } from './AddRestaurant.styles';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './AddRestaurant.data';

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
    <View>
      <InfoForm formik={formik} />
      <Button
        title='Add Restaurant'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default AddRestaurantScreen;
