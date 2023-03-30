import { StyleSheet } from 'react-native';
import { Colors } from '../../../constant/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 150,
  },
  content: {
    marginHorizontal: '4%',
  },
  textRegister: {
    marginTop: 15,
    marginHorizontal: '5%',
  },
  btnRegister: {
    fontWeight: 'bold',
    color: Colors.dark,
  },
});
