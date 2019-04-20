import { connect } from 'react-redux'

import Signup from './Signup';
import { loginUser } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password, firstName, lastName) => {
      dispatch(loginUser(email, password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
