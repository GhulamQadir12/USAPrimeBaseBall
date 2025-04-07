import {View, Text,useColorScheme} from 'react-native';
import React from 'react';
import Rootnavigation from './src/navigation/root-navigation';
import {DarkTheme,
  DefaultTheme,NavigationContainer} from '@react-navigation/native';
import { dark, light } from './src/config/colors';

const App = () => {
  const theme = useColorScheme();
const isDarkTheme = theme === 'dark'
console.log('from app theme :',theme)
  return (
    // <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
    <NavigationContainer theme={isDarkTheme ? {colors:dark , dark : true} : {colors:light , dark : false}}>
      <Rootnavigation />
    </NavigationContainer>
  );
};

export default App;
