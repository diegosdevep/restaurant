import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constant/color';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: '5%',
    justifyContent: 'space-around',
  },
  ratingContent: {
    height: 160,
    justifyContent: 'center',
  },
  comment: {
    height: 150,
  },
  btnContainer: {
    width: '85%',
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
