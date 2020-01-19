import React, { Component } from 'react'
import { loginSuccess } from '../actions/index'
import { connect } from 'react-redux';
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import { setAllOwnedEquipment } from '../actions/index'


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Signup extends Component{
state ={
    username: '',
    password: '',
    password_confirmation: ''
}
handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSignup = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3001/users', reqObj)
    .then(resp => resp.json())
    .then(data => {
      this.props.loginSuccess(data.user)
      localStorage.setItem('token', data.token)
      this.props.history.push('/dashboard')
    })
  }


render(){
    return (
      <Container>
        <Row>
            <Col></Col>
            <Col xs={6}> 
                <Form onSubmit={this.handleSignup}>
                    <Form.Group controlId="username" value={this.state.username} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="password" value={this.state.password} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group controlId="password_confirmation" value={this.state.password_confirmation} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Col>
            <Col></Col>
        </Row>
      </Container>
    );
  }
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

export default connect(null, mapDispatchToProps)(Signup)