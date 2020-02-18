import { all, takeLatest } from 'redux-saga/effects';

import { types as authTypes } from '../ducks/auth';

import { login } from './auth';

export default function* rootSaga() {
  return yield all([takeLatest(authTypes.REQUEST_LOGIN, login)]);
}
