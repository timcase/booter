import React, { Component } from 'react';
import Promise from 'bluebird';
import validator from 'validator';
import {validated} from 'react-custom-validation';


const isUnique = (email) => Promise.delay(5000)
  .then(() => email.includes('used') ? 'This email is already used.' : null)

 const isEmail = (email) =>
    validator.isEmail(email) ? null : 'This is not valid.'

 const nameMinLength = (value, length) =>
    value.length >= length ? null : `${value} Name is too short.`

 const passMinLength = (value, length) =>
    value.length >= length ? null : 'This is too short.'

 function validationConfig(props) {
  const {onValidation, fields: {email, password, name}} = props

  return {
    fields: ['name', 'email', 'name'],

    onValidation,

    validations: {
      name: [[nameMinLength, name, 1]],
      email: [
        [isEmail, email],
        [isUnique, email]
      ],
      password: [[passMinLength, password, 6]],
    }
  }
 }
class SignupForm extends Component {

  render() {
    const {fields, onChange, onValid, onInvalid, $field, $validation} = this.props
    let {isValid, error: {reason}, show} = $validation['email']

    let validationMessage = {
      true: 'Email is available!',
      null: ' Checking if available...',
      false: reason
    }[isValid]
    let errorStyle = {
      true: {float: 'right', color: '#24a224'},
      null: {},
      false: {float: 'right', color: 'red'}
    }[isValid]

    return (
      <form className="form-signin">
        {this.errorAlert}

        <label>Name</label>
        {$validation.name.show && <span style={{float: 'right', color: 'red'}}>
          {$validation.name.error.reason}</span>}
        <input type="text"
          value={fields.name}
          {...$field('name', (e) => onChange('name', e.target.value))}
          className="form-control"
          autoFocus />

        <label>Email</label>
        {show && <span  style={errorStyle}>{validationMessage}</span>}
        <input type="text"
          value={fields.email}
          {...$field('email', (e) => onChange('email', e.target.value))}
          className="form-control"
           />

        <label>Password</label>
        {$validation.password.show && <span style={{float: 'right', color: 'red'}}>{$validation.password.error.reason}</span>}
        <input type="password"
          value={fields.password}
          {...$field('password', (e) => onChange('password', e.target.value))}
          className="form-control"  />


        <button
          onClick={(e) => {
            e.preventDefault()
            this.props.$submit(onValid, onInvalid)
          }
          }
          className="btn btn-lg btn-primary btn-block"
          type="submit">Sign up</button>
      </form>
    )
  }
}

export default validated(validationConfig)(SignupForm);
