import React, { useState } from "react";
import { connect } from "react-redux";

const ColourInput = props => {
  const [colourName, setColourName] = useState("");
  return (
    <>
      <div>
        <input
          placeholder="New Colour Name"
          value={colourName}
          onChange={e => setColourName(e.target.value)}
        />
        <div>
          <button
            onClick={() => {
              if (colourName.length) {
                props.dispatch({
                  type: "ADD_COLOUR",
                  payload: colourName.trim()
                });
                setColourName("");
              } else {
                alert("Colour name cannot be empty");
              }
            }}
          >
            Add
          </button>
        </div>
        <ul>
          {props.colours.list.map((colour, i) => (
            <li key={i}>{colour}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default connect(state => state)(ColourInput);
