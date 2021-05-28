import * as React from "react";
import "./Home.scss";
import jsLogo from "../../public/static/javascript-logo.svg";
import profilPhoto from "../../public/static/profil.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSchool, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const redirectTo = (url) => {
  window.open(url, "_blank");
};
const Home = () => {
  return (
    <div className="home__container">
      <img
        src={profilPhoto}
        className="profil"
        alt="profile"
        onClick={() => {
          redirectTo("https://www.linkedin.com/in/alexandru-tapirdea/");
        }}
      />
      <h1 className="home__title">Alexandru Tăpîrdea</h1>
      <h3 className="home__subtitle">Full Stack Web Developer</h3>
      <div className="typewriter">
        <h4 className="home__description">
          <b>Developing</b> complex web applications and <b>teaching</b> web
          development fundamentals{" "}
        </h4>
      </div>
      <div className="home__social-container">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="header__icon"
          size="3x"
          onClick={() => {
            redirectTo("https://www.linkedin.com/in/alexandru-tapirdea/");
          }}
        />
        <FontAwesomeIcon
          icon={faMedium}
          className="header__icon"
          size="3x"
          onClick={() => {
            redirectTo("https://alexandru-tapirdea.medium.com/");
          }}
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="header__icon"
          size="3x"
          onClick={() => {
            redirectTo(
              "https://www.youtube.com/channel/UCO_gq2eoHaBK1CX2NjD6igw/videos"
            );
          }}
        />
        <FontAwesomeIcon
          icon={faSchool}
          className="header__icon"
          size="3x"
          onClick={() => {
            redirectTo("https://laborator-fmi-web.educationhost.cloud/");
          }}
        />
      </div>
      <FontAwesomeIcon
        icon={faArrowDown}
        className="header__icon arrow-down"
        size="3x"
      />
    </div>
  );
};

export default Home;
