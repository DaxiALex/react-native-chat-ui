import { combineReducers } from 'redux';
import Contact from './Contact';
import Auth from './Auth';
import Chat from './Chat';

export default combineReducers({
  authentication: Auth,
  contact: Contact,
  chat: Chat,

});
