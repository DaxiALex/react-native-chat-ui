import { LOGIN, LOGOUT } from '../actions/types';

const INITIAL = {
  loggedIn: true,
  user: { nickname: 'User' },
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case LOGIN:
      return { loggedIn: true, user: action.payload };
    case LOGOUT:
      return INITIAL;
    default:
      return state;
  }
};
