import {StyleSheet, View} from 'react-native';

const RedBox = () => {
  const styles = StyleSheet.create({
    box: {
      width: 75,
      height: 75,
      backgroundColor: 'red',
    },
  });
  return <View style={styles.box} />;
};

export default RedBox;
