import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setOwnedEquipment } from '../actions/index'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import OwnedEquipment from './OwnedEquipment'



class OwnerProfile extends Component{
  state={
    owned_equipments: []
  }
  componentDidMount(){
    fetch('http://localhost:3001/owned_equipments')
    .then(resp => resp.json())
    .then(data => {
      this.setState({owned_equipments:data})
      const owned_equipment = data.filter(equipment => equipment.owner_id === this.props.currentUser.id)
      this.props.setOwnedEquipment(owned_equipment)
    })
  }


  componentDidUpdate(prevState) {
    if (this.props.currentUser.owner_name !== prevState.currentUser.owner_name) {
      
      const owned_equipment = this.state.owned_equipments.filter(equipment => equipment.owner_id === this.props.currentUser.id)
      this.props.setOwnedEquipment(owned_equipment)
      }
  }



    handleButtonClick = (event) => { 
        this.props.history.push(event.target.id)
      }

    renderOwnedEquipments = () =>{
      if (this.props.ownedEquipment.length !== 0){
        console.log('hey')
        return this.props.ownedEquipment.map(equipment => {
        return <OwnedEquipment equipment={equipment}/>
      })}
    }

    render(){
    
        return(
            <div>
                Owner Profile
                <button id='/ownerupdate' onClick={this.handleButtonClick}>Update Owner Profile</button>
                <button id='/addequipment' onClick={this.handleButtonClick}>Add Equipment</button>
                {this.renderOwnedEquipments()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser, ownedEquipment: state.ownedEquipment}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginSuccess: (user) => {
        dispatch(loginSuccess(user))
      },
      setOwnedEquipment: (equipments) => {
        dispatch(setOwnedEquipment(equipments))
      },
      setEquipmentTypes: (equipmentTypes) => {
        dispatch(setEquipmentTypes(equipmentTypes))
      },
      setEquipmentModels: (equipmentModels) => {
        dispatch(setEquipmentModels(equipmentModels))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(OwnerProfile)) 