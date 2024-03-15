import React from 'react';
import {Button, ImageBackground, View} from 'react-native';
import HomeScreenStyle from './HomeScreen.style';

function HomeScreen({navigation}: any): React.JSX.Element {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  return (
    <View style={HomeScreenStyle.buttonContainer}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={HomeScreenStyle.image}>
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
        <Button
          title="State And Lifecycles"
          onPress={() => navigation.navigate('State&Lifecycle')}
        />
        <Button
          title="State And Lifecycles2"
          onPress={() => navigation.navigate('State&Lifecycle2')}
        />
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;
