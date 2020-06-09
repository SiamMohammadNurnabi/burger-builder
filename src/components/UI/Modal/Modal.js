import React from "react";
import OrderSummary from "../../OrderSummary/OrderSummary";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";
import "./Modal.css";

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} click={props.clicked} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
