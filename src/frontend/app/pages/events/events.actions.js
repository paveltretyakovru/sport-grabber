import {
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
