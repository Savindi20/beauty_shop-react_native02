import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoardingScreen, HomeScreen } from './screens';
import { Provider } from 'react-redux';

import "react-native-url-polyfill/auto";
import store from './context/store';

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default app