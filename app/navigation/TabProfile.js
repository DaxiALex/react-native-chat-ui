import { StackNavigator } from 'react-navigation';
import { Profile, Conversation } from '../screens';


const TabProfile = StackNavigator({
  Conversation: { screen: Conversation },
  Profile: { screen: Profile },
}, { headerMode: 'none' });

export default TabProfile;
