export const types = {
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  SUCCESS_LOGIN: 'SUCCESS_LOGIN',
  REQUEST_LOAD_AUTHENTICATE: 'REQUEST_LOAD_AUTHENTICATE',
  LOGOUT: 'LOGOUT'
};

// Reducers
const INITIAL_STATE = {
  data: null,
  loaded: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case types.SUCCESS_LOGIN:
      return { ...state, data: action.payload, loaded: true };
    default:
      return { ...state };
  }
};

// Actions Creators

export const Login = payload => {
  return { type: types.REQUEST_LOGIN, payload };
};

export const loadAuth = () => ({
  type: types.REQUEST_LOAD_AUTHENTICATE
});

export const logoutAuth = () => ({
  type: types.LOGOUT
});
