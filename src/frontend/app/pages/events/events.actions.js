// Plugins and libs
import axios from 'axios';

// Constants
import {
  SET_EVENTS,
  EVENTS_ROUTE,
  FETCH_EVENT_POST,
  EVENTS_FETCH_URL,
  CLEAR_CURRENT_POST,
  ADD_MORE_EVENTS_PAGE,
} from './events.constants';

import { push } from 'react-router-redux';

// Navigation functions
export function routeToEvents(id = 0) {
  return (dispatch) => {
    let route = `${EVENTS_ROUTE}/${id}`;
    dispatch(push(route));
  }
}

export function clearCurrentPost() {
  return {
    type: CLEAR_CURRENT_POST,
    payload: '',
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

export function fetchMorePage(id = 1) {
  console.log('FETCH MORE PAGE', id);
  return (dispatch) => {
    axios.get(`${EVENTS_FETCH_URL}/page/${id}`)
      .then((res) => {
        console.log('Fetched more page', res.data);
        dispatch({
          type: ADD_MORE_EVENTS_PAGE,
          payload: res.data,
        });
      });
  }
}

export function fetchEventPost(id = 1) {
  return (dispatch) => {
    console.log('GET STATE', id);
    let url = `${EVENTS_FETCH_URL}/${id}`;
    axios.get(url)
      .then((res) => {
        console.log('was fetched data', res);
        dispatch({
          type: FETCH_EVENT_POST,
          payload: res.data,
        });
      });
  }
}