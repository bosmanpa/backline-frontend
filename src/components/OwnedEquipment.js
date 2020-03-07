import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'


class OwnedEquipment extends Component {
 state={
     type: '',
     model: null
    }

    componentDidMount(){
        const currentModel = this.props.equipmentModels.filter(model => model.id === this.props.equipment.model_id)[0]
        const currentType = this.props.equipmentTypes.filter(type => currentModel.equipment_type_id === type.id)[0]
        this.setState({type:currentType.name, model:currentModel})
    }

    deleteOwnedEquipment = () => {
        fetch(`http://localhost:3001/owned_equipments/${this.props.equipment.id}`, { method: 'DELETE'})``
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        }

    renderCard = () => {
        if (this.state.model !== null){
            return (        
            <Card.Body>
                <Card.Img variant="top" src={this.state.model.image}/>
                <Card.Title>{this.state.model.name}</Card.Title>
                <Card.Text>{this.state.model.description}</Card.Text>
                <Button variant="primary" onClick={this.deleteOwnedEquipment}>Remove</Button>
            </Card.Body>)
        }
    }

    render () {
    return(            
    <Card border="primary" style={{ height: '22rem', width: '12rem'}}>
            {this.renderCard()}
    </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {equipmentModels: state.equipmentModels, equipmentTypes: state.equipmentTypes}
  }

export default connect(mapStateToProps)(OwnedEquipment)