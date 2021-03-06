import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods';

export default function AuthProvider(props) {
  // Used by the login inputs onChange
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

  const authData = {
    inputs,
    token,
    errors,
    setInputs,
    handleSignin,
    handleSignup,
    handleSignout,
  };

  return (
    <authContext.Provider value={authData}>
      {props.children}
    </authContext.Provider>
  );
};

export const authContext = React.createContext();