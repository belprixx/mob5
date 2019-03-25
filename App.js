/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import About from './components/About';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  About: { screen: About },
});

export default createAppContainer(TabNavigator);
