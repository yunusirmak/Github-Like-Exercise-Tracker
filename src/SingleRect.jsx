import React from "react";
import "./calendar.css";

function SingleRect(props) {
  return (
    <div className="square" style={{ backgroundColor: props.rectColor }}></div>
  );
}

export default SingleRect;
