import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/routes/Welcome';
import Home from './src/routes/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  const linking = {
    prefixes: ['http://localhost:8081'],
    config: {
      screens: {
        Welcome: 'welcome',
        Home: 'home',
      },
    },
  };


  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
