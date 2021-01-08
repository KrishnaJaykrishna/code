import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Calander from '../screens/CalanderScreen';
import Setting from '../screens/SettingScreen';

export const AppTabNavigator = createBottomTabNavigator({
  CalanderScreen : {
    screen: Calander,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/calander.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Calander",
    }
  },

  SettingScreen : {
    screen: Setting,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/setting.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Setting",
    }
  },
});
