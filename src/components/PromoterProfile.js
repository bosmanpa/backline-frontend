import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setUserEvents } from '../actions/index'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import EventCard from './EventCard'



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

      renderEvents = () =>{
        if (this.props.userEvents.length !== 0){
          return this.props.userEvents.map(event => {
          return <EventCard event={event}/>
        })}
      }


    render(){
    
        return(
            <div>
                Promoter Profile
                <button id='/promoterupdate' onClick={this.handleButtonClick}>Update Promoter Profile</button>
                <button id='/addevent' onClick={this.handleButtonClick}>Add Event</button>
                <button id='/dashboard' onClick={this.handleButtonClick}>Back to Dashboard</button>
                {this.renderEvents()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser, 
      userEvents: state.userEvents}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginSuccess: (user) => {
        dispatch(loginSuccess(user))
      },
      setUserEvents: (events) => {
        dispatch(setUserEvents(events))
      },
      setEquipmentTypes: (equipmentTypes) => {
        dispatch(setEquipmentTypes(equipmentTypes))
      },
      setEquipmentModels: (equipmentModels) => {
        dispatch(setEquipmentModels(equipmentModels))
      }
    }
  }


  
export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(PromoterProfile)) 