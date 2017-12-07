import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatsList from '../screens/ChatsList/ChatsList';

import TabProfile from './TabProfile'


const TabContact = StackNavigator({
    ChatsList: { screen: ChatsList },
    TabProfile: { screen: TabProfile },
}, );

export default TabContact;
