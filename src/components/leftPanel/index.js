import React from "react";
import "./index.css";
import {
  FaClipboardList,
  FaAddressCard,
  FaHospitalUser,
  FaRegCalendarAlt,
  FaHome,
  FaSearch,
  FaBuilding,
  FaInbox,
  FaRegWindowClose,
} from "react-icons/fa";
import OptionCards from "../optionCards";
import Accordion from "../accordion";
import Avatar from "../avatar";
const LeftPanel = ({ onClose }) => {
  const sampleData = [
    {
      cardName: "Prospects",
      icon: <FaAddressCard color="white" size={26} />,
    },
    {
      cardName: "Residents",
      icon: <FaHospitalUser color="white" size={26} />,
    },
    {
      cardName: "Calendar",
      icon: <FaRegCalendarAlt color="white" size={26} />,
    },
    {
      cardName: "Availability",
      icon: <FaHome color="white" size={26} />,
    },
    {
      cardName: "Leasing Binder",
      icon: <FaBuilding color="white" size={26} />,
    },
    {
      cardName: "Search",
      icon: <FaSearch color="white" size={26} />,
    },
  ];
  const sampleData2 = [
    {
      profileLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7hFU10MvjcmHDAiACQDiQJEjCyPfFFs5zA&usqp=CAU",
      profileName: "Me",
      counts: 2,
    },
    {
      profileLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7hFU10MvjcmHDAiACQDiQJEjCyPfFFs5zA&usqp=CAU",
      profileName: "Ed",
      counts: 4,
    },
    {
      profileLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB4L9NaV1EMUGwRwg4y7pEVnyzjuSykDKIg&usqp=CAU",
      profileName: "Abila",
      counts: 12,
    },
    {
      profileLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7hFU10MvjcmHDAiACQDiQJEjCyPfFFs5zA&usqp=CAU",
      profileName: "Young",
      counts: 2,
    },
    {
      profileLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyCqy4cIe7GHLI0d3sSd6UkNi40hlv2u_1w&usqp=CAU",
      profileName: "House",
      counts: 122,
    },
    {
      profileLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB4L9NaV1EMUGwRwg4y7pEVnyzjuSykDKIg&usqp=CAU",
      profileName: "Casey",
    },
  ];
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

      <OptionCards
        count={23}
        bgColor={"#b7c8ed"}
        cardName={"To Do List"}
        isSelected={true}
        icon={<FaClipboardList color="#f5a623" size={26} />}
      />
      <Accordion
        accordionName={"InBox"}
        icon={<FaInbox size={26} color="white" />}
        isSelected={true}
      >
        <div>
          {sampleData2.map((item, i) => {
            return (
              <OptionCards
                cardName={item.profileName}
                count={item.counts}
                icon={<Avatar profileLink={item.profileLink} />}
              />
            );
          })}
        </div>
      </Accordion>
      {sampleData.map((card, i) => {
        return <OptionCards cardName={card.cardName} icon={card.icon} />;
      })}
    </div>
  );
};

export default LeftPanel;
