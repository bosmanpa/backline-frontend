import React, { Component }from 'react';

export default function WithAuth(WrappedComponent) {
  return class extends Component {

    componentDidMount(){
      const token = localStorage.getItem('token')

      if(!token){
        this.props.history.push('/login')
      } else {

        const reqObj = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }

        fetch('http://localhost:3001/current_user', reqObj)
          .then(resp => resp.json())
          .then(data => {
            if(data.error) {
              this.props.history.push('/login')
            } else {
              this.props.loginSuccess(data)

            }
          })
      }
    }

    render() {
      return <WrappedComponent  {...this.props}/>;
    }
  };
}