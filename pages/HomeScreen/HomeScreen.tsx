import React from 'react';
import {Button, View} from 'react-native';
import HomeScreenStyle from './HomeScreen.style';

function HomeScreen({navigation}: any): React.JSX.Element {
  return (
    <View style={HomeScreenStyle.buttonContainer}>
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
      <Button title="News" onPress={() => navigation.navigate('News')} />
    </View>
  );
}

export default HomeScreen;
