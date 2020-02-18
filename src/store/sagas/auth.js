import { takeLatest, put, call, all, delay } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';

//import { Types } from '../ducks/login';

export function* login(action) {
  try {
    console.log('teste login');

    yield put(startSubmit('LOGIN'));
    yield delay(1000);

    console.log(action.payload);
    yield all([
      put(stopSubmit('LOGIN', { email: 'erro1' }))
      //  put({ type: types.SUCCESS_LOGIN, payload: data })
    ]);
    // const response = yield call(apiLogin, action.payload.registration, action.payload.password);
    //Actions.FirstAccess();
    //yield put ({ type: Types.SUCCESS_LOGIN, payload: response });
  } catch (err) {
    console.log(err.message);

    // yield put ({ type: Types.FAILURE_LOGIN, payload: err });
  }
}
