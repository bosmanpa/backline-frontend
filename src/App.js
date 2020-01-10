import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import OwnerCreate from './components/OwnerCreate'
import PromoterCreate from './components/PromoterCreate'
import OwnerUpdate from './components/OwnerUpdate'
import PromoterUpdate from './components/PromoterUpdate'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/promotercreate' component={PromoterCreate} />
            <Route exact path='/ownercreate' component={OwnerCreate} />
            <Route exact path='/ownerupdate' component={OwnerUpdate} />
            <Route exact path='/promoterupdate' component={PromoterUpdate} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
