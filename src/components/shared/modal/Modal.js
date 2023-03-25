import React from 'react';
import { View, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import { styles } from './modal.styles';

const Modal = (props) => {
  const { children, show, close } = props;

  return (
    <Overlay isVisible={show} onBackdropPress={close} style={styles.overlay}>
      {children}
    </Overlay>
  );
};

export default Modal;
