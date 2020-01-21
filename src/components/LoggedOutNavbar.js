import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component{
    loginClick = () => {
        this.props.history.push("/login")
    }

    signupClick = () => {
        this.props.history.push("/signup")
    }

    render(){
    if (localStorage.token === "") {return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>Backline</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link onClick={this.signupClick}>Sign Up</Nav.Link>
            <Nav.Link onClick={this.loginClick}>Login</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )} else {
        return null
    }
}
  };
  
  export default withRouter(connect(null, null)(NavBar));