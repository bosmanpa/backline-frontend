import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux';



class OwnedEquipment extends Component {
 state={
     type: '',
     model: null
    }

    componentDidMount(){
        const currentModel = this.props.equipmentModels.filter(model => model.id === this.props.equipment.model_id)[0]
        const currentType = this.props.equipmentTypes.filter(type => currentModel.equipment_type_id === type.id)[0]
        console.log(currentType.name, currentModel)
        this.setState({type:currentType.name, model:currentModel})
    }

    renderCard = () => {
        if (this.state.model !== null){
            return (        
            <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{this.state.model.name}</Card.Title>
                <Card.Text>{this.state.type}</Card.Text>
                <Card.Text>{this.state.model.description}</Card.Text>
            </Card.Body>
            </Card>)
        }
    }

    render () {
    return(
        <div>
            {this.renderCard()}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {equipmentModels: state.equipmentModels, equipmentTypes: state.equipmentTypes}
  }

export default connect(mapStateToProps)(OwnedEquipment)