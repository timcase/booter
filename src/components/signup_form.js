import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required'


const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength15 = maxLength(15)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning, asyncValidating } }) => (
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span style={{float: 'right', color: 'red'}}>{error}</span>) || (warning && <span>{warning}</span>))}
      {asyncValidating && <div className="text-warning">Checking email...</div>}
    </div>
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'gk@karmacrash.com'].includes(values.email)) {
        throw { email: 'That email is already registered' }
      }
    })
}

const SignupForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <Field name="name" type="text"
        component={renderField} label="Name"
        validate={[required, maxLength15]}
        className="form-control" />
      <Field name="email" type="email"
        component={renderField} label="Email"
        validate={[required, email]}
        warn={aol}
        className="form-control" />
      <Field name="password" type="password"
        component={renderField} label="Password"
        validate={required}
        classname="form-control" />
      <div>
        <button className="form-control" type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )

}

export default reduxForm({
  form: 'signup',
  asyncValidate,
  asyncBlurFields: ['email']

})(SignupForm);
