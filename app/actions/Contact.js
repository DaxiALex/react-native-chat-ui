import {
    FETCH_CONTACT_SUCCESS,
} from './types';

export const fetchListContact = ({ me }) => (dispatch) => {
  const contacts = [
    {
      uid: 1,
      displayName: 'Daenerys',
      photoURL: 'https://cdna.artstation.com/p/assets/covers/images/007/336/874/large/tomonori-shimizu-daenerys-v3-test-14.jpg?1505415435',
      status: 'offline',
      notification: 'on',
    },
    {
      uid: 2,
      displayName: 'Jon',
      photoURL: 'https://pbs.twimg.com/profile_images/909388526025707520/sHAG2dsl_400x400.jpg',
      status: 'online',
      notification: 'off',
    },
    {
      uid: 3,
      displayName: 'Max',
      photoURL: 'https://pbs.twimg.com/profile_images/2475338986/vjjtig48krg83m9mbugx_400x400.jpeg',
      status: 'online',
      notification: 'on',
    },
    {
      uid: 4,
      displayName: 'Alan',
      photoURL: 'https://pbs.twimg.com/profile_images/2475338986/vjjtig48krg83m9mbugx_400x400.jpeg',
      status: 'online',
      notification: 'on',
    },
    {
      uid: 5,
      displayName: 'Bill',
      photoURL: 'https://pbs.twimg.com/profile_images/2475338986/vjjtig48krg83m9mbugx_400x400.jpeg',
      status: 'online',
      notification: 'off',
    },


  ];
  dispatch({
    type: FETCH_CONTACT_SUCCESS,
    contacts,
  });
};
