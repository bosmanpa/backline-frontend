import React from 'react';
import '../App.css';
import { loginSuccess } from '../actions/index'
import { connect } from 'react-redux'

class Login extends React.Component {
    state = {
      username: 'user',
      password: 'password',
    }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3001/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert('invalid credentials')
      } else {
        localStorage.setItem('token', data.token)
        this.props.loginSuccess(data)
        this.props.history.push('/dashboard')
      }
    })
  }

  redirectToSignup = () => {
    this.props.history.push('/signup')
  }
  
  render(){
    return (
      <div>
          <form onSubmit={this.handleLogin}>
            <input name={'username'} onChange={(e) => this.handleInputChange(e)} value={this.state.username} /><br/>
            <input name={'password'} onChange={(e) => this.handleInputChange(e)} value={this.state.password} /><br/>
            <input type='submit' value='login' />
          </form>
          <div>
            <button onClick={this.redirectToSignup}>Create Account</button>
          </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (user) => {
      dispatch(loginSuccess(user))
    }
  }
}




export default connect(null, mapDispatchToProps)(Login);