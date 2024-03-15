import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  newsMainContainer: {
    flex: 1,
    backgroundColor: '#222222',
  },
  bannerImage: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
  },
});
