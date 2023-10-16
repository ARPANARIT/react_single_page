import React from "react";
import "./skills.css";
import html from "../../images/html-bg.png"
import css from "../../images/css-bg.png"
import flutter from "../../images/flutter-bg.png"
import laravel from "../../images/laravel-bg.png"
import mysql from "../../images/mysql-bg.png"
import react from "../../images/react-bg.png";
import php from "../../images/php-bg.png"
import js from "../../images/javascript.png"
const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills I Know !</h1>
      <div className="outer-skill-container">
        <div className="skill">
          <img src={html} className="skill-img"></img>
          <h2>HTML</h2>
        </div>
        <div className="skill">
          <img src={css} className="skill-img"></img>
          <h2>CSS</h2>
        </div>
        <div className="skill">
          <img src={flutter} className="skill-img"></img>
          <h2>FLUTTER</h2>
        </div>
        <div className="skill">
          <img src={laravel} className="skill-img"></img>
          <h2>LARAVEL</h2>
        </div>
        <div className="skill">
          <img src={mysql} className="skill-img"></img>
          <h2>MYSQL</h2>
        </div>
        <div className="skill">
          <img src={react} className="skill-img"></img>
          <h2>REACT</h2>
        </div>
        <div className="skill">
          <img src={php} className="skill-img"></img>
          <h2>PHP</h2>
        </div>
        <div className="skill">
          <img src={js} className="skill-img"></img>
          <h2>JS</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
