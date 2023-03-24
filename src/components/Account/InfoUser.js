import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getAuth, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { styles } from './infouser.styles';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const InfoUser = ({ setLoading, setLoadingText }) => {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) uploadImage(result.assets[0].uri);
  };

  const uploadImage = async (uri) => {
    setLoading(true);
    setLoadingText('Loading');

    const blobResponse = await axios.get(uri, { responseType: 'blob' });
    const blob = blobResponse.data;

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        updatePhotoUrl(snapshot.metadata.fullPath);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);
    const auth = getAuth();

    updateProfile(auth.currentUser, { photoURL: imageUrl });

    setAvatar(imageUrl);
    setLoading(false);
    setLoadingText('');
  };

  return (
    <View style={styles.content}>
      <Avatar
        size='large'
        rounded
        containerStyle={styles.avatar}
        icon={{ type: 'material', name: 'person' }}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || 'Anonimo'}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

export default InfoUser;
