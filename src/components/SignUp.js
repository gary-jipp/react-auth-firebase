
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

  const handleChange = function (event) {
    const { name, value } = event.target;
    // console.log(inputs);
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const errorList = errors.map((error, i) =>
    <li style={{ color: 'red' }} key={i}>
      {error}
    </li>
  );

  return (
    <form onSubmit={handleSubmit}>
      Signup
      <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      <button>signup</button>

      <ul>
        {errors.length > 0 && errorList}
      </ul>
    </form>
  );
};

export default withRouter(SignUp);