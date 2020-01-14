import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setUserEvents } from '../actions/index'



class PromoterProfile extends Component{
    state={
      events: []
    }

    componentDidMount () {
      fetch('http://localhost:3001/events')
      .then(resp => resp.json())
      .then(events => {
        this.setState({events: events})
        const userEvents = events.filter(event => event.renter_id === this.props.currentUser.id)
        this.props.setUserEvents(userEvents)  
      })
    }
    componentDidUpdate(prevState) {
      if (this.props.currentUser.owner_name !== prevState.currentUser.owner_name) {
        const userEvents = this.state.events.filter(event => event.renter_id === this.props.currentUser.id)
        this.props.setUserEvents(userEvents)
        }
    }

    handleButtonClick = (e) => { 
        this.props.history.push(e.target.id)
      }

    render(){
    
        return(
            <div>
                Promoter Profile
                <button id='/promoterupdate' onClick={this.handleButtonClick}>Update Promoter Profile</button>
                <button id='/addevent' onClick={this.handleButtonClick}>Add Event</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser, userEvents: state.userEvents}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginSuccess: (user) => {
        dispatch(loginSuccess(user))
      },
      setUserEvents: (events) => {
        dispatch(setUserEvents(events))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(PromoterProfile)) 