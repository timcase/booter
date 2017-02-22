import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && error && <span>{error}</span>}
  </div>
)

const LoginForm = (props) => {
  const { error, handleSubmit, onSubmit, submitting } = props
  return (
    <form className='form-signing' onSubmit={handleSubmit(onSubmit)}>
      <p className="text-danger">{error && <strong>{error}</strong>}</p>
      <Field name="email" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>
            Sign in</button>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm'  // a unique identifier for this form
})(LoginForm)

