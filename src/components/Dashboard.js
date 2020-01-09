import React, { Component } from 'react';
import { loginSuccess } from '../actions/index'
import { connect } from 'react-redux'
import WithAuth from './WithAuth.js'

class Dashboard extends Component {

  handleRenterClick = () => { 
    this.props.history.push('/promotercreate')
  }

  handleOwnerClick = () => {
    this.props.history.push('/ownercreate')
  }

  render(){
    if(this.props.currentUser.renter_created && this.props.currentUser.owner_created){    
    return (
      <div>
        <h4>Promoter Show Page</h4>
        <h4>Owner Show Page</h4>
      </div>
    )}
    else if (this.props.currentUser.renter_created && !this.props.currentUser.owner_created) {
      return(
        <div>
          <h4>Promoter Show Page</h4>
          <button onClick={this.handleOwnerClick}>Create Owner Profile</button>
        </div>
      )
    }
    else if (!this.props.currentUser.renter_created && this.props.currentUser.owner_created){
      return (
        <div>
          <button onClick={this.handleRenterClick}>Create Promoter Profile</button>
          <h4>Owner Show Page</h4>
        </div>
      )
    }
    else if (!this.props.currentUser.renter_created && !this.props.currentUser.owner_created){
      return (
        <div>
          <button onClick={this.handleRenterClick}>Create Promoter Profile</button>
          <button onClick={this.handleOwnerClick}>Create Owner Profile</button>
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