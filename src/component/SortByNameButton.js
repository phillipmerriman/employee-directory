import React from "react";

function SortByNameButton(props) {

  // const sortByName = () => {
  //   let employee = props.employee.sort((a, b) => (a.name > b.name) ? 1 : -1);
  //   console.log(employee);
  //   return employee;
  // };

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        onClick={() => props.sortByName()}
      >
        Sort by name!
      </button>
    </div>
  );
}

export default SortByNameButton;
