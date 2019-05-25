import { combineReducers } from 'redux';

const user = (state = {data: null, error: null}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { data: action.payload, error: null }
    case 'LOGIN_USER_ERROR':
      return { data: null, error: action.payload }
    case 'CREATE_USER':
      return { data: action.payload, error: null};
    case 'CREATE_USER_ERROR':
      return { data: null, error: action.payload};
    case 'UPDATE_USER':
      return { data: action.payload, error: null }
    case 'UPDATE_USER_ERROR':
      return { data: null, error: action.payload};
    case 'LOGOUT_USER':
      return { data: null, error: null}
    default:
      return state
  }
}

const network = (state = {withUser: null}, action) => {
  switch(action.type) {
    case 'START_CHAT':
      return { withUser: action.withUser }
    case 'STOP_CHAT':
    case 'LOGOUT_USER':
      return { withUser: null }
    default:
      return state;
  }
}

export default combineReducers({
 user,
 network,
});
