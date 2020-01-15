import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'
import { setOwnedEquipment } from '../actions/index'
import { setEquipmentTypes } from '../actions/index'
import { setEquipmentModels } from '../actions/index'
import OwnedEquipment from './OwnedEquipment'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class OwnerProfile extends Component{
  state={
    owned_equipments: []
  }
  componentDidMount(){
    fetch('http://localhost:3001/owned_equipments')
    .then(resp => resp.json())
    .then(data => {
      this.setState({owned_equipments:data})
      const owned_equipment = data.filter(equipment => equipment.owner_id === this.props.currentUser.id)
      this.props.setOwnedEquipment(owned_equipment)
    })
  }


  componentDidUpdate(prevState) {
    if (this.props.currentUser.owner_name !== prevState.currentUser.owner_name) {
      const owned_equipment = this.state.owned_equipments.filter(equipment => equipment.owner_id === this.props.currentUser.id)
      this.props.setOwnedEquipment(owned_equipment)
      }
  }



    handleButtonClick = (event) => { 
        this.props.history.push(event.target.id)
      }

    renderOwnedEquipments = () =>{
      if (this.props.ownedEquipment.length !== 0 && this.props.equipmentModels.length !==0 && this.props.equipmentTypes.length !==0 ){
        return this.props.ownedEquipment.map(equipment => {
        return <OwnedEquipment equipment={equipment}/>
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
                <h2>Owner Profile</h2>
                <Card style={{ width: '28rem'}}>
                  <Card.Body>
                    <Card.Title>{this.props.currentUser.owner_name}</Card.Title>
                    <Card.Text>{this.props.currentUser.owner_location}</Card.Text>
                    <Card.Text>{this.props.currentUser.owner_info}</Card.Text>
                  </Card.Body>
                </Card>
                <Button variant="primary" id='/ownerupdate' onClick={this.handleButtonClick}>Update Owner Profile</Button>
              </Col>
              <Col>
                <h2>Your Owned Equipment</h2>
                <Button variant="primary" id='/addequipment' onClick={this.handleButtonClick}>Add Equipment</Button>
                <CardGroup>
                {this.renderOwnedEquipments()}
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
      ownedEquipment: state.ownedEquipment,
      equipmentModels: state.equipmentModels, 
      equipmentTypes: state.equipmentTypes
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginSuccess: (user) => {
        dispatch(loginSuccess(user))
      },
      setOwnedEquipment: (equipments) => {
        dispatch(setOwnedEquipment(equipments))
      },
      setEquipmentTypes: (equipmentTypes) => {
        dispatch(setEquipmentTypes(equipmentTypes))
      },
      setEquipmentModels: (equipmentModels) => {
        dispatch(setEquipmentModels(equipmentModels))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(OwnerProfile)) 