import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constant/color';

export const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: 550,
  },
  btnContainer: {
    width: '45%',
    marginTop: 20,
    borderRadius: 6,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: Colors.dark,
    color: Colors.light,
    fontWeight: 'bold',
  },
});
