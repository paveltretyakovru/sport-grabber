// Plugins and libs
import axios from 'axios';

// Constants
import {
  SET_EVENTS,
  EVENTS_ROUTE,
  FETCH_EVENT_POST,
  EVENTS_FETCH_URL,
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
    axios.get(EVENTS_FETCH_URL)
      .then((res) => {
        dispatch({
          type: SET_EVENTS,
          payload: res.data,
        });
      });
  }
}

export function fetchEventPost(id = 1) {
  return (dispatch) => {
    axios.get(`${EVENTS_FETCH_URL}/${id}`)
      .then((res) => {
        dispatch({
          type: FETCH_EVENT_POST,
          payload: res.data,
        });
      });
  }
}