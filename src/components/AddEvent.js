import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'

class AddEvent extends Component{
    state={
        name: '',
        location: '',
        description: '',
        start_date: '',
        end_date: ''
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...this.state, renter_id: this.props.currentUser.id})
        }
        
        fetch('http://localhost:3001/events', reqObj)
        .then(resp => resp.json())
        .then(event => {            
            this.props.history.push('/promoterprofile')
        })
      }
      
    render(){
        return (
            <div>
                Add Event
                <form onSubmit={this.handleSubmit}>
                        Name <input name={'name'} onChange={(e) => this.handleInputChange(e)} value={this.state.name} /><br/>
                        Location <input name={'location'} onChange={(e) => this.handleInputChange(e)} value={this.state.location} /><br/>
                        Description <input name={'description'} onChange={(e) => this.handleInputChange(e)} value={this.state.description} /><br/>
                        Start Date<input type="date" name={'start_date'} onChange={(e) => this.handleInputChange(e)} value={this.state.start_date}/><br/>
                        End Date<input type="date" name={'end_date'} onChange={(e) => this.handleInputChange(e)} value={this.state.end_date}/><br/>
                        <input type='submit' value='submit' />
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(AddEvent)) 