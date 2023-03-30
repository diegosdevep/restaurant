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
  content: {
    marginHorizontal: '2.5%',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: '5%',
  },
  btnStyle: {
    width: '85%',
    backgroundColor: Colors.dark,
    color: Colors.light,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    borderRadius: 6,
  },
});
