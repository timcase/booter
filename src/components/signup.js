import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import update from 'immutability-helper';
import './login.css';
import SignupForm from './signup_form';

class Signup extends Component {
  constructor(){
    super()
    this.state = {
      fields: {email: '',
               password: '',
               name: ''}
    }
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      browserHistory.push("/");
    }
  }

  fieldChange = (field, value) => {
    this.setState(update(this.state, {fields: {[field]: {$set: value}}}))
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
    this.props.actions.signupUser(
      this.state.name,
      this.state.email,
      this.state.password,
      this.redirectTo)
  }

  render() {
    return (
  <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign up to Booter</h1>
            <div className="account-wall">
                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                  alt=""/>
                <SignupForm
                  fields={this.state.fields}
                  onChange={this.fieldChange}
                  onValid={ () => alert('submitting...')}
                  onInvalid={() => alert('Error!')}
                />
            </div>
        </div>
    </div>
  </div>
    )
  }
}

export default Signup;
