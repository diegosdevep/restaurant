import React, { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { map, filter } from 'lodash';
import { Colors } from '../../../../constant/color';
import { styles } from './uploadImageForm.styles';
import Loading from '../../../shared/loading/Loading';
import axios from 'axios';

const UploadImageForm = ({ formik }) => {
  const [isLoading, setIsLoading] = useState(false);

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setIsLoading(true);
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await axios.get(uri, { responseType: 'blob' });
    const blob = response.data;

    const storage = getStorage();
    const storageRef = ref(storage, `restaurants/${uuid()}`);

    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        updatePhotoRestaurant(snapshot.metadata.fullPath);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePhotoRestaurant = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);

    formik.setFieldValue('images', [...formik.values.images, imageUrl]);

    setIsLoading(false);
  };

  const removeImage = (img) => {
    Alert.alert(
      'Delete image',
      'Are you sure to delete this image?',
      [
        { text: 'Canceled', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            const storage = getStorage();
            const imageRef = ref(storage, img);
            try {
              await deleteObject(imageRef);
            } catch (error) {
              console.log('Error deleting image: ', error);
            }

            const result = filter(
              formik.values.images,
              (image) => image !== img
            );
            formik.setFieldValue('images', result);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <ScrollView
        style={styles.viewImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Icon
          type='material-community'
          name='camera'
          color={Colors.gray}
          containerStyle={styles.containerIcon}
          onPress={openGallery}
        />

        {map(formik.values.images, (image) => (
          <Avatar
            key={image}
            source={{ uri: image }}
            containerStyle={styles.imageStyle}
            onPress={() => removeImage(image)}
          />
        ))}
      </ScrollView>
      <Text style={styles.error}>{formik.errors.images}</Text>
      <Loading show={isLoading} text='Loading Image' />
    </>
  );
};

export default UploadImageForm;
