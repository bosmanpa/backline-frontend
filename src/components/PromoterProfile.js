import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setUserEvents } from '../actions/index'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import { setAllOwnedEquipment } from '../actions/index'

import EventCard from './EventCard'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


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

            <Container>
            <Row>
              <Col></Col>
              <Col>
              <Button variant="primary" id='/dashboard' onClick={this.handleButtonClick}>Back to Dashboard</Button>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <h2>Promoter Profile</h2>
                <Card style={{ width: '28rem'}}>
                  <Card.Body>
                    <Card.Title>{this.props.currentUser.renter_name}</Card.Title>
                    <Card.Text>{this.props.currentUser.renter_location}</Card.Text>
                    <Card.Text>{this.props.currentUser.renter_info}</Card.Text>
                  </Card.Body>
                </Card>
                <Button variant="primary" id='/promoterupdate' onClick={this.handleButtonClick}>Update Promoter Profile</Button>
              </Col>
              <Col>
                <h2>Your Events</h2>
                <Button variant="primary" id='/addevent' onClick={this.handleButtonClick}>Add Event</Button>
                <CardGroup>
                {this.renderEvents()}
                </CardGroup>
              </Col>
            </Row>
          </Container>
        
        
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
      },
      setAllOwnedEquipment: (equipments) => {
        dispatch(setAllOwnedEquipment(equipments))
      }
    }
  }


  
export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(PromoterProfile)) 