import { connect } from 'react-redux'
import { withRouter } from "react-router";

import NavigationBar from './NavigationBar';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
