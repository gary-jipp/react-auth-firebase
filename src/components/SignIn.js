
// add useContext
import React, { useContext } from 'react';
import { context } from '../providers/AuthProvider';
import { withRouter } from 'react-router-dom';

const SignIn = function (props) {
  const { handleSignin, inputs, setInputs, errors } = useContext(context);

  const handleSubmit = function (event) {
    console.log("Submit");
    event.preventDefault();
    handleSignin();
  };

  const handleChange = function (event) {
    const { name, value } = event.target;
    // console.log(inputs);
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const signUp = function () {
    // console.log(props);
    props.history.push('/signup');
  };

  const errorList = errors.map((error, i) =>
    <li style={{ color: 'red' }} key={i}>
      {error}
    </li>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>Please Sign In</h3>
      <h4>Enter Email and Password</h4>
      <div>
        <div>
          <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
        </div>
        <div>
          <input onChange={handleChange} type="password" name="password" placeholder='password' value={inputs.password} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={signUp}>Sign Up</button>
        </div>
      </div>

      <ul>
        {errors.length > 0 && errorList}
      </ul>

    </form>
  );
};

export default withRouter(SignIn);