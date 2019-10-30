import { takeEvery, call, put } from 'redux-saga/effects';
import {
  CREATE_TEST,
  createTestError,
  createTestSuccusess, createUserError, createUserSuccess,
  FETCH_USERS,
  fetchUsersError,
  fetchUsersSuccess
} from './actions';
import api from '../../../utils/api';

function* fetchUsersAsync(data) {
  const { userType } = data.payload;

  try {
    const payload = yield call(api.fetchUsers, userType);
    yield put(fetchUsersSuccess(payload));
  } catch (e) {
    yield put(fetchUsersError(e));
  }
}

export function* watchFetchUsersAsync() {
  yield takeEvery(FETCH_USERS.REQUEST, fetchUsersAsync);
}

function* createTestAsync(data) {
  const { userIds } = data.payload;

  try {
    const payload = yield call(api.createTest, userIds);
    yield put(createTestSuccusess(payload));
  } catch (e) {
    yield put(createTestError(e));
  }
}

export function* watchCreateTestAsync() {
  yield takeEvery(CREATE_TEST.REQUEST, createTestAsync);
}


function* createUserAsync(data) {
  const { userData } = data.payload;

  try {
    const payload = yield call(api.createUser, userData);
    yield put(createUserSuccess(payload));
  } catch (e) {
    yield put(createUserError(e));
  }
}

export function* watchCreateUserAsync() {
  yield takeEvery(CREATE_TEST.REQUEST, createUserAsync);
}
