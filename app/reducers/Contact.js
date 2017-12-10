import {
    FETCH_CONTACT_SUCCESS,
} from '../actions/types';

const INITIAL = {
  loading: true,
  contacts: [],
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case FETCH_CONTACT_SUCCESS:
      return { ...state, loading: false, contacts: action.contacts };
    default:
      return state;
  }
}
;
