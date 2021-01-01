import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';

export const authMethods = {
  // firebase helper methods go here... 

  // Initialize Firebase
  init: function () {
    console.log("Initialize Firebase");
    // console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
  },

  signup: (email, password, setErrors, setToken) => {

    // returns a promise
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        const token = Object.entries(res.user)[5][1].b; // parse user token 

        //set token to localStorage & state
        localStorage.setItem('token', token);
        setToken(token);
      })
      .catch(err => {
        setErrors(prev => ([...prev, err.message]));
      });
  },

  signin: (email, password, setErrors, setToken) => {

    // returns a promise
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        const token = Object.entries(res.user)[5][1].b;

        //set token to localStorage 
        localStorage.setItem('token', token);
        setToken(window.localStorage.token);
      })
      .catch(err => {
        setErrors(prev => ([...prev, err.message]));
      });
  },

  //no need for email and password
  signout: (setErrors, setToken) => {

    // returns a promise
    return firebase.auth().signOut() // signOut is a no argument function
      .then(res => {
        localStorage.removeItem('token');
        setToken(null);
      })
      .catch(err => {
        //there shouldn't be an error from firebase here, but just in case
        setErrors(prev => ([...prev, err.message]));

        localStorage.removeItem('token');
        setToken(null);
        console.error(err.message);
      });
  },
};