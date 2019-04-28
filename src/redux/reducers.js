import { combineReducers } from 'redux';

const user = (state = {data: null, error: null}, action) => {
  switch (action.type) {
   case 'LOGIN_USER':
    return { data: action.payload, error: null }
   default:
    return state
  }
 }

export default combineReducers({
 user
});
