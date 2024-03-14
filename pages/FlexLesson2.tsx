import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const FlexLesson2 = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    upContainer: {
      flex: 1,
      backgroundColor: 'black',
    },
    downContainer: {
      flex: 2,
      backgroundColor: 'grey',
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.upContainer} />
      <View style={styles.downContainer} />
    </SafeAreaView>
  );
};

export default FlexLesson2;
