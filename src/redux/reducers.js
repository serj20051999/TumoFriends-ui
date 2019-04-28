import { combineReducers } from 'redux';

const user = (state = {data: null, error: null}, action) => {
  switch (action.type) {
   case 'SIMPLE_ACTION':
    return {
     result: action.payload
    }
   default:
    return state
  }
 }

export default combineReducers({
 user
});
