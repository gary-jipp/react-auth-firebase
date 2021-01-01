
// add useContext
import React, { useContext } from 'react';
import { context } from '../providers/AuthProvider';

const SignIn = function () {
  const { handleSignin, inputs, setInputs, errors } = useContext(context);

  const handleSubmit = function (event) {
    event.preventDefault();
    handleSignin();
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
      <h3>Please Sign In</h3>
      <div>
        <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      </div>
      <div>
        <input onChange={handleChange} type="password" name="password" placeholder='password' value={inputs.password} />
      </div>
      <button>signin</button>

      <ul>
        {errors.length > 0 && errorList}
      </ul>
    </form>
  );
};

export default SignIn;