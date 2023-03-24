import { StyleSheet } from 'react-native';
import { Colors } from '../../constant/color';

export const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 30,
  },
  avatar: {
    marginRight: 20,
    backgroundColor: Colors.dark,
  },
  displayName: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
