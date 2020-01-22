import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOwnedEquipment } from '../actions/index'
import OwnedEquipment from './OwnedEquipment'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class OwnerProfile extends Component{
  state={
    owned_equipments: [],
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

    renderRentals = () => {
      if (this.props.allRentals.length !== 0){
      const userRentals = this.props.allRentals.filter(rental => rental.owned_equipment.owner_id === this.props.currentUser.id )
      return userRentals.map(rental =>{
          const modelRented = this.props.equipmentModels.filter(model => rental.owned_equipment.model_id === model.id)
          return (
            <li>{modelRented[0].name} @ <u>{rental.event.name}</u>:<br></br><b>{new Date(rental.event.start_date).toDateString()} - {new Date(rental.event.end_date).toDateString()}</b></li>
          )
        })

    }
    }

    render(){
    
        return(
          <Container>
            <Row>
              <Col>
                <h2>Owner Profile</h2>
                <Button variant="primary" id='/ownerupdate' onClick={this.handleButtonClick}>Update Owner Profile</Button>
                <Card className="profile-card">
                  <Card.Body>
                    <Card.Title>{this.props.currentUser.owner_name}</Card.Title>
                    <Card.Text>{this.props.currentUser.owner_location}</Card.Text>
                    <Card.Text>{this.props.currentUser.owner_info}</Card.Text>
                  </Card.Body>
                </Card>
                <h2>Your Rentals</h2>
                <Card className="rentals-card">
                  <Card.Body>
                      <ul>
                        {this.renderRentals()}
                      </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <h2>Your Owned Equipment</h2>
                <Button variant="primary" id='/addequipment' onClick={this.handleButtonClick}>Add Equipment</Button>
                <CardColumns>
                {this.renderOwnedEquipments()}
                </CardColumns>
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
      equipmentTypes: state.equipmentTypes,
      allOwnedEquipment: state.allOwnedEquipment,
      allRentals: state.allRentals   
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setOwnedEquipment: (equipments) => {
        dispatch(setOwnedEquipment(equipments))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfile) 