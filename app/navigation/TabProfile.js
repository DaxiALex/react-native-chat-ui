import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Profile from '../screens/Profile/Profile';
import Conversation from '../screens/Conversation/Conversation';

const TabProfile = StackNavigator({
    Conversation: { screen: Conversation },
    Profile: { screen: Profile },
}, { headerMode: 'none' });

export default TabProfile;
