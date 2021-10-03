import React from "react";
import "./index.css";

const CustomButton = ({ onClick, style }) => (
  <button className={"button " + style} onClick={onClick}>
    To the Casino
  </button>
);

export default CustomButton;
