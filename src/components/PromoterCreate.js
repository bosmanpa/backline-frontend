import React, { Component } from 'react';
import { addRenterProfile } from '../actions/index'
import { loginSuccess } from '../actions/index'
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'

class PromoterCreate extends Component{
    state={
        renter_name:'',
        renter_location:'',
        renter_info:''
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...this.state, renter_created: new Date()})
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.addRenterProfile(user)
            this.props.history.push('/dashboard')
        })
      }


    render(){ 
        return (
            <div>
                PromoterCreate
                <form onSubmit={this.handleSubmit}>
                    Promoter Name <input name={'renter_name'} onChange={(e) => this.handleInputChange(e)} value={this.state.renter_name} /><br/>
                    Location <input name={'renter_location'} onChange={(e) => this.handleInputChange(e)} value={this.state.renter_location} /><br/>
                    Info <input name={'renter_info'} onChange={(e) => this.handleInputChange(e)} value={this.state.renter_info} /><br/>
                    <input type='submit' value='submit' />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
  }


  const mapDispatchToProps = (dispatch) => {
    return {
      addRenterProfile: (user) => {
        dispatch(addRenterProfile(user))
      },
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
  
export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(PromoterCreate));
