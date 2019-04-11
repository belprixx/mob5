/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

<<<<<<< HEAD
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import About from './components/About';
import Calendar from './components/Calendar';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};

LocaleConfig.defaultLocale = 'fr';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  AgendaScreen: { screen: Calendar },
=======
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
>>>>>>> up
  About: { screen: About },
});

export default createAppContainer(TabNavigator);

