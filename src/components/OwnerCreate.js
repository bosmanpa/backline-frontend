import React, { Component } from 'react';
import { addOwnerProfile } from '../actions/index'
import { loginSuccess } from '../actions/index'
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class OwnerCreate extends Component{
    
    state={
        owner_name:'',
        owner_location:'',
        owner_info:''
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
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
            this.props.history.push('/ownerprofile')
        })
      }
      handleBackClick = () =>{
        this.props.history.push('/dashboard')
      }

    render(){ 
        return (
          <Container>
        <Row>
            <Col></Col>
            <Col xs={6}> 
              <h2>Create Your Profile</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="owner_name" value={this.state.owner_name} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Owner/Company Name</Form.Label>
                        <Form.Control placeholder="Enter Owner/Company Name" />
                    </Form.Group>
                    <Form.Group controlId="owner_location" value={this.state.owner_location} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="Enter Location" />
                    </Form.Group>
                    <Form.Group controlId="owner_info" value={this.state.owner_info} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Owner/Company Info</Form.Label>
                        <Form.Control placeholder="Enter Owner/Company Info" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Create Profile
                    </Button>
                </Form>
            </Col>
            <Col></Col>
        </Row>
        <Row>
              <Col></Col>
              <Col>
              <Button variant="primary" onClick={this.handleBackClick}>Back To Dashboard</Button>
              </Col>
              <Col></Col>
              </Row>
      </Container>
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
      },
      setEquipmentTypes: (equipmentTypes) => {
        dispatch(setEquipmentTypes(equipmentTypes))
      },
      setEquipmentModels: (equipmentModels) => {
        dispatch(setEquipmentModels(equipmentModels))
      }
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(OwnerCreate));
