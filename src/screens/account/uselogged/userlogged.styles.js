import { StyleSheet } from 'react-native';
import { Colors } from '../../../constant/color';

export const styles = StyleSheet.create({
  btnContainer: {
    width: '85%',
    marginTop: 20,
    borderRadius: 6,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: Colors.danger,
    color: Colors.light,
    fontWeight: 'bold',
  },
});
