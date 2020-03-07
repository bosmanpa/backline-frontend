import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component{

    homeClick = () => {
        this.props.history.push("/dashboard")
    }

    logoutClick = () => {
        localStorage.setItem("token", '')
        window.location.reload(true);
    }

    render(){
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand>Backline</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link onClick={this.homeClick}>Home</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link onClick={this.logoutClick}>Logout</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )}
  };
  
  export default withRouter(connect(null, null)(NavBar));