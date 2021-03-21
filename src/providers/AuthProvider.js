import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods';

export default function AuthProvider(props) {
  const [user, setUser] = useState({ email: '', password: '' });
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

  const authData = {
    user,
    token,
    errors,
    setUser,
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