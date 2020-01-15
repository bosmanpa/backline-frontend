import React, { Component } from 'react';
import '../App.css';
import { loginSuccess } from '../actions/index'
import { connect } from 'react-redux'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Login extends Component {
    state = {
      username: 'user',
      password: 'password',
    }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3001/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert('invalid credentials')
      } else {
        localStorage.setItem('token', data.token)
        this.props.loginSuccess(data)
        this.props.history.push('/dashboard')
      }
    })
  }

  redirectToSignup = () => {
    this.props.history.push('/signup')
  }
  
  render(){
    return (
      <Container>
        <Row>
            <Col></Col>
            <Col xs={6}> 
                <Form onSubmit={this.handleLogin}>
                    <Form.Group controlId="username" value={this.state.username} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="password" value={this.state.password} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Row>
                      <Col></Col>
                      <Col>
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                      </Col>
                      <Col></Col>
                      <Col>
                      <Button variant="primary" onClick={this.redirectToSignup}>
                        Sign Up
                      </Button>
                      </Col>
                      <Col></Col>
                    </Row>
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
    }
  }
}




export default connect(null, mapDispatchToProps)(Login);