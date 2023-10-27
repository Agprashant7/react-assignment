import "./App.css";
import {
  FaClipboardList,
  FaAddressCard,
  FaHospitalUser,
  FaRegCalendarAlt,
  FaHome,
  FaSearch,
  FaBuilding,
  FaInbox,
} from "react-icons/fa";

import OptionCards from "./components/optionCards";
import Accordion from "./components/accordion";
import Avatar from "./components/avatar";

function App() {
  const sampleData = [
    {
      cardName: "Prospects",
      icon: <FaAddressCard color="grey" size={26} />,
    },
    {
      cardName: "Residents",
      icon: <FaHospitalUser color="grey" size={26} />,
    },
    {
      cardName: "Calendar",
      icon: <FaRegCalendarAlt color="grey" size={26} />,
    },
    {
      cardName: "Availability",
      icon: <FaHome color="grey" size={26} />,
    },
    {
      cardName: "Leasing Binder",
      icon: <FaBuilding color="grey" size={26} />,
    },
    {
      cardName: "Search",
      icon: <FaSearch color="grey" size={26} />,
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
    <div className="App">
      <div className="left">
        <OptionCards
          count={23}
          bgColor={"#b7c8ed"}
          cardName={"To Do List"}
          isSelected={true}
          icon={<FaClipboardList color="#2552b3" size={26} />}
        />
        <Accordion
          accordionName={"InBox"}
          icon={<FaInbox size={26} color="gray" />}
          isSelected={true}
        >
          {sampleData2.map((item, i) => {
            return (
              <OptionCards
                cardName={item.profileName}
                count={item.counts}
                icon={<Avatar profileLink={item.profileLink} />}
              />
            );
          })}
        </Accordion>
        {sampleData.map((card, i) => {
          return <OptionCards cardName={card.cardName} icon={card.icon} />;
        })}
      </div>
    </div>
  );
}

export default App;
