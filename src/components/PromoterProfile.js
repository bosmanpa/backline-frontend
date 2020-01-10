import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'


class PromoterProfile extends Component{
    
    handleButtonClick = (event) => { 
        this.props.history.push(event.target.id)
      }

    render(){
        return(
            <div>
                Promoter Profile
                <button id='/promoterupdate' onClick={this.handleButtonClick}>Update Promoter Profile</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(PromoterProfile)) 