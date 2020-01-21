import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class EventShow extends Component {
  state = {
    equipment_type: null,
    equipment_model: null,
    filtered_models: [],
    current_model_name: '',
    current_model_description: '',
    current_model_image: '',
    searchResults: []
  }

  componentDidMount(){
    this.typeDropdown()
  }
  
  componentDidUpdate(prevState) {
    if (this.props.equipmentTypes !== prevState.equipmentTypes) {
      this.typeDropdown()
    }
  }


  typeDropdown = () => {
    const typeDropdown = document.getElementById('equipment_type');
    typeDropdown.length = 0;
const defaultTypeOption = document.createElement('option');
    defaultTypeOption.text = 'Choose Equipment Type';
    defaultTypeOption.value = null
    typeDropdown.add(defaultTypeOption);
    typeDropdown.selectedIndex = 0;    
const modelDropdown = document.getElementById('equipment_model');
    modelDropdown.length = 0;
const defaultModelOption = document.createElement('option');
    defaultModelOption.text = 'Choose Model';
    defaultModelOption.value = null
    modelDropdown.add(defaultModelOption);
    modelDropdown.selectedIndex = 0;    

  this.props.equipmentTypes.forEach(type => {
    const option = document.createElement('option');
    option.text = type.name;
    option.value = type.id;
    typeDropdown.add(option);
    })
  }

  handleTypeChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
      this.fetchModels()
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
      const currentModel = this.state.filtered_models.filter(model => parseInt(e.target.value) === model.id)
      this.renderModelInfo(currentModel[0])
    }

    fetchModels = () => {
        fetch('http://localhost:3001/equipment_models')
        .then(resp => resp.json())
        .then(models => {
          const filteredModels = models.filter(model => model.equipment_type_id === Number.parseInt(this.state.equipment_type))
          const modelDropdown = document.getElementById('equipment_model')
          modelDropdown.length = 0;
          filteredModels.forEach(model => {
            const option = document.createElement('option');
              option.text = model.name;
              option.value = model.id;
              modelDropdown.add(option);
          })
        this.renderModelInfo(filteredModels[0])
        this.setState({filtered_models:filteredModels, equipment_model: filteredModels[0].id})
        })
    }

    renderModelInfo = (model) => {
      this.setState({ 
        current_model_name: model.name,
        current_model_description: model.description,
        current_model_image: model.image
      })
    }

    handleBackClick = () =>{
      this.props.history.push('/promoterprofile')
    }

    handleSearch = () => {
    
      const searchFiltered = this.props.allOwnedEquipment.filter(equipment => equipment.model_id === Number.parseInt(this.state.equipment_type))
      this.setState({searchResults: searchFiltered})
    }

    renderSearchResults = () => {      
      return this.state.searchResults.map( equipment => {
        return (
        <Card style={{ width: '22rem'}}>
        <Card.Body>
        <Card.Img variant="top" src={this.state.current_model_image}/>
        <Card.Title>USER ID:{equipment.owner_id}</Card.Title>
        <Card.Title>{this.state.current_model_name}</Card.Title>
        <Card.Text>{this.state.current_model_description}</Card.Text>
        <Button variant="primary" onClick={() => this.handleRentClick(equipment.id, this.props.event.id)}>Add this Equipment</Button>
        </Card.Body>
        </Card>)
      })
    }

    renderEventInfo = () =>{
      return(
        <Card style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>{this.props.event.name}</Card.Title>
            <Card.Text>{this.props.event.location}</Card.Text>
            <Card.Text>{this.props.event.description}</Card.Text>
        </Card.Body>
        </Card> 
      )
    }



    handleRentClick = (equipment_id, event_id) => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_id: event_id,
          equipment_id: equipment_id
        })
      }

      fetch('http://localhost:3001/equipment_rentals', reqObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      })
    }

    render(){
      if (this.state.equipment_model !== null && this.props.event.length !==0 && this.state.searchResults.length !== 0){
        return(
                 <Container>
<Row>
  <Col>{this.renderEventInfo()}</Col>
    <Col>
    <form>
      <select id='equipment_type' onChange={this.handleTypeChange}>
      </select>
    </form>
    <form>
      <select id='equipment_model' onChange={this.handleChange}>
      </select>
    </form>
    </Col>
  </Row>

<Row>
  <Col></Col>
  <Col>
<Card style={{ width: '22rem'}}>
<Card.Body>
    <Card.Img variant="top" src={this.state.current_model_image}/>
    <Card.Title>{this.state.current_model_name}</Card.Title>
    <Card.Text>{this.state.current_model_description}</Card.Text>
</Card.Body>
</Card>
</Col>
  </Row>
  <Row>
  <Col></Col>
  <Col>
  <Button variant="primary" onClick={this.handleSearch}>Search For This Equipment</Button>
  </Col>
  </Row>
  <Row>
  <Col></Col>
  <Col>
          {this.renderSearchResults()}
  </Col>
  </Row>
  <Row>
  <Col></Col>
  <Col>
  <Button variant="primary" onClick={this.handleBackClick}>Back To Profile</Button>
  </Col>
  </Row>
</Container>
        )
      }  

      if (this.state.equipment_model === null && this.props.event.length !==0){
      return(
      <Container>
      <Row>
        <Col>{this.renderEventInfo()}</Col>
        <Col>
          <form>
            <select id='equipment_type' onChange={this.handleTypeChange}>
            </select>
          </form>
          <form>
            <select id='equipment_model' onChange={this.handleChange}>
            </select>
          </form>
          <Button variant="primary" onClick={this.handleBackClick}>Back To Profile</Button>
          </Col>
          </Row>
        </Container>
    )}
    else if(this.props.event.length !==0 && this.state.equipment_model !== null) {
      return(         
       <Container>

        <Row>
        <Col>{this.renderEventInfo()}</Col>
            <Col>
            <form>
              <select id='equipment_type' onChange={this.handleTypeChange}>
              </select>
            </form>
            <form>
              <select id='equipment_model' onChange={this.handleChange}>
              </select>
            </form>
            </Col>
          </Row>

        <Row>
          <Col></Col>
          <Col>
        <Card style={{ width: '22rem'}}>
        <Card.Body>
            <Card.Img variant="top" src={this.state.current_model_image}/>
            <Card.Title>{this.state.current_model_name}</Card.Title>
            <Card.Text>{this.state.current_model_description}</Card.Text>
        </Card.Body>
        </Card>
        </Col>
          </Row>
          <Row>
          <Col></Col>
          <Col>
          <Button variant="primary" onClick={this.handleSearch}>Search For This Equipment</Button>
          </Col>
          </Row>
          <Row>
          <Col></Col>
          <Col>
          <Button variant="primary" onClick={this.handleBackClick}>Back To Profile</Button>
          </Col>
          </Row>
        </Container>
        )
    } else {
      return(
          null
      )
  }
}


}

const mapStateToProps = (state) => {
    return {
      event: state.eventShow,
      allOwnedEquipment: state.allOwnedEquipment,
      currentUser: state.currentUser,
      equipmentTypes: state.equipmentTypes,
      equipmentModels: state.equipmentModels
    }
  }


export default connect(mapStateToProps, null)(EventShow) 