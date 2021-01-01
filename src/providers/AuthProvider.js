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
    // calling signup from firebase server
    return authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    // console.log(errors, token);
  };

  const handleSignin = function () {
    // signin - returns a promise (in case we want to wait)
    return authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
  };

  // signout - returns a promise
  const handleSignout = function () {
    return authMethods.signout(setErrors, setToken);
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