import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { Colors } from '../../../../constant/color';
import MapForm from '../mapForm/MapForm';
import { styles } from './infoForm.styles';

const InfoForm = (props) => {
  const [showMap, setShowMap] = useState(false);
  const { formik } = props;

  const onOpenMap = () => setShowMap((prevState) => !prevState);

  return (
    <View style={styles.content}>
      <View>
        <Input
          placeholder='Restaurant Name'
          onChangeText={(text) => formik.setFieldValue('name', text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder='Address'
          onChangeText={(text) => formik.setFieldValue('address', text)}
          errorMessage={formik.errors.address}
          rightIcon={{
            type: 'material-community',
            name: 'map-marker-radius',
            color: getColorIconMap(formik),
            onPress: onOpenMap,
          }}
        />
        <Input
          placeholder='Phone'
          onChangeText={(text) => formik.setFieldValue('phone', text)}
          errorMessage={formik.errors.phone}
        />
        <Input
          placeholder='Email'
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder='Description'
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChangeText={(text) => formik.setFieldValue('description', text)}
          errorMessage={formik.errors.description}
        />
      </View>
      <MapForm show={showMap} close={onOpenMap} formik={formik} />
    </View>
  );
};

const getColorIconMap = (formik) => {
  if (formik.errors.location) return Colors.danger;
  if (formik.values.location) return '#00A680';
  return '#C2C2C2';
};

export default InfoForm;
