// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './app/app.reducer';
import indexReducer from './app/pages/index/index.reducer';
import eventsReducer from './app/pages/events/events.reducer';
import contactsReducer from './app/pages/contacts/contacts.reducer';
import headerReducer from './app/shared/header/header.reducer';

export default combineReducers({
  // ...reducers,
  app: appReducer,
  index: indexReducer,
  header: headerReducer,
  events: eventsReducer,
  routing: routerReducer,
  contacts: contactsReducer,
})
