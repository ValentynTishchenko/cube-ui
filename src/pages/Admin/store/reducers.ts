import { handleActions } from 'redux-actions';
import { FETCH_USERS } from './actions';

const initialState = {};

export default handleActions({
  [FETCH_USERS.REQUEST]: (store) => {
    return {
      ...store
    };
  },
  [FETCH_USERS.SUCCESS]: (store, { payload }) => {
    console.log('payload: ', payload);
    return {
      ...store
    };
  },
}, initialState);