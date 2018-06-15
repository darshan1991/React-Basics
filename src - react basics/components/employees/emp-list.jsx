import React, { Component } from 'react'
import EmpDetails from './emp-details';
import { EmpForm } from './emp-form';

export default class EmpList extends Component {
    constructor(props) {
        super(props);
        this.state = {  employee: [ 
            {id: 1, empNo: 'CLB123', firstName: 'Darshan', lastName:'HN', city: 'Blr'},
            {id: 2, empNo: 'CLB124', firstName: 'Sunil', lastName:'CD', city: 'Gdg'},
            {id: 3, empNo: 'CLB125', firstName: 'Basavaraj', lastName:'JJ', city: 'Blg'}
        ],
        latestId: 4,
        selectedEmployee: null
    };

}
 showDetails = (selectedEmployee) => {
     console.log(selectedEmployee);
     this.setState({
         selectedEmployee: selectedEmployee
     })
 }
 addEmployee = (empObj) => {
    let newEmployee = Object.assign({}, empObj, {id: this.state.latestId});
        
    let newList = [...this.state.employee, newEmployee];
    this.setState({
        employee: newList,
        latestId: this.state.latestId + 1
    });
}
  render() {
      const title = <h3> List of Employees </h3> ;
      const empRows = this.state.employee.map (e => {
                      return (
                    <tr key={e.id}>    
                        <td>{e.id}</td>
                        <td>{e.empNo}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.city}</td>
                        <td>
                        <button className= "ui basic blue button"
                        onClick={() => this.showDetails(e)}>
                        Show Details
                        </button>
                        </td>
                     </tr>
                         )
                     });
    return (
      <div>
         {title}      
        <table class="ui blue basic table"><thead>
                <tr>
                    <th>Id</th>
                    <th>empNo</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>city</th>
                    <th>Action</th>
                </tr>
                </thead>
            <tbody>
         {empRows}        
            </tbody>        
        </table>
        <div className="ui divided two column grid">
        <div className="row">
            <div className="column ">
            <EmpForm addEmployee={this.addEmployee}/>
            </div>
            <div className="column ">
            {
            this.state.selectedEmployee && <EmpDetails employee = {this.state.selectedEmployee}/>
            }
            </div>
        </div>
        </div>
        
    </div>
    )
  }
}
