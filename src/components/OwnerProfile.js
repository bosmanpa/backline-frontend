import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'


class OwnerProfile extends Component{
    
    handleButtonClick = (event) => { 
        this.props.history.push(event.target.id)
      }

    render(){
        return(
            <div>
                Owner Profile
                <button id='/ownerupdate' onClick={this.handleButtonClick}>Update Owner Profile</button>

            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(OwnerProfile)) 