import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import { Redirect } from 'react-router-dom';

class EventShow extends Component {



    
    render(){
        if (this.props.event.length !==0 ){
        return(
            <div>
                {this.props.event[0].name}
            </div>
        )} else {
            return(
                <Redirect to='/promoterprofile'/>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
      event: state.eventShow
    }
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
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(EventShow)) 