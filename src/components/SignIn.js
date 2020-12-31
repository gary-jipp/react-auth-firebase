
// add useContext
import React, { useContext } from 'react';
import { firebaseAuth } from '../providers/AuthProvider';

const SignIn = function () {
  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = function (e) {
    e.preventDefault();
    // console.log('handleSubmit');
    handleSignin();

  };
  const handleChange = function (e) {
    const { name, value } = e.target;
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
      <h3>Please Sign In</h3>
      <div>
        <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      </div>
      <div>
        <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      </div>
      <button>signin</button>

      <ul>
        {errors.length && errorList}
      </ul>
    </form>
  );
};

export default SignIn;