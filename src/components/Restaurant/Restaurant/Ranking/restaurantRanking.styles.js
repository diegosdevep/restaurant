import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constant/color';

export const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.light,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 150,
  },
  infoContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  medal: {
    marginRight: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: Colors.gray,
    fontSize: 12,
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 5,
  },
});
