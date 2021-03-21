import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { authContext } from './providers/AuthProvider';
import './App.css';

function App() {
  const { token } = useContext(authContext);

  return (
    <div className="App">
      <BrowserRouter>
        {/* switch allows switching which components render.  */}
        <Switch>
          <Route exact path='/' render={rProps => token === null ? <SignIn /> : <Home />} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
