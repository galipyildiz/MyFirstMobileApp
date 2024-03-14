import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RedBox from '../components/RedBox';

const FlexLesson1 = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'yellow',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
    },
    box_2: {
      width: 75,
      height: 75,
      backgroundColor: 'blue',
    },
    box_3: {
      width: 75,
      height: 75,
      backgroundColor: 'green',
    },
    box_4: {
      width: 75,
      height: 75,
      backgroundColor: 'orange',
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <RedBox />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
      <View style={styles.box_4} />
    </SafeAreaView>
  );
};

export default FlexLesson1;
