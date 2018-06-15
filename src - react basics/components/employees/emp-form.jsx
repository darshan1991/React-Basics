import React, { Component } from 'react'
import {PropTypes} from 'prop-types';

export  class EmpForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            empNo: '',
            firstName: '',
            lastName: '',
            city: ''
        }
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    resetForm = () => {
        this.setState({
            empNo: '',
            firstName: '',
            lastName: '',
            city: '' 
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        this.props.addEmployee(this.state);
        this.resetForm();
    }
  render() {
    return (
        <form onSubmit = {this.handleSubmit} className="ui form"> 
        <div className="field">
        <label>Emp No</label>
        <input type = "text" name="empNo" value={this.state.empNo}
        onChange={this.handleChange}/>
        </div>

         <div className="field">
        <label>First Name </label>
        <input type = "text" name="firstName" value={this.state.firstName}
        onChange={this.handleChange}/>
        </div>

         <div className="field">
        <label>Last Name</label>
        <input type = "text" name="lastName" value={this.state.lastName}
        onChange={this.handleChange}/>
        </div>

         <div className="field">
        <label>City</label>
        <input type = "text" name="city" value={this.state.city}
        onChange={this.handleChange}/>
        </div>
        <button className="ui blue basic button"> Add Employee </button>
        </form>
    )
  }
}
EmpForm.protoType = {
    addEmployee: PropTypes.func.isRequired 
}