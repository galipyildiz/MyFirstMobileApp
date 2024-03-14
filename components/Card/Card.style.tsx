import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  cardContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
    color: 'black',
  },
  cardButton: {
    backgroundColor: '#00C2FF',
    padding: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
  },
  cardButtonTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
});
