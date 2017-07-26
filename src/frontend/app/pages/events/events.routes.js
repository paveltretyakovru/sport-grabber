import React from 'react';
import { Route } from 'react-router';

import EventsContainer from './events.container';

export default (
    <Route>
        <Route path={`${EventsContainer.path}(/:id)`} component={EventsContainer} />
    </Route>
);
