import axios from 'axios';

// Constants
import {
  SET_START_EVENTS,
  UPDATE_MAIN_AUTHOR,
} from './index.constants';

export function updateMainAuthor(name = 'Pavel Tretyakov') {
  return {
    type: UPDATE_MAIN_AUTHOR,
    payload: name,
  }
}

export function fetchStartEvents() {
  return (dispatch) => {
    axios.get('http://localhost:3000/events')
      .then((res) => {
        dispatch({
          type: SET_START_EVENTS,
          payload: res.data,
        });
      });
  }

}