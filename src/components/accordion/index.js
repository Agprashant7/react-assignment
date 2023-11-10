import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Accordion = ({ accordionName, icon, children, isSelected }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className="accordionCard" onClick={() => setIsActive(!isActive)}>
        <div className="accordionIcon">
          {icon} {isSelected ? <div className="dot"></div> : <></>}
        </div>
        <div className="accordionName">{accordionName}</div>

        <div className="arrow">
          <div>
            {isActive ? (
              <FaAngleUp color="white" />
            ) : (
              <FaAngleDown color="white" />
            )}
          </div>
        </div>
      </div>

      {isActive ? <div className="accordionContent">{children}</div> : <></>}
    </>
  );
};
export default Accordion;

Accordion.propTypes = {
  accordionName: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.number,
  isSelected: PropTypes.bool,
};
Accordion.defaultProps = {
  Accordion: "Sample",
  icon: <FaAngleDown />,
  count: 0,
  isSelected: false,
};
