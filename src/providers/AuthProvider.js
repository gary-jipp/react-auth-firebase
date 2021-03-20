import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods';

const AuthProvider = function (props) {
  const [user, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    authMethods.init();
  }, []);

  const handleSignup = function () {
    // calling signup from firebase server
    return authMethods.signup(user.email, user.password, setErrors, setToken);
    // console.log(errors, token);
  };

  const handleSignin = function () {
    // signin - returns a promise (in case we want to wait)
    return authMethods.signin(user.email, user.password, setErrors, setToken);
  };

  // signout - returns a promise
  const handleSignout = function () {
    return authMethods.signout(setErrors, setToken);
  };

  const data = {
    handleSignup,
    handleSignin,
    token,
    inputs: user,
    setInputs,
    errors,
    handleSignout,
  };

  return (
    <context.Provider value={data}>
      {props.children}
    </context.Provider>
  );
};

export default AuthProvider;
export const context = React.createContext();