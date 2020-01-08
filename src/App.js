import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
