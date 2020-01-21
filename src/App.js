import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import LoginWrapper from "./components/LoginWrapper"
import LoggedOutNavBar from './components/LoggedOutNavBar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LoggedOutNavBar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route path="/" component={LoginWrapper} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
