import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './login.css';
import LoginForm from './login_form';

class Login extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) {
      browserHistory.push("/");
    }
  }

  get redirectTo(){
    return (this.props.location.query.next || '/');
  }

  handleSubmit = (values) => {
    return  this.props.actions.loginUser(values.email,
      values.password,
      this.redirectTo)
  }

  render() {
    return (
  <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign in to continue to Booter</h1>
            <div className="account-wall">

                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                  alt=""/>

                <LoginForm onSubmit={this.handleSubmit}/>

            </div>
            <Link to="/signup" className="text-center new-account">Create an account</Link>
        </div>
    </div>
  </div>
    )
  }
}

export default Login;
