import React from "react";

function TableHeader(props) {
  let employee = props.employee;
  return (
    <thead>
      <tr>
        {Object.keys(employee).map((key) => (
          <th>{key}</th>
        ))}
        {/* <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Occupation</th>
          <th scope="col">Location</th> */}
      </tr>
    </thead>
  );
}

export default TableHeader;
