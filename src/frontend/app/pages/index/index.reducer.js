import {
  UPDATE_MAIN_AUTHOR,
} from './index.constants';

const initState = {
  mainAuthor: 'Pavel Tretyakov',
}

export default function(state = initState, action) {
  switch(action.type) {
  
  case UPDATE_MAIN_AUTHOR:
    return { ...state, mainAuthor: action.payload }

  default:
    return { ...state };
  }
}
