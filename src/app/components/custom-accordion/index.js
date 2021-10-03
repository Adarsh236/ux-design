import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";

const CustomAccordion = ({ title, content }) => {
  const [hide, setHide] = React.useState(true);
  return (
    <div className="accordion">
      <section className={`content ${hide ? "hide" : ""}`}>{content}</section>
      <section className="accordion-header">
        <div className="header-content">
          <div className="accordion-title">
            {hide ? "Show " : "Hide "} {title}
          </div>
          <div
            className={`animate-btn ${hide ? "" : "animate"}`}
            onClick={() => setHide(!hide)}
          >
            <ExpandMoreIcon />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomAccordion;
