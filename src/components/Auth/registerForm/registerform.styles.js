import { StyleSheet } from 'react-native';
import { Colors } from '../../../constant/color';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: '5%',
  },
  input: {
    width: '100%',
    marginTop: 20,
  },
  icon: {
    color: Colors.dark,
  },
  btnContainer: {
    width: '85%',
    marginTop: 20,
    borderRadius: 6,
  },
  btn: {
    backgroundColor: Colors.dark,
    color: Colors.light,
    fontWeight: 'bold',
  },
});
