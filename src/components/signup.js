import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import SignupForm from './signup_form';
import './login.css';

class Signup extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }
  componentWillMount() {
    if (this.props.isAuthenticated) {
      browserHistory.push("/");
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
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

  handleSubmit = (values) => {
    this.props.actions.signupUser(
      values.name,
      values.email,
      values.password,
      this.redirectTo)

  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
                <h1 className="text-center login-title">Sign up to Booter</h1>
                <div className="account-wall">

                  <img className="profile-img" src="http://pngimages.net/sites/default/files/business-user-png-image-18016.png"
                      alt=""/>
                    <SignupForm onSubmit={this.handleSubmit} />
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Signup;
