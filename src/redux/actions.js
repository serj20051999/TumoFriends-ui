export const loginUser = (email, password) => {
  return dispatch => {
    setTimeout(() => { // stub api call
      dispatch({
        type: 'LOGIN_USER',
        payload: {
          email,
          password,
          firstName: '',
          lastName: '',
        }
      });
    }, 1000);
  }
}
