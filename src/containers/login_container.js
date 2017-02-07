import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../actions/authentication';
import Login from '../components/login';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LoginActions, dispatch)
})

const mapStateToProps = (state) => {
  return { isAuthenticated: state.authentication.isAuthenticated,
    error: state.authentication.error,
    jwt: state.authentication.jwt }
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
