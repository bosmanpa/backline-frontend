import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import WithAuth from './WithAuth.js'

import { loginSuccess } from '../actions/index'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import { setAllOwnedEquipment } from '../actions/index'

import Dashboard from './Dashboard'
import OwnerCreate from './OwnerCreate'
import PromoterCreate from './PromoterCreate'
import OwnerUpdate from './OwnerUpdate'
import PromoterUpdate from './PromoterUpdate'
import OwnerProfile from './OwnerProfile'
import PromoterProfile from './PromoterProfile'
import AddEquipment from './AddEquipment'
import AddEvent from './AddEvent'
import EventShow from './EventShow'

class LoginWrapper extends Component {

  render(){
    const token = localStorage.getItem('token')
    if(!token){
        this.props.history.push('/login')
    } 
  
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/promotercreate' component={PromoterCreate} />
            <Route exact path='/ownercreate' component={OwnerCreate} />
            <Route exact path='/ownerupdate' component={OwnerUpdate} />
            <Route exact path='/promoterupdate' component={PromoterUpdate} />
            <Route exact path='/ownerprofile' component={OwnerProfile} />
            <Route exact path='/promoterprofile' component={PromoterProfile} />
            <Route exact path='/addequipment' component={AddEquipment} />
            <Route exact path='/addevent' component={AddEvent} />
            <Route exact path='/eventshow' component={EventShow} />
          </Switch>
      </div>
    </BrowserRouter>
  )};
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
    }

const mapDispatchToProps = (dispatch) => {
return {
    loginSuccess: (user) => {
    dispatch(loginSuccess(user))
    },
    setEquipmentTypes: (equipmentTypes) => {
    dispatch(setEquipmentTypes(equipmentTypes))
    },
    setEquipmentModels: (equipmentModels) => {
    dispatch(setEquipmentModels(equipmentModels))
    },
    setAllOwnedEquipment: (equipments) => {
    dispatch(setAllOwnedEquipment(equipments))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(LoginWrapper));