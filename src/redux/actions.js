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

export const createUser = (email, password, firstName, lastName, learningTargets, location) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'CREATE_USER',
        payload: {
          email,
          password,
          firstName,
          lastName,
          learningTargets,
          location
        }
      })
    }, 1000)
  }
}

export const updateUser = (email, password, firstName, lastName, learningTargets, location) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'UPDATE_USER',
        payload: {
          email,
          password,
          firstName,
          lastName,
          learningTargets,
          location
        }
      })
    }, 1000)
  }
}