import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './mapForm.styles';
import Modal from '../../../shared/modal/Modal';
import MapView, { MapMarker } from 'react-native-maps';
import * as Location from 'expo-location';
import Toast from 'react-native-toast-message';
import { Button } from 'react-native-elements';
import { Colors } from '../../../../constant/color';

const MapForm = ({ show, close, formik }) => {
  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const saveLocation = () => {
    formik.setFieldValue('location', location);
    close();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Toast.show({
          type: 'info',
          position: 'bottom',
          text1: 'You have to go to the app settings and activate the location',
        });
        return;
      }

      const locationTemp = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);

  return (
    <Modal show={show} close={close}>
      <View style={{ minWidth: '90%' }}>
        <MapView
          initialRegion={location}
          showsUserLocation={true}
          style={styles.mapStyle}
          onRegionChange={(locationTemp) => setLocation(locationTemp)}
        >
          <MapMarker draggable coordinate={location} />
        </MapView>

        <View
          style={{
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Button
            title='Save'
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={saveLocation}
          />
          <Button
            title='Cerrar'
            containerStyle={styles.btnContainer}
            buttonStyle={[styles.btn, { backgroundColor: Colors.danger }]}
            onPress={close}
          />
        </View>
      </View>
    </Modal>
  );
};

export default MapForm;
