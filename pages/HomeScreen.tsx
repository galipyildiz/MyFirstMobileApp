import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

function HomeScreen({navigation}: any): React.JSX.Element {
  const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonMargin: {
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="FlexLesson1"
        onPress={() => navigation.navigate('FlexLesson1')}
      />
      <Button
        title="FlexLesson2"
        onPress={() => navigation.navigate('FlexLesson2')}
      />
      <Button
        title="CustomComponent"
        onPress={() => navigation.navigate('CustomComponentPage')}
      />
    </View>
  );
}

export default HomeScreen;
