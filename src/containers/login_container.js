import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../actions/authentication';
import Login from '../components/login';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LoginActions, dispatch)
})

const mapStateToProps = (state) => {
  return { todos: state.authentication.userName, isRequesting: state.authentication.isRequesting,
    error: state.authentication.error };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
