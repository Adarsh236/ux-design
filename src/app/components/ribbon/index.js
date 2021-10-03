import React from "react";
import "./index.css";

const Ribbon = ({ type, title }) => (
  <div className="ribbon-container">
    <div className="ribbon-child-container">
      <div className={type}>
        <div className="ribbon-text">{title}</div>
      </div>
    </div>
  </div>
);

export default Ribbon;
