import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN, loginSuccess, loginError } from './actions';
import api from '../../utils/api';

function* loginRequestAsync(data) {
  const { email, password } = data.payload;

  try {
    const payload = yield call(api.login, email, password);

    yield put(loginSuccess(payload));
  } catch (error) {
    yield put(loginError(error));
  }

}

export function* watchLoginRequest() {
  yield takeEvery(LOGIN.REQUEST, loginRequestAsync);
}
