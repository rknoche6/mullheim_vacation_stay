import React, { useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import PrivateRoute from './private-route';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  const [auth, setAuth] = useState(false)
  const [username, setUsername] = useState("")

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path="/signin" render={(props) => (
          <SignIn {...props} auth={setAuth} username={setUsername} />
        )} exact />
        <Route path="/signup" render={(props) => (
          <SignUp {...props} auth={setAuth} username={setUsername} />
        )} exact />
        <PrivateRoute path="/home" component={Booking} username={username} auth={auth} setAuth={setAuth} exact />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
