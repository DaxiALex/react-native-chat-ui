import { LOGIN, LOGOUT } from './types';

export const loginSuccess = (user) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: user
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
        });
    }
};
