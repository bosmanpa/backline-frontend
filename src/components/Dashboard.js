import React, { Component } from 'react';
import { loginSuccess } from '../actions/index'
import { connect } from 'react-redux'
import WithAuth from './WithAuth.js'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Dashboard extends Component {

  handleButtonClick = (event) => { 
    this.props.history.push(event.target.id)
  }

  render(){
    if(this.props.currentUser.renter_created && this.props.currentUser.owner_created){    
    return (
    <Container>
      <Row>
        <Col>
        <Button variant="primary" id='/promoterprofile' onClick={this.handleButtonClick}>View Promoter Profile</Button>
        </Col>
        <Col>
        <Button variant="primary" id='/ownerprofile' onClick={this.handleButtonClick}>View Owner Profile</Button>
        </Col>
      </Row>
    </Container>
    )}
    else if (this.props.currentUser.renter_created && !this.props.currentUser.owner_created) {
      return(
        <Container>
          <Row>
            <Col>
            <Button variant="primary" id='/promoterprofile' onClick={this.handleButtonClick}>View Promoter Profile</Button>
            </Col>
            <Col>
            <Button variant="primary" id='/ownercreate' onClick={this.handleButtonClick}>Create Owner Profile</Button>
            </Col>
          </Row>
        </Container>
      )
    }
    else if (!this.props.currentUser.renter_created && this.props.currentUser.owner_created){
      return (
        <Container>
          <Row>
            <Col>
            <Button variant="primary" id='/promotercreate' onClick={this.handleButtonClick}>Create Promoter Profile</Button>
            </Col>
            <Col>
            <Button variant="primary" id='/ownerprofile' onClick={this.handleButtonClick}>View Owner Profile</Button>
            </Col>
          </Row>
        </Container>
      )
    }
    else if (!this.props.currentUser.renter_created && !this.props.currentUser.owner_created){
      return (
        <Container>
          <Row>
            <Col>
            <Button variant="primary" id='/promotercreate' onClick={this.handleButtonClick}>Create Promoter Profile</Button>
            </Col>
            <Col>
            <Button variant="primary" id='/ownercreate' onClick={this.handleButtonClick}>Create Owner Profile</Button>
            </Col>
          </Row>
        </Container>      
      )
    }
  
  
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Dashboard));