import React from "react";

function SortButton(props) {
  return (
    <div>
      <h3>Sort By:</h3>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />{" "}
          Id
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />{" "}
          Name
        </label>
      </div>
    </div>
  );
}

export default SortButton;
