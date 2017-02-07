import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './login.css';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  componentWillMount() {
    if (this.props.isAuthenticated) {
      browserHistory.push("/");
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  get redirectTo(){
    return (this.props.location.query.next || '/');
  }

  get errorAlert(){
      if (this.props.error) {
        return (
            <div className="alert alert-danger fade in">
              {this.props.error}
            </div>
        );
      }
      else{
        return null;
      }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.loginUser(this.state.email,
      this.state.password,
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
                <form className="form-signin">
                {this.errorAlert}
                  <input type="text" onChange={this.handleEmailChange} className="form-control" placeholder="Email" required autoFocus />
                  <input type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
                <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in</button>
                <label className="checkbox pull-left">
                  <input type="checkbox" value="remember-me" />
                    Remember me
                </label>
                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                </form>
            </div>
            <a href="#" className="text-center new-account">Create an account </a>
        </div>
    </div>
  </div>
    )
  }
}

export default Login;
