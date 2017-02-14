import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../actions/authentication';
import Signup from '../components/signup';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LoginActions, dispatch)
})

const mapStateToProps = (state) => {
  return { isAuthenticated: state.authentication.isAuthenticated,
    error: state.authentication.error,
    jwt: state.authentication.jwt }
};

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

export default SignupContainer;
