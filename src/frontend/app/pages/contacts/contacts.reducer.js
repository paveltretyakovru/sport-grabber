import {
} from './contacts.constants';

const initState = {
  phone: '8-888-888-88-88',
}

export default function(state = initState, action) {
  switch(action.type) {

  default:
    return { ...state };
  }
}
