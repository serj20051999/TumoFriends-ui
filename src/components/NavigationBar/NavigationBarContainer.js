import { connect } from 'react-redux'
import { withRouter } from "react-router";

import NavigationBar from './NavigationBar';
import { logoutUser } from '../../redux/actions';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => { dispatch(logoutUser()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
