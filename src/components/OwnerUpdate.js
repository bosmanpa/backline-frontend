import React, { Component } from 'react';
import { updateOwnerProfile } from '../actions/index'
import { loginSuccess } from '../actions/index'
import WithAuth from './WithAuth';
import { connect } from 'react-redux';

class OwnerUpdate extends Component{
    
    state={
        owner_name:'',
        owner_location:'',
        owner_info:''
    }

    componentDidMount(){
        this.setState({
            owner_name: this.props.currentUser.owner_name,
            owner_location: this.props.currentUser.owner_location,
            owner_info: this.props.currentUser.owner_info
        })
    }

    componentDidUpdate(prevState) {
        if (this.props.currentUser.owner_name !== prevState.currentUser.owner_name) {
            this.setState({
                owner_name: this.props.currentUser.owner_name,
                owner_location: this.props.currentUser.owner_location,
                owner_info: this.props.currentUser.owner_info
            })
        }
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
          body: JSON.stringify(this.state)
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.updateOwnerProfile(user)
            this.props.history.push('/dashboard')
        })
      }

      handleDelete = () => {
        const reqObj = {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            owner_created: null,
            owner_name: null,
            owner_location: null,
            owner_info: null
          })
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.updateOwnerProfile(user)
            this.props.history.push('/dashboard')
        })
      }

    render(){ 
        return (
            <div>
                OwnerUpdate
                <form onSubmit={this.handleSubmit}>
                    Owner Name <input type='text' name={'owner_name'} onChange={(e) => this.handleInputChange(e)} value={this.state.owner_name} /><br/>
                    Location <input type='text' name={'owner_location'} onChange={(e) => this.handleInputChange(e)} value={this.state.owner_location} /><br/>
                    Info <input type='text' name={'owner_info'} onChange={(e) => this.handleInputChange(e)} value={this.state.owner_info} /><br/>
                    <input type='submit' value='submit' />
                </form>
                <button onClick={this.handleDelete}>Delete This Profile</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateOwnerProfile: (user) => {
            dispatch(updateOwnerProfile(user))
        },
        loginSuccess: (user) => {
        dispatch(loginSuccess(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(OwnerUpdate));