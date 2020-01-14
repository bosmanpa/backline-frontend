import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import OwnerCreate from './components/OwnerCreate'
import PromoterCreate from './components/PromoterCreate'
import OwnerUpdate from './components/OwnerUpdate'
import PromoterUpdate from './components/PromoterUpdate'
import OwnerProfile from './components/OwnerProfile'
import PromoterProfile from './components/PromoterProfile'
import AddEquipment from './components/AddEquipment'
import AddEvent from './components/AddEvent'
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
            <Route exact path='/ownerprofile' component={OwnerProfile} />
            <Route exact path='/promoterprofile' component={PromoterProfile} />
            <Route exact path='/addequipment' component={AddEquipment} />
            <Route exact path='/addevent' component={AddEvent} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
