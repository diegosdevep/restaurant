import { StyleSheet } from 'react-native';
import { Colors } from '../../../constant/color';

export const styles = StyleSheet.create({
  content: {
    minWidth: '90%',
    alignContent: 'center',
    paddingVertical: 15,
  },
  input: {
    marginBottom: 10,
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
