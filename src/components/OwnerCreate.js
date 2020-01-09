import React, { Component } from 'react';
import { addOwnerProfile } from '../actions/index'
import { loginSuccess } from '../actions/index'
import WithAuth from './WithAuth';
import { connect } from 'react-redux';

class OwnerCreate extends Component{
    
    state={
        owner_name:'',
        owner_location:'',
        owner_info:''
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
          body: JSON.stringify({...this.state, owner_created: new Date()})
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.addOwnerProfile(user)
            this.props.history.push('/dashboard')
        })
      }


    render(){ 
        return (
            <div>
                PromoterCreate
                <form onSubmit={this.handleSubmit}>
                    Owner Name <input name={'owner_name'} onChange={(e) => this.handleInputChange(e)} value={this.state.owner_name} /><br/>
                    Location <input name={'owner_location'} onChange={(e) => this.handleInputChange(e)} value={this.state.owner_location} /><br/>
                    Info <input name={'owner_info'} onChange={(e) => this.handleInputChange(e)} value={this.state.owner_info} /><br/>
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
        addOwnerProfile: (user) => {
            dispatch(addOwnerProfile(user))
      },
      loginSuccess: (user) => {
        dispatch(loginSuccess(user))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(OwnerCreate));
