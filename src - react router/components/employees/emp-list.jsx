import React, { Component } from 'react'
//import { mockEmployees } from './emp-mock-data';
import { Link } from 'react-router-dom';
import { EmpService } from '../../shared/services/emp-service';
//import axios from 'axios';

export class EmpList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
    };
    this.empService = new EmpService();
}
componentDidMount = () => {
    this.empService.getEmployees()
   // axios.get('http://localhost:8080/api/employees')
    .then(employees => 
        this.setState({
            employees        
        })) 
    .catch(err => 
        console.log(err));
}

  
  render() {
      const title = <h3> List of Employees </h3> ;
      const empRows = this.state.employees.map (e => {
                      return (
                    <tr key={e.id}>    
                        <td>{e.id}</td>
                        <td>{e.empNo}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.city}</td>
                        <td>
                        {/* <button className= "ui basic blue button"
                        onClick={() => this.showDetails(e)}>
                        Show Details
                        </button> */}
                        <Link className="ui primary button"
                                          to={`/employee/${e.id}`}>
                                      Show Details
                                    </Link>
                        </td>
                     </tr>
                         )
                     });
    return (
      <div>
         {title}      
        <table class="ui blue table striped">
            <thead>
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
    </div>
    )
  }
}
