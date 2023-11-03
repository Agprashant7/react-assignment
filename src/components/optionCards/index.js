import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { FaSketch } from "react-icons/fa";
const OptionCards = ({
  cardName,
  bgColor = "#524c4c",
  icon,
  count,
  isSelected,
}) => {
  return (
    <div
      className="optionCardContainer"
      style={{
        // backgroundColor: bgColor,
        justifyContent: !count ? "start" : "start",
      }}
    >
      <div className="optionCard">
        <div className="icon">
          {icon}
          {isSelected ? <div className="dot"></div> : <></>}
        </div>
        <div className="cardName">
          <p>{cardName}</p>
        </div>
      </div>
      <div className="countContainer">
        {count ? (
          <div className="counts">
            <p style={{ padding: 4 }}>{count > 99 ? "99+" : count}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OptionCards;

OptionCards.propTypes = {
  cardName: PropTypes.string,
  bgColor: PropTypes.string,
  icon: PropTypes.element,
  count: PropTypes.number,
  isSelected: PropTypes.bool,
};
OptionCards.defaultProps = {
  cardName: "Sample",
  bgColor: "white",
  icon: <FaSketch />,
  count: 0,
  isSelected: false,
};
