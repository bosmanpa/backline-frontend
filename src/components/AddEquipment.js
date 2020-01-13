import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'

class AddEquipment extends Component{
    state = {
        equipment_type: null
    }
    
    componentDidMount(){
      const typeDropdown = document.getElementById('equipment_type');
          typeDropdown.length = 0;
      const defaultTypeOption = document.createElement('option');
          defaultTypeOption.text = 'Choose Equipment Type';
          defaultTypeOption.value = null
          typeDropdown.add(defaultTypeOption);
          typeDropdown.selectedIndex = 0;    
      
      fetch('http://localhost:3001/equipment_types')
      .then(resp => resp.json())
      .then(types => {
        types.forEach(type => {
          const option = document.createElement('option');
          option.text = type.name;
          option.value = type.id;
          typeDropdown.add(option);
        })
      }) 
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    render(){
        return(
            <div>
              <form>
                <select id='equipment_type' onChange={this.handleChange}>
                </select>
              </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginSuccess: (user) => {
        dispatch(loginSuccess(user))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(AddEquipment)) 