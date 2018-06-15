import React from 'react'

function EmpDetails(props) {
    return (
        <div className="ui card">
        <div className="content">
        <div className="header">
        <h3>
        Employee Details with Id: {props.employee.id}
        </h3>
        {/* <p><strong>Employee Id: </strong> {props.employee.id}</p> */}
        <p><strong>Employee No.: </strong> {props.employee.empNo}</p>
        <p><strong>First Name: </strong> {props.employee.firstName}</p>
        <p><strong>Last Name: </strong> {props.employee.lastName}</p>
        <p><strong>City: </strong> {props.employee.city}</p>
        </div>
        </div>
        </div>
    )
}

export default EmpDetails;