import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faUser , faEnvelope, faKitchenSet} from "@fortawesome/free-solid-svg-icons";


const SideNav = () => {
  return (
    <>
      <div className="sidenav">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to='/'className="nav-text">
            <FontAwesomeIcon icon={faHouse} className="fa-icons" size="lg"/>
            <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-text">
            <FontAwesomeIcon icon={faUser} className="fa-icons" size="lg"/>
            <span>About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/contact'className="nav-text">
            <FontAwesomeIcon icon={faKitchenSet}className="fa-icons" size="lg"/>
            <span>Skills</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
