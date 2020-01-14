import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class OwnedEquipment extends Component {
 
    render () {
    return(
        <Card style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>{this.props.equipment.owner_id}</Card.Title>
        </Card.Body>
        </Card>
        )
    }
}

export default OwnedEquipment