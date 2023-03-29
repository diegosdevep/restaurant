import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constant/color';

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: 15,
  },
  review: {
    paddingVertical: 20,
  },
  text: {
    fontWeight: 'bold',
  },
  subtitle: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
  },
  comment: {
    paddingRight: 50,
  },
  contentRating: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  startContainer: {
    flex: 1,
    height: 10,
    width: '100%',
    justifyContent: 'flex-start',
  },
  date: {
    fontSize: 12,
    color: Colors.gray,
  },
});
