import React, { Component } from 'react';
import { loginSuccess } from '../actions/index'
import { connect } from 'react-redux'
import WithAuth from './WithAuth.js'

class Dashboard extends Component {

  handleButtonClick = (event) => { 
    this.props.history.push(event.target.id)
  }

  render(){
    if(this.props.currentUser.renter_created && this.props.currentUser.owner_created){    
    return (
      <div>
        <button id='/promotershow' onClick={this.handleButtonClick}>View Promoter Profile</button>
        <button id='/promoterupdate' onClick={this.handleButtonClick}>Update Promoter Profile</button>
        <button id='/ownershow' onClick={this.handleButtonClick}>View Owner Profile</button>
        <button id='/ownerupdate' onClick={this.handleButtonClick}>Update Owner Profile</button>
      </div>
    )}
    else if (this.props.currentUser.renter_created && !this.props.currentUser.owner_created) {
      return(
        <div>
          <button id='/promotershow' onClick={this.handleButtonClick}>View Promoter Profile</button>
          <button id='/promoterupdate' onClick={this.handleButtonClick}>Update Promoter Profile</button>
          <button id='/ownercreate' onClick={this.handleButtonClick}>Create Owner Profile</button>
        </div>
      )
    }
    else if (!this.props.currentUser.renter_created && this.props.currentUser.owner_created){
      return (
        <div>
          <button id='/promotercreate' onClick={this.handleButtonClick}>Create Promoter Profile</button>
          <button id='/ownershow' onClick={this.handleButtonClick}>View Owner Profile</button>
          <button id='/ownerupdate' onClick={this.handleButtonClick}>Update Owner Profile</button>
        </div>
      )
    }
    else if (!this.props.currentUser.renter_created && !this.props.currentUser.owner_created){
      return (
        <div>
          <button id='/promotercreate' onClick={this.handleButtonClick}>Create Promoter Profile</button>
          <button id='/ownercreate'onClick={this.handleButtonClick}>Create Owner Profile</button>
        </div>
      )
    }
  
  
  }
}

const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (user) => {
      dispatch(loginSuccess(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Dashboard));