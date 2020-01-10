import React, { Component } from 'react';
import { updateRenterProfile } from '../actions/index'
import { loginSuccess } from '../actions/index'
import WithAuth from './WithAuth';
import { connect } from 'react-redux';

class PromoterUpdate extends Component{
    
    state={
        renter_name:'',
        renter_location:'',
        renter_info:''
    }

    componentDidMount(){
        this.setState({
            renter_name: this.props.currentUser.renter_name,
            renter_location: this.props.currentUser.renter_location,
            renter_info: this.props.currentUser.renter_info
        })
    }

    componentDidUpdate(prevState) {
        if (this.props.currentUser.renter_name !== prevState.currentUser.renter_name) {
            this.setState({
                renter_name: this.props.currentUser.renter_name,
                renter_location: this.props.currentUser.renter_location,
                renter_info: this.props.currentUser.renter_info
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
            this.props.updateRenterProfile(user)
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
            renter_created: null,
            renter_name: null,
            renter_location: null,
            renter_info: null
          })
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.updateRenterProfile(user)
            this.props.history.push('/dashboard')
        })
      }


    render(){ 
        return (
            <div>
                PromoterUpdate
                <form onSubmit={this.handleSubmit}>
                    Promoter Name <input type='text' name={'renter_name'} onChange={(e) => this.handleInputChange(e)} value={this.state.renter_name} /><br/>
                    Location <input type='text' name={'renter_location'} onChange={(e) => this.handleInputChange(e)} value={this.state.renter_location} /><br/>
                    Info <input type='text' name={'renter_info'} onChange={(e) => this.handleInputChange(e)} value={this.state.renter_info} /><br/>
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
        updateRenterProfile: (user) => {
            dispatch(updateRenterProfile(user))
        },
        loginSuccess: (user) => {
            dispatch(loginSuccess(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(PromoterUpdate));