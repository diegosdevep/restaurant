import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constant/color';

export const styles = StyleSheet.create({
  viewImage: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
  },
  containerIcon: {
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#c2c2c2',
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  error: {
    marginHorizontal: 20,
    marginTop: 10,
    color: Colors.danger,
    paddingLeft: 6,
    fontSize: 12,
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
});
