import React, { useContext } from 'react';
import { firebaseAuth } from '../providers/AuthProvider';

const Home = function (props) {
  const { handleSignout } = useContext(firebaseAuth);

  return (
    <div>
      Home, login successful
      <button onClick={handleSignout}>sign out </button>
    </div>
  );
};

export default Home;