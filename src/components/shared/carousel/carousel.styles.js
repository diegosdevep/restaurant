import { StyleSheet } from 'react-native';
import { Colors } from '../../../constant/color';

export const styles = StyleSheet.create({
  content: {
    position: 'relative',
  },
  containerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 70,
    paddingBottom: 0,
  },
  dotStyle: {
    backgroundColor: Colors.light,
  },
});
