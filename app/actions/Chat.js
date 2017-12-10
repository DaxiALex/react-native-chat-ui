import {
    FETCH_ROOM_SUCCESS,
    FETCH_ROOM_ERROR,
    FECTH_MESSSAGE_SUCCESS,
} from './types';

import { chatRooms } from './mock-chats';

export const findRoomByUser = (me, friend) => (dispatch) => {
  const roomKey = friend.uid;

  const rooms = chatRooms;
        
  let currentRoom = null;
  
  for (const key in rooms) {
    if (rooms[key].id === roomKey) {
      currentRoom = rooms[key];
    }
  }

  if (currentRoom != null) {
    dispatch({
      type: FETCH_ROOM_SUCCESS,
      roomKey,
    });

    fetchMessagesByRoom(dispatch, currentRoom);
  } else {
    dispatch({
      type: FETCH_ROOM_ERROR,
    });
  }
};

const fetchMessagesByRoom = (dispatch, room) => {
  const messages = room.messages;

  messages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  dispatch({
    type: FECTH_MESSSAGE_SUCCESS,
    messages,
  });
};

export const sendMessage = (me, friend, text, roomKey) => (dispatch) => {
  const rooms = chatRooms;
  let currentRoom = null;

  for (const key in rooms) {
    if (rooms[key].id === roomKey) {
      currentRoom = rooms[key];
    }
  }
  if (currentRoom != null) {
    currentRoom.messages.push({
      text,
      user: {
        _id: me.uid,
        name: me.displayName,
        avatar: me.photoURL,
      },
      createdAt: Date.now(),
    });

            
    dispatch({
      type: FECTH_MESSSAGE_SUCCESS,
      messages: text,
    });
  }
};

