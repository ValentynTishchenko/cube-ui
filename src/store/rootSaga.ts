import { all } from 'redux-saga/effects';
import { watchLoginRequest } from './user/sagas';
import { watchFetchUsersAsync, watchCreateTestAsync, watchCreateUserAsync } from '../pages/Admin/store/sagas';

export default function* () {
  yield all([
    watchLoginRequest(),
    watchFetchUsersAsync(),
    watchCreateTestAsync(),
    watchCreateUserAsync(),
  ]);
}