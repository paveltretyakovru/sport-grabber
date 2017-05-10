import { updateMainAuthor } from './index.actions';
import { UPDATE_MAIN_AUTHOR } from './index.constants';

describe('>>>INDEX ACTION --- Test index actions', () => {
  it('+++ updateMainAuthor action', () => {
    const update = updateMainAuthor('New author');

    expect(update).toEqual({type: UPDATE_MAIN_AUTHOR, payload: 'New author'});
  });
});