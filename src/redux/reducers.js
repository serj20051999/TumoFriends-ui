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
    default:
      return state
  }
}

export default combineReducers({
 user,
});
