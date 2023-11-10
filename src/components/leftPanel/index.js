import React from "react";
import "./index.css";
import {
  FaClipboardList,
  FaSortNumericDownAlt,
  FaShoePrints,
  FaRegWindowClose,
  FaTshirt,
  FaChild,
  FaBoxes,
  FaBox,
  FaUserTie,
  FaFemale,
  FaQuestion,
  FaPhoneAlt,
  FaSplotch,
} from "react-icons/fa";
import OptionCards from "../optionCards";
import Accordion from "../accordion";
import Avatar from "../avatar";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LeftPanel = ({ onClose }) => {
  const sampleData = [
    {
      cardName: "Men",
      icon: <FaUserTie color="white" size={26} />,
    },
    {
      cardName: "Women",
      icon: <FaFemale color="white" size={26} />,
    },
    {
      cardName: "Kid",
      icon: <FaChild color="white" size={26} />,
    },
    ,
  ];
  const sampleData2 = [
    {
      leftIcon: <FaTshirt color="white" size={14} />,
      name: "Top wear",
    },
    {
      leftIcon: <FaSortNumericDownAlt color="white" size={14} />,
      name: "Bottom Wear",
    },
    {
      leftIcon: <FaShoePrints color="white" size={14} />,
      name: "Shoes",
    },
    {
      leftIcon: <FaBoxes color="white" size={14} />,
      name: "Accessories",
    },
  ];
  let navigate = useNavigate();
  return (
    <div className="left">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 10,
        }}
        className="onClose"
      >
        <FaRegWindowClose
          className="icon"
          onClick={onClose}
          color="gray"
          size={30}
        />
      </div>
      <Box mb={2}>
        <OptionCards
          //count={23}
          // bgColor={"#b7c8ed"}
          cardName={"Home"}
          // isSelected={true}
          icon={<FaClipboardList color="#f5a623" size={26} />}
        />
      </Box>
      <Box mb={2}>
        <Accordion
          accordionName={"Categories"}
          icon={<FaBox size={26} color="white" />}
          //   isSelected={true}
        >
          <div>
            {sampleData2.map((item, i) => {
              return (
                <Box
                  mb={2}
                  onClick={() =>
                    navigate(
                      `/section/${item.name.replace(/\s/g, "").toLowerCase()}`
                    )
                  }
                >
                  <OptionCards
                    cardName={item.name}
                    count={item.counts}
                    on
                    //  icon={<Avatar leftIcon={item.leftIcon} />
                    icon={item.leftIcon}
                  />
                </Box>
              );
            })}
          </div>
        </Accordion>
      </Box>
      {sampleData.map((card, i) => {
        return (
          <Box
            mb={2}
            onClick={() => navigate(`/section/${card.cardName.toLowerCase()}`)}
          >
            {" "}
            <OptionCards cardName={card.cardName} icon={card.icon} />
          </Box>
        );
      })}
    </div>
  );
};

export default LeftPanel;
