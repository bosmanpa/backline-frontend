import React, { Component } from 'react';
import { addRenterProfile } from '../actions/index'
import { connect } from 'react-redux';


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class PromoterCreate extends Component{
    state={
        renter_name:'',
        renter_location:'',
        renter_info:''
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
          body: JSON.stringify({...this.state, renter_created: new Date()})
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.addRenterProfile(user)
            this.props.history.push('/promoterprofile')
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
                    <Form.Group controlId="renter_name" value={this.state.renter_name} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Promoter/Group Name</Form.Label>
                        <Form.Control placeholder="Enter Promoter/Group Name" />
                    </Form.Group>
                    <Form.Group controlId="renter_location" value={this.state.renter_location} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="Enter Location" />
                    </Form.Group>
                    <Form.Group controlId="renter_info" value={this.state.renter_info} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Promoter/Group Info</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter Promoter/Group Info" />
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
      addRenterProfile: (user) => {
        dispatch(addRenterProfile(user))
      }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(PromoterCreate);
