import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/app';
import * as LoginActions from '../actions/authentication';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LoginActions, dispatch)
})

const mapStateToProps = (state) => {
  return { isAuthenticated: state.authentication.isAuthenticated,
    userName: state.authentication.userName,
    jwt: state.authentication.jwt }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
