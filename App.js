/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , { Component }  from 'react';
// import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';

state = { loggedIn: null };


const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  About: { screen: About },
});

export default createAppContainer(TabNavigator);
