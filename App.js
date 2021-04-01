// App.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '././src/screens/HomeScreen';
import LyricsScreen from './src/screens/LyricsScreen';
import SearchBySong from './src/screens/SearchBySong';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome!'}}
        />
        <Stack.Screen name="Lyrics" component={LyricsScreen} />
        <Stack.Screen name="Search By Keywords" component={SearchBySong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
