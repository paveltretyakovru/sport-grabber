import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import indexReducer from './index.reducer';
import { UPDATE_MAIN_AUTHOR } from './index.constants';

describe('>>> INDEX REDUCER --- Test indexReducer', () => {
  it('+++ reducer for UPDATE_MAIN_AUTHOR', () => {
    let state = {mainAuthor: 'Test Pavel Tretyakov'}
    state = indexReducer(state, {
      type: UPDATE_MAIN_AUTHOR,
      payload: 'New Author',
    });

    expect(state).toEqual({mainAuthor: 'New Author'});
  });
});