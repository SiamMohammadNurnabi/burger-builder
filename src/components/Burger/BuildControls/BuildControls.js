import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import "./BuildControls.css";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        Current price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            label={ctrl.label}
            key={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.remove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            disAdd={props.disAdded[ctrl.type]}
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={!props.purchased}
        onClick={props.purchasing}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
