import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TabChats from './TabChats'

import { LoginScreen, MenuScreen} from '../screens';

const MainNavigator = StackNavigator({
    LoginScreen: { screen: LoginScreen },
    MenuScreen: { screen: TabChats },
},{ headerMode: 'none' });


export default MainNavigator;

