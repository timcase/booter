import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignupForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field className="form-control" name="name" component="input" type="text" placeholder="Name" />
        </div>
        <label>Email</label>
        <div>
          <Field className="form-control" name="email" component="input" type="email" placeholder="Email" />
        </div>
        <label>Password</label>
        <div>
          <Field className="form-control" name="password" component="input" type="password" placeholder="Password" />
        </div>
        <div>
         <button className="form-control" type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </div>
    </form>
  )

}

export default reduxForm({
  form: 'signup'
})(SignupForm);
