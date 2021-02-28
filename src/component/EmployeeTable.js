import React from "react";

function EmployeeTable(props) {
  let employee = props.employee;
  return (
    <tr>
      {Object.keys(employee).map((key) => (
        <td>{employee[key]}</td>
      ))}
      {/* <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.occuptaion}</td>
          <td>{employee.location}</td> */}
    </tr>
  );
}

export default EmployeeTable;
