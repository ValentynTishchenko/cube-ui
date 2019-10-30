import { createAsyncAction } from '../../../store/actions';

export const FETCH_USERS = createAsyncAction('FETCH_USERS');

export const fetchUsers = (userType) => ({
  type: FETCH_USERS.REQUEST,
  payload: {
    userType
  }
});

export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS.SUCCESS,
  payload
});

export const fetchUsersError = (payload) => ({
  type: FETCH_USERS.ERROR,
  payload
});

export const CREATE_USER = createAsyncAction('CREATE_USER');

export const createUser = (payload) => ({
  type: CREATE_USER.REQUEST,
  payload
});

export const createUserSuccess = (payload) => ({
  type: CREATE_USER.SUCCESS,
  payload
});

export const createUserError = (payload) => ({
  type: CREATE_USER.ERROR,
  payload
});

export const CREATE_TEST = createAsyncAction('CREATE_TEST');

export const createTest = (userIds) => ({
  type: CREATE_TEST.REQUEST,
  payload: {
    userIds
  }
});

export const createTestSuccusess = (payload) => ({
  type: CREATE_TEST.SUCCESS,
  payload
});

export const createTestError = (payload) => ({
  type: CREATE_TEST.ERROR,
  payload
});