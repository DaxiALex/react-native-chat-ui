import { StackNavigator } from 'react-navigation';
import { ChatsList } from '../screens';

import TabProfile from './TabProfile';


const TabContact = StackNavigator({
  ChatsList: { screen: ChatsList },
  TabProfile: { screen: TabProfile },
});

export default TabContact;
