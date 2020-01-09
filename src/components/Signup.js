import React, { Component } from 'react'

class Signup extends Component{
state ={
    username: '',
    password: '',
    password_confirmation: ''
}
handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3001/users', reqObj)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }


render(){
    return (
      <div>
          <form onSubmit={this.handleSignup}>
            Username <input name={'username'} onChange={(e) => this.handleInputChange(e)} value={this.state.username} /><br/>
            Password <input name={'password'} onChange={(e) => this.handleInputChange(e)} value={this.state.password} /><br/>
            Confirm Password <input name={'password_confirmation'} onChange={(e) => this.handleInputChange(e)} value={this.state.password_confrimation} /><br/>
            <input type='submit' value='Sign Up' />
          </form>
      </div>
    );
  }
}

export default Signup