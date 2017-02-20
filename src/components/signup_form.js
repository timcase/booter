import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = [];

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }


  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  return errors;
};

const warn = values => {
  return {};
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span style={{float: 'right', color: 'red'}}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

const SignupForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <Field name="name" type="text" component={renderField} label="Name" className="form-control" />
      <Field name="email" type="email" component={renderField} label="Email" className="form-control" />
      <Field name="password" type="password" component={renderField} label="Password" classname="form-control" />
      <div>
        <button className="form-control" type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )

}

export default reduxForm({
  form: 'signup',
  validate,
  warn
})(SignupForm);
