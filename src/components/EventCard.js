import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { eventShow } from '../actions/index'





class EventCard extends Component {
    
    handleClick = (eventShow) =>{
        this.props.eventShow(eventShow)
        this.props.history.push('/eventshow')
    }


    render () {
    return(
        <Card onClick={() => this.handleClick(this.props.event)} style={{ width: '12rem'}}>
        <Card.Body>
            <Card.Title>{this.props.event.name}</Card.Title>
            <Card.Text>{new Date(this.props.event.start_date).toDateString()} - {new Date(this.props.event.end_date).toDateString()}</Card.Text>
            <Card.Text>{this.props.event.location}</Card.Text>
        </Card.Body>
        </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      eventShow: (event) => {
        dispatch(eventShow(event))
      }
  }
}


export default withRouter(connect(null, mapDispatchToProps)(EventCard))