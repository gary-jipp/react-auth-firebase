import React, { useContext } from 'react';
import { context } from '../providers/AuthProvider';

const Home = function (props) {
  const { handleSignout } = useContext(context);

  return (
    <div>
      <h3>Home Page</h3>
      <div>
        <button onClick={handleSignout}>
          sign out </button></div>
    </div>
  );
};

export default Home;