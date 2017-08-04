import {
  SET_EVENTS,
  FETCH_EVENT_POST,
  CLEAR_CURRENT_POST,
  ADD_MORE_EVENTS_PAGE,
} from './events.constants';

const initState = {
  collection: [],
  current: {},
  loadedPage: 1,
}

export default function(state = initState, action) {

  switch(action.type) {

  case SET_EVENTS: {
    return { ...state, collection: action.payload }
  }

  case FETCH_EVENT_POST: {
    let postid = state.collection.findIndex((element) => {
      return element.id === action.payload.id;
    });

    if(postid === -1) {
      return { ...state, collection: [action.payload], current: action.payload};
    } else {
      let newPosts = [...state.collection];
      newPosts[postid] = action.payload;
      
      return {...state, collection: newPosts, current: action.payload}
    }
  }

  case ADD_MORE_EVENTS_PAGE: {
    let collection = [...state.collection];
    collection.push(...action.payload);
    return { ...state, collection: collection, loadedPage: state.loadedPage++ }
  }

  case CLEAR_CURRENT_POST: {
    return { ...state, current: {} }
  }

  default: {
    return { ...state };
  }

  }
}
