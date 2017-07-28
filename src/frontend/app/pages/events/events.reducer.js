import {
  SET_EVENTS,
} from './events.constants';

const initState = {
  collection: [],
}

export default function(state = initState, action) {
  switch(action.type) {

  case SET_EVENTS: {
    return { ...state, collection: action.payload }
  }

  default: {
    return { ...state };
  }

  }
}
