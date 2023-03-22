import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import { styles } from './loading.styles';
import { Colors } from '../../../constant/color';

const Loading = (props) => {
  const { show, text } = props;

  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size='large' color={Colors.ligth} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
};

Loading.defaultProps = {
  show: false,
};

export default Loading;
