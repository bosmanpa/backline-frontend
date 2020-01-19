import React, { Component } from 'react';
import { updateOwnerProfile } from '../actions/index'
import { connect } from 'react-redux';


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class OwnerUpdate extends Component{
    
    state={
        owner_name:'',
        owner_location:'',
        owner_info:''
    }

    componentDidMount(){
        this.setState({
            owner_name: this.props.currentUser.owner_name,
            owner_location: this.props.currentUser.owner_location,
            owner_info: this.props.currentUser.owner_info
        })
    }

    componentDidUpdate(prevState) {
        if (this.props.currentUser.owner_name !== prevState.currentUser.owner_name) {
            this.setState({
                owner_name: this.props.currentUser.owner_name,
                owner_location: this.props.currentUser.owner_location,
                owner_info: this.props.currentUser.owner_info
            })
        }
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
          body: JSON.stringify(this.state)
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.updateOwnerProfile(user)
            this.props.history.push('/ownerprofile')
        })
      }

      handleDelete = () => {
        const reqObj = {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            owner_created: null,
            owner_name: null,
            owner_location: null,
            owner_info: null
          })
        }
    
        fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.updateOwnerProfile(user)
            this.props.history.push('/dashboard')
        })
      }
      handleBackClick = () =>{
        this.props.history.push('/ownerprofile')
      }

    render(){ 
        return (


                      <Container>
        <Row>
            <Col></Col>
            <Col xs={6}> 
              <h2>Update Your Profile</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="owner_name" value={this.state.owner_name} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Owner/Company Name</Form.Label>
                        <Form.Control defaultValue={this.state.owner_name} />
                    </Form.Group>
                    <Form.Group controlId="owner_location" value={this.state.owner_location} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control defaultValue={this.state.owner_location} />
                    </Form.Group>
                    <Form.Group controlId="owner_info" value={this.state.owner_info} onChange={(e) => this.handleInputChange(e)}>
                        <Form.Label>Owner/Company Info</Form.Label>
                        <Form.Control as="textarea" rows="3" defaultValue={this.state.owner_info} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Update Profile
                    </Button>
                </Form>
            </Col>
            <Col></Col>
        </Row>
        <Row>
              <Col></Col>
              <Col>
              <Button variant="primary" onClick={this.handleDelete}> Delete this Profile</Button>
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
        );
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateOwnerProfile: (user) => {
      dispatch(updateOwnerProfile(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerUpdate);