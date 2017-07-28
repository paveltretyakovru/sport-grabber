// Constants
import {
  UPDATE_MAIN_AUTHOR,
} from './index.constants';

export function updateMainAuthor(name = 'Pavel Tretyakov') {
  return {
    type: UPDATE_MAIN_AUTHOR,
    payload: name,
  }
}