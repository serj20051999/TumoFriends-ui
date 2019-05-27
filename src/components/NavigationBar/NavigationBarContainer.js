import { connect } from 'react-redux'
import { withRouter } from "react-router";

import NavigationBar from './NavigationBar';
import { logoutUser } from '../../redux/actions';

const mapStateToProps = state => ({
  withUser: state.network.withUser,
})

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: (user) => { dispatch(logoutUser(user)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
