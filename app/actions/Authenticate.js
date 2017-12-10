import { LOGIN, LOGOUT } from './types';

export const loginSuccess = (user) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: user,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

