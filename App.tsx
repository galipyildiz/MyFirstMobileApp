import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlexLesson1 from './pages/FlexLesson1Screen';
import FlexLesson2 from './pages/FlexLesson2Screen';
import CustomComponentPage from './pages/ComponentScreen';
import HomeScreen from './pages/HomeScreen';
import News from './pages/NewsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FlexLesson1" component={FlexLesson1} />
        <Stack.Screen name="FlexLesson2" component={FlexLesson2} />
        <Stack.Screen
          name="CustomComponentPage"
          component={CustomComponentPage}
        />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
