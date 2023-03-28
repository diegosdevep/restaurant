import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { styles } from './principalImage.styles';

const PrincipalImage = ({ formik }) => {
  const primaryImage = formik.values.images[0];
  console.log(primaryImage);

  return (
    <View style={styles.content}>
      <Image
        source={primaryImage ? { uri: primaryImage } : ''}
        style={styles.image}
      />
    </View>
  );
};

export default PrincipalImage;
