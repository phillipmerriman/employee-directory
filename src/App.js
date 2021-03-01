import "./App.css";
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./component/EmployeeTable";
import TableHeader from "./component/TableHeader";
import SortByNameButton from "./component/SortByNameButton";
import SortByIdButton from "./component/SortByIdButton";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
  };

  sortByName = (name) => {
    let employees = this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({employees});
  };

  sortById = (id) => {
    let employees = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.setState({employees});;
  }

  removeFriend = (id) => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter((friend) => friend.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };
  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <SortByNameButton 
          sortByName={this.sortByName}
        />
        <SortByIdButton 
          sortById={this.sortById} 
        />
        <table className="table table-striped table-dark">
          <TableHeader employee={employees[0]} />
          <tbody>
            {this.state.employees.map((employee) => (
              <EmployeeTable
                employee={employee}
                // removeFriend={this.removeFriend}
                // id={employee.id}
                // key={employee.id}
                // name={employee.name}
                // image={employee.image}
                // occupation={employee.occupation}
                // location={employee.location}
                // email={employee.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
