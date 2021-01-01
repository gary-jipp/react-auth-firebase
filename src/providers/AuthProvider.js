import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods';

export const context = React.createContext();

const AuthProvider = function (props) {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    authMethods.init();
  }, []);

  const handleSignup = function () {
    // console.log('handleSignup');

    // calling signup from firebase server
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    // console.log(errors, token);
  };

  const handleSignin = function () {
    // console.log('handleSignin');

    // signin
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    // console.log(inputs.email);
    // console.log(errors, token);
  };

  const handleSignout = function () {
    authMethods.signout(setErrors, setToken);
  };

  const value = {
    handleSignup,
    handleSignin,
    token,
    inputs,
    setInputs,
    errors,
    handleSignout,
  };

  return (
    <context.Provider
      value={value}>
      {props.children}
    </context.Provider>
  );
};

export default AuthProvider;