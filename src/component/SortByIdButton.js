import React from "react";

function SortByIdButton(props) {

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        style={{margin: "5px"}}
        onClick={() => props.sortById()}
      >
        Sort by id!
      </button>
    </div>
  );
}

export default SortByIdButton;
