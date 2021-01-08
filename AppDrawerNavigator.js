import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import TimerScreen from '../screens/TimerScreen';
import NotesScreen from '../screens/NotesScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen : AppTabNavigator
    },
  Timer : {
    screen : TimerScreen
  },
  Notes : {
    screen: NotesScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
