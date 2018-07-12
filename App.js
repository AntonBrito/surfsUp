import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, } from 'react-navigation';
import LoadingScreen from './src/screens/LoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import BeachScreen from './src/screens/BeachScreen';


const App = createStackNavigator({
  'Loading': { screen: LoadingScreen },
  'Home': { screen: HomeScreen },
  'Beachscreen': { screen: BeachScreen },
});


export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
