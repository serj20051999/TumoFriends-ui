import { combineReducers } from 'redux';

const user = (state = null, action) => {
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
