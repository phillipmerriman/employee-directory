import "./App.css";
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./component/EmployeeTable";
import TableHeader from "./component/TableHeader";
import SortByNameButton from "./component/SortByNameButton";
import SortByIdButton from "./component/SortByIdButton";
import FilterInput from "./component/FilterInput";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    favoriteFoods: "",
    original: employees
  };

  sortByName = () => {
    let employees = this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({employees});
  };

  sortById = () => {
    let employees = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.setState({employees});
  }

  handleInputChange = (event) => {
     const { name, value } = event.target;
     this.setState({[name]:value})
     console.log(value);
     const newFavFoods = this.state.original.filter((employee) => {
       return employee.favoriteFood.toLowerCase().includes(value.toLowerCase())
     })
     this.setState({employees: newFavFoods});
  }

  // Map over this.state.employees and render an employee component for each employee object
  render() {
    return (
      <div>
        <SortByNameButton 
          sortByName={this.sortByName}
        />
        <SortByIdButton 
          sortById={this.sortById} 
        />
        <FilterInput 
          favoriteFoods={this.state.favoriteFoods} 
          handleInputChange={this.handleInputChange} />
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
