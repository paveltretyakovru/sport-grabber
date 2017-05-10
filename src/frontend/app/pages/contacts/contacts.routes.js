import React from 'react';
import { Route } from 'react-router';

import ContactsContainer from './contacts.container';
import ContactAuthorsRoutes from './contacts-authors/contacts-authors.routes';

export default (
    <Route>
        <Route path={ContactsContainer.path} component={ContactsContainer} />
        { ContactAuthorsRoutes }
    </Route>
);
