import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './map.styles';
import openMap from 'react-native-open-maps';

const Map = ({ location, name }) => {
  const openAppMap = () => {
    openMap({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 19,
      query: name,
    });
  };

  return (
    <MapView
      style={styles.content}
      initialRegion={location}
      onPress={openAppMap}
    >
      <Marker coordinate={location} />
    </MapView>
  );
};

export default Map;
