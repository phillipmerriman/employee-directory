import React from "react";

function SortByNameButton(props) {

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        style={{margin: "5px"}}
        onClick={() => props.sortByName()}
      >
        Sort by name!
      </button>
    </div>
  );
}

export default SortByNameButton;
