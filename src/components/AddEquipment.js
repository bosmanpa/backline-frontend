import React, { Component } from 'react';
import WithAuth from './WithAuth';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/index'

class AddEquipment extends Component{
    state = {
        equipment_type: null,
        equipment_model: null,
        filtered_models: [],
        current_model_name: '',
        current_model_description: ''

    }
    
    componentDidMount(){
      const typeDropdown = document.getElementById('equipment_type');
          typeDropdown.length = 0;
      const defaultTypeOption = document.createElement('option');
          defaultTypeOption.text = 'Choose Equipment Type';
          defaultTypeOption.value = null
          typeDropdown.add(defaultTypeOption);
          typeDropdown.selectedIndex = 0;    
      const modelDropdown = document.getElementById('equipment_model');
          modelDropdown.length = 0;
      const defaultModelOption = document.createElement('option');
          defaultModelOption.text = 'Choose Model';
          defaultModelOption.value = null
          modelDropdown.add(defaultModelOption);
          modelDropdown.selectedIndex = 0;    
      
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

    handleTypeChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
      this.fetchModels()
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
      const currentModel = this.state.filtered_models.filter(model => parseInt(e.target.value) === model.id)
      this.renderModelInfo(currentModel[0])
    }

    fetchModels = () => {
        fetch('http://localhost:3001/equipment_models')
        .then(resp => resp.json())
        .then(models => {
          const filteredModels = models.filter(model => model.equipment_type_id === Number.parseInt(this.state.equipment_type))
          const modelDropdown = document.getElementById('equipment_model')
          modelDropdown.length = 0;
          filteredModels.forEach(model => {
            const option = document.createElement('option');
              option.text = model.name;
              option.value = model.id;
              modelDropdown.add(option);
          })
        this.renderModelInfo(filteredModels[0])
        this.setState({filtered_models:filteredModels, equipment_model: filteredModels[0].id})
        })
    }

    renderModelInfo = (model) => {
      this.setState({ 
        current_model_name: model.name,
        current_model_description: model.description
      })
    }

    handleClick = () => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          owner_id: this.props.currentUser.id,
          model_id: parseInt(this.state.equipment_model)
        })
      }
      console.log(reqObj)
      fetch('http://localhost:3001/owned_equipments', reqObj)
      .then(resp => resp.json())
      .then(data => {
        this.props.history.push('/ownerprofile')
      })

    }

    render(){
          if (this.state.equipment_model === null){
          return(
          <React.Fragment>
          <div>
              <form>
                <select id='equipment_type' onChange={this.handleTypeChange}>
                </select>
              </form>
              <form>
                <select id='equipment_model' onChange={this.handleChange}>
                </select>
              </form>
            </div>
          </React.Fragment>
        )}
        else {
          return(         
           <React.Fragment>
            <div>
                <form>
                  <select id='equipment_type' onChange={this.handleTypeChange}>
                  </select>
                </form>
                <form>
                  <select id='equipment_model' onChange={this.handleChange}>
                  </select>
                </form>
              </div>
              <div>
              <h3>{this.state.current_model_name}</h3>
              <p>{this.state.current_model_description}</p>
              <button onClick={this.handleClick}>Add This Equipment</button>
            </div>
            </React.Fragment>
            )
        }
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