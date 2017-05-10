// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import { configureStore } from './configure-store';

const store = configureStore();
const historyOptions = [ hashHistory, store, { adjustUrlOnReplay: false } ];
const history = syncHistoryWithStore(...historyOptions);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>,
  document.getElementById('root')
);