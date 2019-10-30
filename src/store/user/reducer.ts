import { handleActions } from 'redux-actions';
import { LOGIN } from './actions';

type userState = {
  isError: boolean;
  isLoaded: boolean
}

const initialState: userState = {
  isError: false,
  isLoaded: false,
};

export default handleActions({
  [LOGIN.REQUEST]: (store) => {
    return {
      ...store
    };
  },
  [LOGIN.SUCCESS]: (store, action) => {
    console.log('LOGIN.SUCCESS', action);
    return {
      ...store
    };
  }
}, initialState);