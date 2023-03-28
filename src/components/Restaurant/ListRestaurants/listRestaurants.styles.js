import { StyleSheet } from 'react-native';
import { Colors } from '../../../constant/color';

export const styles = StyleSheet.create({
  restaurant: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  info: {
    color: Colors.gray,
    paddingRight: 100,
    paddingTop: 3,
  },
});
