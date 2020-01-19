import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import { setAllOwnedEquipment } from '../actions/index'


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
          [e.target.id]: e.target.value
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
      handleBackClick = () =>{
        this.props.history.push('/promoterprofile')
      }
    render(){
        return (


            <Container>
        <Row>
            <Col></Col>
            <Col xs={6}> 
              <h2>Add Event</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name" value={this.state.name} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control placeholder="Enter Event Name" />
                    </Form.Group>
                    <Form.Group controlId="location" value={this.state.location} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="Enter Event Location" />
                    </Form.Group>
                    <Form.Group controlId="description" value={this.state.description} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Event Description</Form.Label>
                        <Form.Control placeholder="Enter Event Description" />
                    </Form.Group>
                    Start Date<input type="date" id='start_date' onChange={(e) => this.handleInputChange(e)} value={this.state.start_date}/>
                    End Date<input type="date" id='end_date' onChange={(e) => this.handleInputChange(e)} value={this.state.end_date}/><br/>
                    <Button variant="primary" type="submit">
                    Create Event
                    </Button>
                </Form>
            </Col>
            <Col></Col>
        </Row>

              <Row>
              <Col></Col>
              <Col>
              <Button variant="primary" onClick={this.handleBackClick}>Back To Profile</Button>
              </Col>
              <Col></Col>
              </Row>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(AddEvent)) 