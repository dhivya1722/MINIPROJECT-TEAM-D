import React, { useState } from "react";
import '../Styles/Dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons"; // Import the menu icon
import Projecttable from "./Projecttable";
import EventList from "./Eventcard";

const Dashboard: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={`Dashboard ${menuVisible ? 'menu-visible' : ''}`}>
       <div className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="MenuIcon" />
      </div>
      <div className="navbar">
        <div className="Header">
          <img src="jin.png" alt="jin" />
        </div>
        <div className="body">
          <ul className="Optionlist">
            <li>Dashboard</li>
            <li>Timesheet</li>
            <li>Leave</li>
            <li>Work From Home</li>
            <li>Survey</li>
            <li>Service Desk</li>
            <li>Forms</li>
            <li>Travel</li>
            <li>Expenses</li>
            <li>Resourcing</li>
          </ul>
        </div>
        <div className="footer">
          <img src="profilepic.png" alt=":)" />
          <span className="Name">Dhivya</span>
          <FontAwesomeIcon icon={faSignOutAlt} className="LogoutIcon" />
        </div>
      </div>
      <div className="Main">
        <EventList />
        <Projecttable />
      </div>
     
    </div>
  );
};

export default Dashboard;
