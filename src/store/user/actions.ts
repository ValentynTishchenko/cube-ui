import { createAsyncAction } from '../actions';

export const LOGIN = createAsyncAction('LOGIN');

export const login = (email, password) => ({
  type: LOGIN.REQUEST,
  payload: {
    email, password
  }
});

export const loginSuccess = payload => ({
  type: LOGIN.SUCCESS,
  payload
});

export const loginError = error => ({
  type: LOGIN.ERROR,
  payload: {
    error
  }
});