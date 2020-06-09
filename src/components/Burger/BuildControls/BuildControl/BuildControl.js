import React from "react";

import "./BuildControl.css";

const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="More" onClick={props.added} disabled={props.disAdd}>
        Add
      </button>
      <button
        className="Less"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Remove
      </button>
    </div>
  );
};

export default buildControl;
