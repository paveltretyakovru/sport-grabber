import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedIndexContainer, { IndexContainer } from './index.container';

import indexReducer from './index.reducer';
import { updateMainAuthor } from './index.actions';
import { UPDATE_MAIN_AUTHOR } from './index.constants';

describe('>>> INDEX CONTAINER --- Shallow Render Container', () => {
  let wrapper, output = 'Input 1 value';


  beforeEach(()=>{
    wrapper = shallow(<IndexContainer />);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains header - h1', () => {
    expect(wrapper.contains(<h1>Index Container</h1>)).toBe(true);
  });
  
  it('+++ h1 header value ', () => {
    expect(wrapper.find('h1').get(0).props.children).toBe('Index Container');
  });

  it('+++ contains input1', () => {
    expect(wrapper.find('input').at(0)
      .equals(
        <input type="text" placeholder="Input 1" defaultValue="Input 1 value" />
      ))
      .toBe(true);
  });

  it('+++ contains output', () => {
    expect(wrapper.find('input[placeholder="Input 1"]')
      .prop('defaultValue')).toEqual(output);
  });

  it('+++ contains button with id="add"', () => {
    expect(wrapper.find('button#change-author-button').type()).toEqual('button')
  });
});

describe('>>> INDEX CONTAINER --- with mock store', () => {
  const mockStore = configureStore();
  const initialState = {
    mainAuthor: 'Pavel Tretyakov',
  };

  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ConnectedIndexContainer />
      </Provider>
    );
  });

  it('+++ Render the connected(SMART) component', () => {
    expect(wrapper.find(ConnectedIndexContainer).length).toEqual(1);
  });

  it('+++ Check Prop matches with initialState', () => {
    expect(wrapper.find(IndexContainer).prop('mainAuthor'))
      .toEqual(initialState.mainAuthor);
  });

  it('+++ Check action on dispatching', () => {
    let actions;
    
    store.dispatch(updateMainAuthor('New Mock Author'));
    actions = store.getActions();
    expect(actions[0].type).toBe(UPDATE_MAIN_AUTHOR);
  });
});

describe('>>> INDEX CONTAINER --- with redux store', () => {
  let store, wrapper;

  beforeEach(() => {
    store = createStore(indexReducer);
    wrapper = mount(
      <Provider store={store}>
        <ConnectedIndexContainer />
      </Provider>
    );
  });

  it('+++ Check updateMainAuthor method', () => {
    store.dispatch(updateMainAuthor('New Author'));
    expect(wrapper.find(IndexContainer).prop('mainAuthor')).toBe('New Author');
  });
});