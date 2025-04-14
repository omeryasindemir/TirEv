import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/routes/Welcome';
import Home from './src/routes/Home';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

import { View } from 'react-native-web';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  const linking = {
    prefixes: ['http://localhost:8081'],
    config: {
      screens: {
        Welcome: 'welcome',
        Home: 'home',
      },
    },
  };

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome" >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
