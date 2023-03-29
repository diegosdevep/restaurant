import React, { useState } from 'react';
import { View } from 'react-native';
import { size } from 'lodash';
import { styles } from './carousel.styles';
import CarouselSnap, { Pagination } from 'react-native-snap-carousel';
import { Image } from 'react-native-elements';

const Carousel = ({ arrayImages, width, height, hideDots }) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={{ height, width }} />
  );

  const pagination = () => {
    return (
      <Pagination
        dotsLength={size(arrayImages)}
        activeDotIndex={activeDotIndex}
        activeDotScale={1}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dotStyle}
      />
    );
  };

  return (
    <View style={styles.content}>
      <CarouselSnap
        layout='default'
        data={arrayImages}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveDotIndex(index)}
      />
      {!hideDots && pagination()}
    </View>
  );
};

export default Carousel;
