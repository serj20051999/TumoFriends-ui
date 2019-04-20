import { combineReducers } from 'redux';

const user = (state = {data: null, error: null}, action) => {
  switch (action.type) {
   case 'LOGIN_USER':
    return action.payload;
   default:
    return state
  }
 }

export default combineReducers({
 user
});
