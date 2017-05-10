import {
  UPDATE_HEADER_TITLE,
} from './header.constants';

const initState = {
  headerTitle: 'Encrypted chat',
};

export default function(state = initState, action) {
  switch(action.type) {

  case UPDATE_HEADER_TITLE:
    return { ...state,  headerTitle: action.payload };

  default:
    return state;

  }
}
