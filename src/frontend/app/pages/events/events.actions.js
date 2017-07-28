// Plugins and libs
import axios from 'axios';

// Constants
import {
  SET_EVENTS,
  EVENTS_ROUTE,
} from './events.constants';

import { push } from 'react-router-redux';

// Navigation functions
export function routeToEvents(id = '') {
  return (dispatch) => {
    let route = `${EVENTS_ROUTE}/${id}`;
    dispatch(push(route));
  }
}

export function fetchEventsPage() {
  return (dispatch) => {
    axios.get('http://localhost:3000/events')
      .then((res) => {
        dispatch({
          type: SET_EVENTS,
          payload: res.data,
        });
      });
  }
}
