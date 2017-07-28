import {
  SET_START_EVENTS,
  UPDATE_MAIN_AUTHOR,
} from './index.constants';

const initState = {
  events: [],
  mainAuthor: 'Pavel Tretyakov',
}

export default function(state = initState, action) {
  switch(action.type) {
  
  case UPDATE_MAIN_AUTHOR:
    return { ...state, mainAuthor: action.payload }

  case SET_START_EVENTS:
    return { ...state, events: action.payload }

  default:
    return { ...state };
  }
}
