import { connect } from 'react-redux'

import Search from './Search';

const mapStateToProps = state => ({
    currentUser: state.user.data,
    userError: state.user.error
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Search);