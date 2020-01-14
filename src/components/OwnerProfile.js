import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setOwnedEquipment } from '../actions/index'



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
      this.props.ownedEquipment.equipment.forEach(equipment => {
        return
      });
    }

    render(){
        return(
            <div>
                Owner Profile
                <button id='/ownerupdate' onClick={this.handleButtonClick}>Update Owner Profile</button>
                <button id='/addequipment' onClick={this.handleButtonClick}>Add Equipment</button>
                {this.renderOwnedEquipments}
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
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(OwnerProfile)) 