import {
    FETCH_ROOM_SUCCESS,
    FETCH_ROOM_ERROR,
    FECTH_MESSSAGE_SUCCESS,
} from '../actions/types';

const INITIAL = {
    loading: false,
    messages: [
        {
            _id: 'thvzfst',
            text: "Ever man are put down his very.",
            user: {
                _id: 1,
                name: 'Daenerys',
                avatar: 'https://cdna.artstation.com/p/assets/covers/images/007/336/874/large/tomonori-shimizu-daenerys-v3-test-14.jpg?1505415435'
            },
            createdAt: Date.now()-500000,
        },

    ],
    roomKey: 1
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case FETCH_ROOM_SUCCESS:
            return { ...INITIAL, loading: false, roomKey: action.roomKey };
        case FETCH_ROOM_ERROR:
            return { ...INITIAL, loading: false };
        case FECTH_MESSSAGE_SUCCESS:
            return { ...state, loading: false, messages: action.messages };

        default:
            return state;
    }
}