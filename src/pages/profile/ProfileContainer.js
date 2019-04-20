import { connect } from 'react-redux'

import Profile from './Profile';
import { createUser } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: ({email, password, firstName, lastName, learningTargets, location}) => {
      dispatch(createUser(email, password, firstName, lastName, learningTargets, location));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
