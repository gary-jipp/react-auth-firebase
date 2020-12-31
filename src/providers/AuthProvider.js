import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods';

export const firebaseAuth = React.createContext();

const AuthProvider = function (props) {
  const initState = { email: '', password: '' };
  const [inputs, setInputs] = useState(initState);
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

  const obj = {
    handleSignup,
    handleSignin,
    token,
    inputs,
    setInputs,
    errors,
    handleSignout,
  };

  return (
    <firebaseAuth.Provider
      value={obj}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;