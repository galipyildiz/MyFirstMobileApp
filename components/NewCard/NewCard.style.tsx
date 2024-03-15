import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inner: {
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {},
  author: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
