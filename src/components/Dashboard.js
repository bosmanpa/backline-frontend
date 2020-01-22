import React, { Component } from 'react';
import { connect } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

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
        <Image src="https://www.pngitem.com/pimgs/m/508-5087356_vector-cats-profile-circle-hd-png-download.png" roundedCircle fluid/>
        <Button variant="primary" id='/promoterprofile' onClick={this.handleButtonClick}>View Promoter Profile</Button>
        </Col>
        <Col>
        <Image src="https://www.pngitem.com/pimgs/m/508-5087356_vector-cats-profile-circle-hd-png-download.png" roundedCircle fluid/>
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
            <Image src="https://www.pngitem.com/pimgs/m/508-5087356_vector-cats-profile-circle-hd-png-download.png" roundedCircle fluid/>
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
            <Image src="https://www.pngitem.com/pimgs/m/508-5087356_vector-cats-profile-circle-hd-png-download.png" roundedCircle fluid/>
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


export default connect(mapStateToProps, null)(Dashboard);