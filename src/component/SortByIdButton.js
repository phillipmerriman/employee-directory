import React from "react";

function SortByIdButton(props) {

//   const sortById = () => {
//     let ids = props.employee.sort((a, b) => (a.id > b.id) ? 1 : -1);
//     console.log(ids);
//     return ids;
//   }

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        onClick={() => props.sortById()}
      >
        Sort by id!
      </button>
    </div>
  );
}

export default SortByIdButton;
