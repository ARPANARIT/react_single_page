import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import bg from "../../images/git-profile_1.jpg";
const Home = () => {
  return (
    <>
      <section className="home-wrapper">
        <div className="home-container">
          <span>
            Hi,
            <br />
            I'am Arpana,
            <br />
            Developer
          </span>
          <h5>PASSIONATE | OPTIMISTIC | CHEERFUL</h5>
          <NavLink to="/contact">
            <button>CONTACT ME</button>
          </NavLink>
        </div>
        <div className="container-bg">
          <img className="bg" src={bg} />
        </div>
      </section>
    </>
  );
};

export default Home;
