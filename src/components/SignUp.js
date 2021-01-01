
// add useContext
import React, { useContext } from 'react';
import { context } from '../providers/AuthProvider';
import { withRouter } from 'react-router-dom';

const SignUp = function (props) {
  const { handleSignup, inputs, setInputs, errors } = useContext(context);

  const handleSubmit = async function (event) {
    event.preventDefault();
    handleSignup();
    props.history.push('/');
  };

  const handleChange = function (e) {
    const { name, value } = e.target;
    // console.log(inputs);
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const signIn = function () {
    // console.log(props);
    props.history.push('/signin');
  };


  const errorList = errors.map((error, i) =>
    <li style={{ color: 'red' }} key={i}>
      {error}
    </li>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up new user</h3>
      <h4>Enter New Email and Password</h4>
      <div>
        <div>
          <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
        </div>
        <div>
          <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
        </div>
        <div>
          <button>Submit</button>
          <button type="button" onClick={signIn}>Sign In</button>
        </div>
      </div>
      <ul>
        {errors.length > 0 && errorList}
      </ul>
    </form>
  );
};

export default withRouter(SignUp);