import React from 'react';
import { Route } from 'react-router';

import ContactsAuthorsComponent from './contacts-authors.component';

export default (
    <Route>
        <Route component={ ContactsAuthorsComponent } path={ ContactsAuthorsComponent.path } />
    </Route>
);
