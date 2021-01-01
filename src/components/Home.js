import React, { useContext } from 'react';
import { context } from '../providers/AuthProvider';

const Home = function (props) {
  const { handleSignout } = useContext(context);

  return (
    <div>
      Home, login successful
      <button onClick={handleSignout}>sign out </button>
    </div>
  );
};

export default Home;